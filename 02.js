var fs = require('fs');
fs.stat('1.txt',function (eer,stats) {
    if (stats.isFile){
        console.log("检测是否是一个文件")
    }
    else if(stats.isDirectory){
        console.log("检测是否是一个文件夹")
    }
})