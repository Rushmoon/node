//如果前台地址为localhost:3001 返回html文件夹下的index.html
//如果前台localhost:3001/news.html 返回html文档下的news页
const  http = require('http');
const fs = require('fs');
var server = http.createServer();
server.on('request',(request,response)=>{
    console.log(request);
    if (request.url =='/' && request.method == 'GET'){
        fs.readFile('./html/index.html','utf-8',(err,data)=>{
            response.writeHead(200,{
                "Content-Type":"text/html;charset=utf-8"
            });
            response.write(data);
            response.end();
        })
    }
    else if (request.url =='/news.html' && request.method == 'GET'){
        fs.readFile('./html/news.html','utf-8',(err,data)=>{
            response.writeHead(200,{
                "Content-Type":"text/html;charset=utf-8"
            });
            response.write(data);
            response.end();
        })
    }

});
server.listen(3001);