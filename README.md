# Vue-Helios

> Vue 脚手架

## npm script 命令

``` bash
# 安装依赖
npm install

# 开启本地server
npm run dev

# 构建生产环境代码，打包生成可以直接上传通天塔的zip包
npm run build

# 构建生产环境代码，并生成可视化的bundle分析报告
npm run build --report
```



## 目录结构

```javascript
bhp
├─ .babelrc   // babelrc配置
├─ .editorconfig  // 编辑器缩进换行配置，需要安装相关插件
├─ .eslintignore  // eslint 忽略文件
├─ .eslintrc.js   // eslint 规则配置文件
├─ .gitignore  // git 忽略文件
├─ .npmrc   // npm 镜像配置，使用jd内部npm库
├─ .postcssrc.js
├─ package-lock.json
├─ package.json
├─ README.md
│
├─ build
│   ├── build.js   // 打包生产代码
│   ├── check-versions.js   // node、npm 版本检查
│   ├── pack.js   // 生产zip包
│   ├── utils.js
│   ├── vue-loader.conf.js   // vue文件解析配置
│   ├── webpack.base.conf.js  // webpack 基础配置
│   ├── webpack.dev.conf.js   // webpack 开发环境配置
│   └── webpack.prod.conf.js  // webpack 生产环境配置
│
├─ config
│   └── index.js  // webpack、eslint等功能开关的配置主入口
│
├─ router
│   └── index.js  // 配置页面路由
│
└─ src   // 项目源代码
    ├── App.vue
    ├── index.html
    ├── main.js
    │
    ├─ api   // 项目中需要用到的接口
    │   └──index.js
    │
    ├─ assets // 图片资源
    │
    ├─common
    │  ├─ css // css资源
    │  │   ├── _common.scss
    │  │   └── _reset.css
    │  │
    │  └─ js // js资源
    │      └── param.js  // 接口参数配置文件
    │
    ├─components // vue组件
    ├─page // 导航内页面
    │
    └──lib   // 公用代码库
        ├── confortableWQ.js  // WQ 链接处理
        ├── ping.js  // 埋点
        ├── redirect.js  // 判断平台，并做链接跳转
        └── shareInfo.js  // 分享信息配置
```

## 功能

+ 支持`sass`/`es6`语法
+ 支持`eslint`
+ 支持端口占用，开启空闲端口
+ 支持小于10k 音频视频、字体文件，转码base64
+ 支持模块热替换
+ 支持`postcss/autoprefixer`

## 配置
> config/index.js 主配置文件

```javascript
'use strict'
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path');

module.exports = {
  base: {
    appName: 'app',
    entryFile: './src/main.js', // Vue入口文件，因为baseConfig配置了绝对路径，所以不需要'../src/main.js'
    resolveAlias: { // 设置import路径别名
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../src')
    },
    compressSize: 10000 // 小于10k的音频、视频和字体文件，会被转成base64
  },
  dev: {
    // 路径 设置
    assetsSubDirectory: 'static', // 指定CopyWebpackPlugin 插件 to参数
    assetsPublicPath: '/', // 指定output.publicPath
    staticDirectory: '../static', // 指定CopyWebpackPlugin 插件 from参数，相对于/build目录下的文件

    // webpack-dev-server 参数相关 (https://webpack.js.org/configuration/dev-server/#devserver)
    host: 'localhost', // 设置host，优先级小于process.env.HOST
    port: 8080, // 设置port，优先级小于process.env.PORT，如果port被占用会使用一个空闲port
    autoOpenBrowser: true, // 执行npm run dev命令时，是否自动开启浏览器
    errorOverlay: true, // 开启，出现错误会在浏览器以蒙层全屏显示。
    poll: false, // 是否轮询文件系统

    // friendly-errors-webpack-plugin (https://www.npmjs.com/package/friendly-errors-webpack-plugin)
    notifyOnErrors: true, // 是否以Notification API方式提示错误

    // ESLint
    useEslint: true, // 设置true，打包阶段会显示在console控制台显示lint错误和警告的代码
    showEslintErrorsInOverlay: true, // 设置true，lint错误和警告会在浏览器蒙层显示

    // source maps 设置
    devtool: 'cheap-module-eval-source-map',

    // vue-loader 设置 (https://vue-loader.vuejs.org/en/options.html)
    // 如果在调试 *.vue 文件是遇到问题，设置为false
    cacheBusting: true, // css缓存相关设置(https://css-tricks.com/strategies-for-cache-busting-css/)
    cssSourceMap: true  // 默认开启css sourcemap
  },

  build: {
    // html-webpack-plugin 设置
    index: path.resolve(__dirname, '../dist/index.html'), // filename属性，指定生成的html文件名

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'), // output.path 绝对目录
    assetsSubDirectory: './', // 指定CopyWebpackPlugin 插件 to参数
    assetsPublicPath: '//static.360buyimg.com/sbs/', // 指定output.publicPath，配置线上路径前缀
    staticDirectory: '../static', // 指定CopyWebpackPlugin 插件 from参数，相对于/build目录下的文件

    // source maps
    productionSourceMap: false,  // 生产环境不输出sourcemap
    devtool: '#source-map',

    // gzip压缩，设置true需要安装 `npm install --save-dev compression-webpack-plugin`
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // 通过运行`npm run build --report`命令，显示包分析
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
```
