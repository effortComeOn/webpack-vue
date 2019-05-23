const path = require('path')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { STYLELINT }  = require('./index')

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.min.js'
  },
  plugins: [
    ...STYLELINT?[new StyleLintPlugin({
      files: ['**/*.css', '**/*.less', '**/*.html', '**/*.htm', '**/*.vue']
    })]:[],,
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    }),
    new VueLoaderPlugin()
  ]
}