const fs = require('fs');
const { execSync } = require('child_process');

const bgColorRed = '\x1b[41m\x1b[37m';
const reset = '\x1b[0m';
const bold = '\x1b[1m';

const hash = (execSync('git hash-object package-lock.json', { encoding: 'utf8' }) || '').trim();
const updateHash = newHash => fs.writeFileSync('./package-lock.json.sha1', newHash);

const args = process.argv.slice(2);
if (args.length && args[0] === '--update') {
  updateHash(hash);
  process.exit();
}

try {
  const storedHash = fs.readFileSync('./package-lock.json.sha1', 'utf8');
  if (hash !== storedHash) {
    // Packages could be out of date -- warn user
    console.log(
      `${bgColorRed}Your NPM packages are out of date (compared to package-lock.json).${reset} Run ${bold}npm ci${reset}.\n`,
    );
  }
} catch (e) {
  // No stored hash -- write one for next time
  updateHash(hash);
}
