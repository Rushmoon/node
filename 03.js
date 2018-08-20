var fs = require('fs');
try
{
    fs.accessSync('1.txt');//同步方法
}catch(e){
    console.log(e);
}


var data = fs.readFileSync('1.txt','utf-8');//同步读取文件内容
console.log(data);
//对应的异步方法没有返回值
fs.readFile('1.txt','utf-8',function (err,data) {
    console.log(data);
})