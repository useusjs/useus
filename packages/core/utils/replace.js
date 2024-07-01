import fs from 'fs'
import path from 'path'

// 递归遍历目标文件夹
export function replaceInFiles(folderPath, targetString, replacementString) {
  fs.readdirSync(folderPath).forEach(file => {
    const filePath = path.join(folderPath, file)
    const stats = fs.statSync(filePath)

    if (stats.isDirectory()) {
      replaceInFiles(filePath, targetString, replacementString)
    } else if (stats.isFile()) {
      // 读取文件内容
      let fileContent = fs.readFileSync(filePath, 'utf8')

      // 替换字符
      fileContent = fileContent.replace(new RegExp(targetString, 'g'), replacementString)
      fileContent = fileContent.replace(new RegExp(targetString.toUpperCase(), 'g'), replacementString.toUpperCase())

      // 写回修改后的内容
      fs.writeFileSync(filePath, fileContent, 'utf8')
    }
  })

  return Promise.resolve(true)
}
