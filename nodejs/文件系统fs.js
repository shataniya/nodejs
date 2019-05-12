// file system 文件系统
// - 用于操作文件或者目录
// 1. fs.stat 检测是文件还是目录

// 2. fs.mkdir 创建目录
// - fs.rmdir 删除目录
// - fs.readdir 读取目录

// 3. fs.readFile 读取文件
// - fs.writeFile 写入文件
// - fs.appendFile 追加文件
// - fs.unlink 删除文件

// 4. fs.rename

// 现在一个一个来测试，尝试
// console.log("ok")

const fs = require("fs")
// fs.mkdir(__dirname+"/dir1",function(){
//     console.log('dir1 have built')
// })

// fs.mkdir(path,callback) 创建一个目录
// 注意：第一个参数就是目录的路径，要精确到目录名称，如果只有一个目录名称，那么会默认 在根目录里 创建目录

// fs.rmdir(path,callback) 删除一个目录
// const mulu =  fs.rmdir(__dirname+'/dir1',function(){
//     console.log('ok')
// })

// fs.rmdir(__dirname+'/dir2',function(){
//     console.log("ok")
// })

// 经过测试可以得出，如果一个目录是空目录可以直接删除，如果不是空目录，不可以直接删除

// fs.mkdir(__dirname+'/test1',function(){
//     console.log('test1 have built')
// })

// fs.writeFile(__dirname+'/test1/write1.txt','我是世界上最衰的人','utf8',function(){
//     console.log('write finished')
// })

// fs.readFile(__dirname+'/test1/write1.txt','utf8',function(err,data){
//     if(err) console.log(err)
//     console.log(data)
// })

// 读文件的时候，如果不加上编码方式【utf8】，那么会以二进制方式呈现出来（buffer数据）

fs.readdir(__dirname,function(err,files){
    if(err) console.log(err)
    console.log(files)
})

// fs.readdir(path,callback(err,files))
// 读取目录的时候，目录会以数组的方式呈现出来

// fs.stat(__dirname,function(err,state){
//     if(err) console.log(err)
//     console.log(state)
// })

// fs.rename(oldpath,newpath,callback)
// 注意：fs.rename 是用来给文件换路径的，不仅仅是重命名
// fs.rename('../test2',__dirname+'/test1',function(){
//     console.log("ook")
// })

// fs.rename('test2',__dirname+'/test1',function(){
//     console.log('ok')
// })

fs.stat(__dirname,function(err,state){
    if(err) console.log(err)
    else{
        console.log(state.isFile()) // false
        console.log(state.isDirectory()) // true
    }
})

// fs.stat() 用于检测路径是目录还是文件
// - isFile()
    // - true 就是文件
    // - false 不是文件
// - isDirectory()
    // - true 是目录
    // - false 不是目录


// fs.appendFile 是追加文件，writeFile是写入文件，实惠覆盖掉文件原本的内容的，但是追加文件不会，会在原来的文本基础上往下写
// fs.writeFile(__dirname+'/test1/write2.txt','你是不是傻，你就是傻子,傻逼吧',function(){
//     console.log("ok")
// })
// fs.appendFile(__dirname+'/test1/write2.txt','你很聪明，真的，没骗你\n',function(){
//     console.log("ok")
// })
// 可以看见文件里的内容没有被覆盖，只是追加内容【就是接着往下写】

// fs.rmdir('1.txt',function(){
//     console.log('ok')
// })

fs.unlink('1.txt',function(){
    console.log("ok")
})