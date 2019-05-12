// 文件系统 file system
const fs = require("fs")

// readFileSync 同步的方法没有回调函数 只有异步的方法才会有回调函数
// const readtxt = fs.readFileSync('read1.txt','utf8')
fs.readFile('read1.txt','utf8',function(error,data){
    if(error){
        console.log(error)
    }else{
        setTimeout(function(){
            console.log(data)
        },3000)
    }
})

// console.log(readtxt)

// 异步的方法没有返回值 因此是 undefined

// 等到主程序空闲的时候，那么才会去获取异步函数（或者异步方法）的返回结果

// readFile(path,opteions,callback)
// readFileSync(path,options)

console.log("finished")

fs.writeFileSync('write1.txt','我已经写了一段话了','utf8')
// writeFileSync(path,data,options)

fs.writeFile('write1.txt','我是另一段话','utf8',function(error){
    if(error){
        console.log(error)
    }else{
        console.log('write finished')
    }
})
// writeFile(path,data,options,callback)

fs.readFile('read1.txt','utf8',function(error,data){
    if(error) console.log(error)
    // console.log(data)
    fs.writeFile('write1.txt',data,'utf8',function(){
        console.log('write finished')
    })
})

// 删除一个文件 unlink
// unlink(path, callback)  -- 异步删除文件
// fs.unlink('test1.txt',function(){
//     console.log('test1.txt have remove')
// })

// unlinkSync(path) -- 同步删除文件
// fs.unlinkSync('test1.txt')

// mkdir(path, [, options], callback)
// fs.mkdir('test',function(){
//     console.log('test have built')
// })

// mkdirSync(path)
// fs.mkdirSync('test2')

// rmdir(path,[, options], callback)
// fs.rmdir('test1',function(){
//     console.log('test have remove')
// })

// rmdirSync(path)
// fs.rmdirSync('test2')


// 文件处理建议使用异步操作



