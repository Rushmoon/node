var fs =require('fs');
//读取当前文件夹所有文件的名字
fs.readdir('../../work',function (err,data) {
    console.log(data)
})
//只能遍历文件夹，不能看深层的
