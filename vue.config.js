const path = require('path')

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    const dir = path.resolve(__dirname, 'src/assets/icons')

    config.module
      .rule('svg-sprite')
      .test(/\.svg$/) //以svg结尾的文件
      .include.add(dir).end() //且只在dir目录下的文件
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract: false}).end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
    config.module.rule('svg').exclude.add(dir) //其它svg loader排除icons目录
  }
}
