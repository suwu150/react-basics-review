/**
 * Created by jkwu on 17-8-17.
 */
var path = require('path');
const webpack = require ("webpack");
module.exports = {
  devtool: 'inline-source-map',
  entry: path.join(__dirname, 'index'),
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: "/assets/",
  },
  module:{
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
],
  devServer:{
    //我们在这里对webpack-dev-server进行配置
    contentBase: "./",
    historyApiFallback:true,
    inline:true,
    hot:true
  }
};