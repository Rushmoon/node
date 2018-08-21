const  fs =require('fs');
const rs = fs.createReadStream('../1.lwmv',{highWaterMark:1025*50});
const stats = fs.statSync();
//获取当前文件的状态
var iSize = stats.size;

// console.log(iSize);
var data = 0;
rs.on('data',(chunk)=>{
    data += chunk.length;
    console.log("传输进度"+(data/iSize*100).toFixed(2)+'%');
});
rs.on('end',()=>{
    console.log("传输结束");
});