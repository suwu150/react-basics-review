/**
 * Created by jkwu on 17-8-16.
 */
// import style from './index.css';
// var style = require('./../index.css');

const text = require('./hello.js');

const i = 0;
setInterval(() => {
  // i = i + 1;
  Object.assign(i, i + 1);
  console.log(i);
}, 1500); // 1000为1秒钟
console.log(text);
