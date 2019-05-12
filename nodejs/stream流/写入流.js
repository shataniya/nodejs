const fs = require("fs")
const writeStream = fs.createWriteStream('demo1.txt','utf8')

// writeStream.write(data,callback) 在写入的时候会触发相应的回调函数
writeStream.write('你是不是傻，我说你呢',function(){
    console.log('正在写入')
})

// writeStream.end() 表示写入完成了
writeStream.end()

// 当写入完成的时候，会触发 finish事件，调用相应的回调函数
writeStream.on('finish',function(){
    console.log('写入完成')
})

// 管道流 pipe
const readStream = fs.createReadStream('read1.txt','utf8')
const writeStream1 = fs.createWriteStream('demo2.txt','utf8')
readStream.pipe(writeStream1) // 直接把读取流读出的数据导入写入流


// path.extname 来获取文件的后缀名
const path = require("path")
console.log(path.extname('index.json'))