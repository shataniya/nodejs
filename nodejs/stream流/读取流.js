const fs = require("fs")
const readStream = fs.createReadStream('read1.txt','utf8')
// 【注意】在设置读取流的时候，记得设置options选项，设置编码方式为：'utf8'

// 读取流是以一快一块的方式来读取数据的，因此读取大数据文件的时候使用读取流的方式，小数据文件readFile也可以

let data=''

// 读取流 读取错误的时候会触发 error事件
readStream.on('error',function(){
    console.log('读取错误')
})

// 读取流 读取数据的时候会触发 data事件
readStream.on('data',function(error,chunk){
    if(error) {
        console.log(error)
    }else{
        data+=chunk
        // console.log(chunk)
    }
})

// 读取流 读取数据完成的时候会触发 end事件
readStream.on('end',function(){
    console.log(data)
    console.log('读取完成')
})

// fs.unlink('write1.txt',function(){
//     console.log('ok')
// })