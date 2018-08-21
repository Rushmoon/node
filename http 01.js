var url = require('url');

//path
var href = 'http://user:pass@host.com' +
    ':8080/p/a/t/h?query=string&id=1#hash';

var obj = url.parse(href);
//将字符串转化为json格式
// console.log(url.format(obj));
//format将json格式捕获生成地址的形式（字符串）
// var urlstr = url.resolve('/one/two/three','four');
// console.log(urlstr)
//从一个路径跳到另一个路径，最终输出结构为one/two/four
var urlStr =url.resolve('http://ex.com/','/one');
// console.log(urlstr);
//输出为http://ex.com/one
