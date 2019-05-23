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
  devtool: 'source-map'
}