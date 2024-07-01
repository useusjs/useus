import {exec} from 'child_process'

exec('find . -maxdepth 1 -not -name \'package.json\' -not -name \'node_modules\' -not -name \'clear.js\' -not -name \'.gitignore\' -exec rm -rf {} \\;', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`)
    return;
  }
  console.log(`stdout: ${stdout}`)
  console.error(`stderr: ${stderr}`)
})
