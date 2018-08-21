const fs = require('fs');
var pr = function (dir) {
    return new Promise(function (resolve,reject) {
        fs.readFile('001.js','utf-8',(err , data)=>{
            if (err){
                resolve(err);
            } else{
                reject(data);
            }
        })
    })
};
console.log(pr().then(function (err) {
    console.log(err);
},function (data) {
    console.log(data)
})).then()