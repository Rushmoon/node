'use strict'
//为了解决服务器无法调用静态资源的问题，于是动态的检测path的变化，（主要还是看扩展名的不同，然后response.write
// 对应的静态资源）
const  http = require('http');
const  fs = require('fs');
const path = require('path');
const url = require('url');
var server = http.createServer();
server.on('request',(request,response)=>{
    console.log(request.url);
    var pathObj = path.parse(request.url);
    var ext = pathObj.ext ||'.html';
    var base = pathObj.base ||'index.html';

    
    
    
    
    
    switch (ext) {
        case '.css':
            response.writeHead(200,{"Content-Type":"text/css"});
            response.write(get_file_content('./css/'+base));
            response.end();
            break;
        case '.js':
            response.writeHead(200,{"Content-Type":"application/x-javascript"});
            response.write(get_file_content('./js/'+base));
            response.end();
            break;
        case '.jpg':
            response.writeHead(200,{"Content-Type":"image/jpeg"});
            response.write(get_file_content('./img/'+base));
            response.end();
            break;
        default :
            response.writeHead(200,{
                "Content-Type":"text/html;charset=utf-8"
            });
            response.write(get_file_content('./html/'+base));
            response.end();
            break;
        
    }

});


server.listen(3001);

function get_file_content(filepath) {
    return fs.readFileSync(filepath);
}
