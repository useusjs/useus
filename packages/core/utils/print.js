import chalk from 'chalk'
import figlet from 'figlet'

function abortPrint() {
  console.log(chalk.red.bold('创建终止！'))
}

function donePrint(appName) {
  console.log('\n')
  console.log('Done, now run:')
  console.log('\n')
  console.log(chalk.green.bold(` cd ${appName}`))
  console.log(chalk.green.bold(' pnpm install'))
  console.log(chalk.green.bold(' pnpm dev'))
  console.log('\n')
  return Promise.resolve(true)
}

function logoPrint() {
  console.log('\n')
  // https://patorjk.com/software/taag/#p=testall&f=Fire%20Font-s&t=%40ej%2Fcli
  console.log(
    chalk.grey(
      figlet.textSync('@ej/cli', {
        // Doom | Isometric3 | Sub-Zero | 3D-ASCII | Calvin S | Double
        font: 'Sub-Zero',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 500,
        whitespaceBreak: true,
      })
    )
  )
  console.log('\n')
  return Promise.resolve(true)
}

export {
  abortPrint,
  donePrint,
  logoPrint,
}
