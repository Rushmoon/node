//node构建后台 搭建服务器 有了node是不需要服务器的
const http = require('http');

var number = 0;
http.createServer(function (request,response) {
    //request 浏览器请求内容
    //response 服务器响应的内容
    number++;
    response.writeHead(200,{"content-type":"text/html;char" +
            "set=utf-8"});//响应头内容
    response.end("<h1>哥才是服务器，哥接受了:"+number+"</h1>>")
    //响应结束，以下所有响应内容无效
    console.log(request.method);
}).listen(3000);