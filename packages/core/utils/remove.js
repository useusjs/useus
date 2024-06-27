
import fs from 'fs-extra'
import path from 'path'

async function removeGitDir(targetPath) {
  const gitPath = path.join(targetPath, '.git')
  fs.removeSync(gitPath)
}

export {
  removeGitDir,
}
