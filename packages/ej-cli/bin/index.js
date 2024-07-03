#!/usr/bin/env node

import process from 'process'
import {program} from 'commander'
import path from 'path'
import {ifExistDir} from '../utils/exist.js'
import {inquirerPrompt} from '../utils/inquirer.js'
import {clone} from '../utils/clone.js'
import {removeGitDir} from '../utils/remove.js'
import {replaceInFiles} from '../utils/replace.js'
import {donePrint, logoPrint, abortPrint} from '../utils/print.js'
import {REMOTE, BRANCH_MAP} from '../utils/repo.js'

// 首行提示
program.name('@ej/cli').usage('<command> [option]')

// 版本号
// const packageJson = JSON.parse(fs.readFileSync('../package.json', 'utf8'))
// program.version(`v${packageJson.version}`)

// 命令
// 创建项目
program
  .command('create <app-name>')
  .description('创建一个新项目')
  .action(async function (appName) {
    const currentPath = process.cwd()
    const targetPath = path.join(currentPath, appName)
    let inquirerAnswers

    const tasks = [
      () => ifExistDir(targetPath).catch(() => abortPrint()),
      () => inquirerPrompt().then((res) => inquirerAnswers = res).catch(() => false),
      () => clone({
        repo: REMOTE,
        appName,
        branchName: BRANCH_MAP['vite-vue3-leaf-auth']
      }).catch(() => false),
      () => removeGitDir(targetPath).catch(() => false),
      () => replaceInFiles(targetPath, 'p1demo', inquirerAnswers.baseName).catch(() => false),
      () => donePrint(appName),
    ]
    for (let i = 0; i < tasks.length; i++) {
      const taskRes = await tasks[i]()
      if (!taskRes) break
    }
    // console.log(inquirerAnswers)
  })

// help提示
program.on('--help', logoPrint)

program.parse(process.argv)
