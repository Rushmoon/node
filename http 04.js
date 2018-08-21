const  http = require('http');
const  fs = require('fs');
var server = http.createServer();
server.on('request',(request,response)=>{
    console.log(request.headers);
    console.log(request.method);
    console.log(request.url);
    if (request.headers['user-agent'].indexOf('Chrome') != -1){
        response.write("<script>alert('拒接使用谷歌浏览器，没错我就是在抹黑百度');" +
            "location = 'http://www.baidu.com'</script>")
    }
});
server.listen('3001');