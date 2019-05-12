const fs = require("fs")

// fs.creatReadStream(path[, options])  -- options一般是编码方式，一般为 'utf-8'
const readStream = fs.createReadStream(__dirname+'/read1.txt')
readStream.setEncoding('utf8')

const writeStream = fs.createWriteStream(__dirname+'/write1.txt')

let data=''

const dataChunk = '我是一个新的数据片段'

// 因为所有的流都是事件监听的实例
readStream.on('data',function(chunk){
    // console.log('new chunk received')
    // console.log(chunk)
    data+=chunk
    // console.log(chunk)
    writeStream.write(dataChunk,'utf8',function(){
        console.log('正在写入数据')
    })
    writeStream.end()
    writeStream.on('finish',function(){
        console.log('data finish')
    })
})

readStream.on('end',function(){
    console.log('data have received')
    console.log(data)
})