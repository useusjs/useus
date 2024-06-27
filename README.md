# @ej/cli

## 目录说明

```bash
.
├── examples              -> 测试目录，可以在这里执行 pnpm ej help 用来测试指令
│   └── package.json
├── packages
│   └── core              -> 核心目录，处理执行的命令
│       ├── bin
│       │   └── index.js
│       ├── package.json
│       └── utils
│           ├── clone.js
│           ├── exist.js
│           ├── inquirer.js
│           ├── print.js
│           └── remove.js
├── package.json
├── pnpm-lock.yaml
└── pnpm-workspace.yaml
```

## 依赖
- [commander](https://github.com/tj/commander.js/blob/HEAD/Readme_zh-CN.md): 命令行处理工具
- [inquirer](https://www.npmjs.com/package/inquirer): 命令行交互工具
- [chalk](https://www.npmjs.com/package/chalk): 命令行输出美化工具
- [ora](https://www.npmjs.com/package/ora): 终端 loading 美化工具
- `git-clone`: 下载项目模板工具
- [figlet](https://www.npmjs.com/package/figlet): 终端生成艺术字
- `fs-extra`: 操作本地目录

## [Why pnpm?](https://juejin.cn/post/7260144602471776311?searchId=20240624105937D845B8438BE6510D46B3#heading-5)

使用 `npm link` 来实现本地调试有一个弊端。比如在本地有多个版本的脚手架仓库，在仓库A中修改代码后，运行 `ej` 命令后，发现更改的代码不生效。这是因为已经在仓库B的脚手架工程中运行 `npm link`，导致我们在运行 `ej` 命令后是执行仓库B中的代码，在仓库A中修改代码能生效才怪。要先在仓库B的脚手架工程中运行 `npm unlink` 后，然后在仓库A中的脚手架工程中运行 `npm link` 后，修改仓库A中的代码才能生效。

为了解决这个弊端，我们使用 `pnpm` 来搭建 `monorepo` 风格的脚手架工程。

在 `monorepo` 风格的工程中可以含有多个子工程，且每个子工程都可以独立编译打包后将产物发成 `npm` 包，故又称 `monorepo` 为多包工程。因此脚手架子工程和调试子工程是在同一个工程中，这样就做一对一的调试，从而解决了使用 `npm link` 来实现本地调试的弊端。

## Publish

```sh
pnpm publish --F @ej/cli
```

## 相关
- [哔哩哔哩 - 黑马程序员从0到1脚手架](https://www.bilibili.com/video/BV1p24y1c7Ee/)
- [掘金 - 脚手架教程](https://juejin.cn/post/7260144602471776311?searchId=20240624105937D845B8438BE6510D46B3)
