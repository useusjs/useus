import inquirer from 'inquirer'

async function inquirerPrompt() {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt([
        /* Pass your questions in here */
        {
          type: 'input',
          name: 'baseName',
          message: 'Base Name: ',
          default: 'p1demo',
          validate: function (val) {
            if (!/^[a-z0-9]+$/.test(val)) {
              return '请输入小写字母和数字'
            }
            return true
          },
        },
        // {
        //   type: 'checkbox',
        //   name: 'externals',
        //   message: 'Externals: ',
        //   choices: [
        //     {
        //       name: '@ej/erg-renderer',
        //       value: '@ej/erg-renderer',
        //     },
        //     {
        //       name: '@ej/sheet',
        //       value: '@ej/sheet',
        //     },
        //     {
        //       name: '@ej/ui',
        //       value: '@ej/ui',
        //     },
        //     {
        //       name: '@ej/tailwind-config',
        //       value: '@ej/tailwind-config',
        //     },
        //     {
        //       name: '@ej/eslint-config',
        //       value: '@ej/eslint-config',
        //       // disabled: 'Forced dependence',
        //       // checked: true,
        //     },
        //   ],
        //   default: ['@ej/eslint-config', '@ej/tailwind-config', '@ej/ui'],
        // },
        // {
        //   type: 'list',
        //   name: 'auth',
        //   message: 'Use Auth: ',
        //   choices: ['leaf-auth', 'auth2'],
        //   default: 'leaf-auth',
        // },
      ])
      .then((answers) => {
        // Use user feedback for... whatever!!
        resolve(answers)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export {
  inquirerPrompt,
}
