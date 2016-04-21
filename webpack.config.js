var webpack = require('webpack');
//webpack与gulp并不矛盾，甚至一起使用会得到最大化的利益，
//使用webpack进行assets编译，使用gulp进行打包似乎就是为了让它们各司其职，用其所长。

module.exports = {
  entry:[
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  output:{
    path:__dirname,
    filename:'./js/entry.js'
  },
  module:{
    loaders:[{//loader就相当于gulp里的task
      test:/\.css$/,
      loader:'style!css'
    },{
      test:/\.(js|jsx)$/,
      loader:'babel-loader',
      exclude:/node_modules/
    }]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),//热替换
    new webpack.NoErrorsPlugin()//编译时出错的代码并记录，使编译后运行时的包不会发生错误
  ]
}
