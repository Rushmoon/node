var path = require('path');
console.log(path);
var dir = './../work.html?id=1$name=abc';
var dir = __filename;
//console.log(dir);
console.log(path.basename(dir));//获取路劲中文件名部分
console.log(path.dirname(dir));
console.log(path.extname(dir));
console.log(path.join('./','test','code','codes/html'));
// 把参数拼接成一个路径
console.log(path.normalize(dir));
// 会翻译解释路径中的../ ./
console.log(path.parse(dir));
console.log(path.format({

    root:'/',
    dir: 'rest/code/code1',
    base:'demo.html',
    name:'demo',
    ext:'html'
}));
console.log(path.sep);
console.log(path.relative('./test/code/code1',__filename));
