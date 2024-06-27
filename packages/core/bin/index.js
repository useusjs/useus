#!/usr/bin/env node

import process from 'process'
import {program} from 'commander'
import fs from 'fs-extra'
import path from 'path'
import {ifExistDir} from '../utils/exist.js'
import {inquirerPrompt} from '../utils/inquirer.js'
import {clone} from '../utils/clone.js'
import {removeGitDir} from '../utils/remove.js'
import {donePrint, logoPrint, abortPrint} from '../utils/print.js'

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
    
    const tasks = [
      () => ifExistDir(targetPath).catch(() => abortPrint()),
      () => inquirerPrompt().catch(() => false),
      () => clone({
        repo: 'git@gitlab.jinxin.dev:ej-dr/sgda/ucard/ucard-webapp.git',
        appName,
        branchName: 'dev'
      }).catch(() => false),
      () => removeGitDir(targetPath).catch(() => false),
      () => donePrint(appName),
    ]
    for (let i = 0; i < tasks.length; i++) {
      const taskRes = await tasks[i]()
      if (!taskRes) break
    }
    // console.log(inquirerArgs);
  })

// help提示
program.on('--help', logoPrint)

program.parse(process.argv)
