/**
 * Created by jkwu on 17-8-16.
 */
// import style from './index.css';
var style = require('./index.css');
var text = require('./hello');
let i =0;
setInterval(() => {
  console.log(i++);
},1500);//1000为1秒钟
console.log(text);