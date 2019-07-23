const fs = require('fs');
const { execSync } = require('child_process');

const bgColorRed = '\x1b[41m\x1b[37m';
const reset = '\x1b[0m';
const bold = '\x1b[1m';

const hash = (execSync('git hash-object yarn.lock', { encoding: 'utf8' }) || '').trim();
const updateHash = newHash => fs.writeFileSync('./yarn.lock.sha1', newHash);

const args = process.argv.slice(2);
if (args.length && args[0] === '--update') {
  updateHash(hash);
  process.exit();
}

try {
  const storedHash = fs.readFileSync('./yarn.lock.sha1', 'utf8');
  if (hash !== storedHash) {
    // Packages could be out of date -- warn user
    console.log(
      `${bgColorRed}Your NPM packages are out of date (compared to yarn.lock).${reset} Run ${bold}yarn${reset}.\n`,
    );
  }
} catch (e) {
  // No stored hash -- write one for next time
  updateHash(hash);
}
