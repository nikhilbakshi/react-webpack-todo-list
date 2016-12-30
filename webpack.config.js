const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  entry: {
    js: './src/index.js'
  },

  output: {
    // the filename for each entry point bundle specified above in the entry:{}
    filename: '[name].bundle.js',

    // the filename of our chunks, split as required
    chunkFilename: '[id].bundle.js',

    path: './bin',

    publicPath: `http://localhost:4000/todo-list/`
  },

  module: {
    // think of loaders as transformations performed on a given file type(s)
    loaders: [
      {
        // the file to run the loaders against (*.js and *.jsx)
        test: /(\.js|\.jsx)$/,

        // stay out of the node_modules directory
        exclude: /node_modules/,

        // fires right to left, 1st lint JS, then babel transpiles to smooth out the ES6 for varied browser support
        loaders: ['babel?presets[]=react,presets[]=es2015,presets[]=stage-2']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],

  devServer: {
    contentBase: './bin',
    port: 4000,

    // only output errors to console
    stats: 'errors-only'
  }

}
