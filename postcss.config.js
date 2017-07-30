const postcssImport = require('postcss-import')
const postcssCssnext = require('postcss-cssnext')
const postcssExtend = require('postcss-extend')
const postcssVariables = require('postcss-css-variables')

module.exports = {
  plugins: [
    postcssImport,
    postcssExtend,
    postcssVariables,
    postcssCssnext
  ]
}
