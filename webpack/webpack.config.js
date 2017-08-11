var path = require('path');//核心模块  解析路径
var webpack = require('webpack');

// console.log(webpack);

module.exports = {
  //webpack 包 的设置
  entry: [
    // './src/index.js'
    path.resolve(__dirname, 'src/index.js')//两种数组形式
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-source-map',//webpack -d 的作用
// webpack-dev-server  的设置内容
  devServer: {
      publicPath: "/static/",
      stats: { colors: true},
      port : 3001,
      inline : true,
      hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {    //解析  进行 require引入时 可以省略文件后缀
    extensions: [" ",".js",".jsx",".css"]//后面可以添加文件类型
  },
};
