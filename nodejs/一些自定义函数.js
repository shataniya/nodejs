// 有时候要学会自己去自定义一些功能性函数

// 例如：定义一个函数 checkdir()
// - 如果检测没有指定的目录，那就创建
// - 如果检测有指定的目录就提示存在,并且展示目录里的内容

function checkdir(path){
    const fs = require("fs")
    fs.stat(path,function(err,state){
        if(err){ // 没有这个目录
            console.log('没有这个文件或者目录，马上新建~~')
            // console.log(err)
            fs.mkdir(path,function(err){
                if(err){
                    console.log(err)
                    return false
                }else{
                    console.log('创建成功')
                }
            })
        }else{ // 有这个目录
            console.log(state.isFile())
            console.log(state.isDirectory())
            if(state.isFile()){
                console.log('这是一个文件，文件内容如下：')
                // 如果是文件，就读取文件的内容
                fs.readFile(path,'utf8',function(err,data){
                    if(err){
                        console.log(err)
                        return false
                    }else{
                        console.log(data)
                    }
                })
            }
            if(state.isDirectory()){
                // 如果是一个目录
                // 把目录里的内容打印出来
                console.log('存在，是一个目录，目录内容如下：')
                fs.readdir(path,function(err,files){
                    // if(files.length){
                    //     console.log('很抱歉，这是一个空目录~~')
                    // }
                    if(err){
                        console.log(err)
                        return false
                    }else{
                        // console.log(files.length)
                        if(!files.length){
                            console.log('很抱歉，这是一个空目录~~')
                            return false
                        }
                        files.map(file=>{
                            fs.stat(path+'/'+file,function(err,state){
                                if(err){
                                    console.log(err)
                                }else{
                                    if(state.isFile()){
                                        console.log(file+'  --》这是一个文件')
                                    }
                                    if(state.isDirectory()){
                                        console.log(file+'  --》这是一个目录')
                                    }
                                }
                            })
                        })
                    }
                })
            }
        }
    })
}

// checkdir('nodejs')
// checkdir('demo1')
checkdir('nodejs')