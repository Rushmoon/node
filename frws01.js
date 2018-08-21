const fs = require('fs');

//读取文件
const rs = fs.createReadStream('./1/1.txt',
    {highWaterMark: 1024*10});
//限制每次读的流量大小，（chunk的大小）


//写入文件
const ws = fs.createWriteStream('./2/2.txt');

var i =0;
var dataArr = [];
rs.on('data',function (chunk) {
    i++;
    //chunk就是一个buffer
    //有自己默认的长度
    // console.log(chunk);
    dataArr.push(chunk);
    console.log(i);
    ws.write(chunk);
});

rs.on('end',function (chunk) {
    console.log(dataArr.length);
    var data = Buffer.concat(dataArr);
    //data就是我们要赋值的文件
    console.log( )
})
