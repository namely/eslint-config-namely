const util = require('util');
const exec = util.promisify(require('child_process').exec);

const execute = async (cmd, logOutput = true) => {
  const { stdout } = await exec(cmd);
  if (logOutput) {
    console.log(`> ${cmd}`);
    console.log(stdout.toString());
  }
  return stdout.toString();
};

const prettify = async () => {
  // Get files changed in previous commit
  const stdout = await execute('git show --pretty="" --name-only HEAD', false);
  const files = stdout.trim().split('\n');

  // Run `prettier` on JS files
  const jsFiles = files.filter(file => /\.js$/.test(file));
  if (jsFiles.length) {
    await execute(`prettier --config ./.prettierrc.js --write ${jsFiles.join(' ')}`);
  }

  // Commit changes files to Git
  const diff = (await execute(`git diff --pretty="" --name-only -- ${jsFiles}`, false))
    .trim()
    .split('\n')
    .filter(Boolean);

  if (diff.length) {
    await execute(`git add ${diff.join(' ')}`);
    await execute('git commit -m "Auto commit: Prettifying code"');
  }
};

prettify();
