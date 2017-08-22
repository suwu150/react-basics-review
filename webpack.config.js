/**
 * Created by jkwu on 17-8-17.
 */
const path = require('path');
const webpack = require ("webpack");
const HtmlWebpackPligin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

// 一些常用的路径
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  // 开启代码源调试功能
  // devtool: 'inline-source-map',
  devtool: 'eval-source-map',
  entry: path.resolve(APP_PATH, 'app.jsx'),
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js',
    // publicPath: "/assets/",
  },
  module:{
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [{loader: 'eslint-loader', options: {rules: {semi: 0}}}],
      },
      {
        test: /\.js|\.jsx$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins:[
    // 页面的自动刷新,在修改部分时,用起来不方便,会将所有的内容刷新掉,所以使用了babel的插件babel-preset-react-hmre
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPligin({
      title: 'My project is for practise with React'
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
],
  // 开启dev-server
  devServer:{
    //我们在这里对webpack-dev-server进行配置
    contentBase: "./",
    historyApiFallback:true,
    inline:true,
    hot:true,
    port: 8080,
    // progress: true
  },
  // resolve:{
  //   extensions: ['','.js','.json']
  // }
  // resolve: {
  //   extensions: ['*', 'js','jsx'],
  // },
};