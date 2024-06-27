import gitClone from 'git-clone'
import ora from 'ora'

async function clone({ repo, appName, branchName }) {
  return new Promise((resolve, reject) => {
    const spinner = ora('下载中...').start()
    gitClone(repo, appName, { checkout: branchName }, function (err) {
      if (err) {
        spinner.fail('下载失败，请稍后重试！')
        resolve(false)
      } else {
        spinner.succeed('下载成功')
        resolve(true)
      }
    })
  })
}

export {
  clone,
}
