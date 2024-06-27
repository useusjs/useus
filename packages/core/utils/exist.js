import fs from 'fs-extra'
import inquirer from 'inquirer'

async function ifExistDir(targetPath) {
  const ifExistDir = fs.existsSync(targetPath)

  return new Promise(async (resolve, reject) => {
    if (ifExistDir) {
      const answers = await inquirer.prompt([
        {
          type: 'confirm',
          message: '是否要覆盖之前的文件夹？',
          default: false,
          name: 'overwrite',
        }
      ])
      if (answers.overwrite) {
        // 覆盖 -> 删除现有文件夹
        fs.remove(targetPath)
        resolve(true)
      } else {
        // 不覆盖 -> 重新输入名字
        reject(false)
      }
    } else {
      resolve(true)
    }
  })
}

export {
  ifExistDir,
}
