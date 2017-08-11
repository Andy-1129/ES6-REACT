var path = require('path');//核心模块  解析路径
var webpack = require('webpack');

// console.log(webpack);

module.exports = {
  //webpack 包 的设置
  // entry: {
  //   src: ["./src/index.js"]
  // },
  entry: [
    "./src/index.js"
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath:"/static/"//出现图片报错 注释掉解决 index.html相应修改
  },
  devtool: 'cheap-module-source-map',//webpack -d 的作用
// webpack-dev-server  的设置内容
  devServer: {
      stats: { colors: true},
      port : 3001,
      inline : true,
      hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {    //解析
    extensions: [" ",".js",".jsx"]
  },
  module: {//用webpack打包 之前  进行一些操作
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader'//loader 之间用 ！分割  执行顺序 右——>左
      },
      {
        test: /\.less$/,
        loader: 'style-loader!less-loader'
      },
      {
        test: /\.(jpe?g|png)$/,
        loader: 'file-loader'
      }
    ]
  }
};
