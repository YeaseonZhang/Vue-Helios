'use strict'
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path');

module.exports = {
  base: {
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
    proxyTable: {}, // 设置webpack-dev-server代理，一般由于访问线上mock服务

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
    cssSourceMap: true
  },

  build: {
    // html-webpack-plugin 设置
    index: path.resolve(__dirname, '../dist/index.html'), // filename属性，指定生成的html文件名

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'), // output.path 绝对目录
    assetsSubDirectory: 'static', // 指定CopyWebpackPlugin 插件 to参数
    assetsPublicPath: '/', // 指定output.publicPath
    staticDirectory: '../static', // 指定CopyWebpackPlugin 插件 from参数，相对于/build目录下的文件

    // source maps
    productionSourceMap: true,
    devtool: '#source-map',

    // gzip压缩，设置true需要安装 `npm install --save-dev compression-webpack-plugin`
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // 通过运行`npm run build --report`命令，显示包分析
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
