import inquirer from 'inquirer'

async function inquirerPrompt() {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt([
        /* Pass your questions in here */
        // {
        //   type: 'input',
        //   name: 'projectName',
        //   message: 'Project Name: ',
        //   default: 'p1demo',
        //   validate: function (val) {
        //     if (!/^[a-zA-Z]+$/.test(val)) {
        //       return "模板名称只能含有英文";
        //     }
        //     if (!/^[A-Z]/.test(val)) {
        //       return "模板名称首字母必须大写"
        //     }
        //     return true;
        //   },
        // },
        {
          type: 'checkbox',
          name: 'externals',
          message: 'Externals:',
          choices: ['@ej/erg-renderer', '@ej/sheet', '@ej/eslint-config', '@ej/tailwind-config', '@ej/ui'],
          default: ['@ej/eslint-config', '@ej/tailwind-config', '@ej/ui'],
        },
        {
          type: 'list',
          name: 'auth',
          message: 'Use Auth:',
          choices: ['leaf-auth', 'auth2'],
          default: 'leaf-auth',
        },
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
