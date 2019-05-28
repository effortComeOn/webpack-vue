const path = require('path')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { STYLELINT }  = require('./index')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    ...STYLELINT?[new StyleLintPlugin({
      files: ['**/*.css', '**/*.less', '**/*.html', '**/*.htm', '**/*.vue']
    })]:[],
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    }),
    new VueLoaderPlugin()
  ],
  devtool: 'source-map',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true, //target是域名的话，需要这个参数，
        pathRewrite: {'^/api' : ''},// 路径重写，也就是说会修改最终请求的API路径。
        // 比如访问的API路径：/api/users, 
        // 设置pathRewrite: {'^/api' : ''},后，
        // 最终代理访问的路径：http://www.baidu.com/users， 
        // 这个参数的目的是给代理命名后，在访问时把命名删除掉。
      }
    }
  }
}