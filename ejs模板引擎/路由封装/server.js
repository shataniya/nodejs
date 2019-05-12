const http = require("http")
const url = require("url")
const ejs = require("ejs")

const port = 3006
const hostname = '127.0.0.1'

let server = http.createServer(function(request,response){
    response.setHeader("Access-Control-Allow-Origin","*")
    response.setHeader("Content-Type","application/x-www-form-urlencoded")
    response.statusCode=200

    

    // 过滤掉加载图标
    if(request.url!='/favicon.ico'){

        let data = ''

        // 主路径
        const pathname = url.parse(request.url).pathname
        console.log(pathname)
        if(request.method == "GET"){
            // 获取get参数 -- getparams
            const getparams = url.parse(request.url,true).query
            console.log(getparams)
            
        }
        if(request.method == "POST"){
            // 获取post参数 -- postparams
            request.on('error',function(err){
                console.log(err)
            }).on('data',function(chunk){
                data+=chunk
                console.log(chunk)
                if(request.url == '/dologin'){
                    response.end(JSON.stringify(data))
                }
            }).on('end',function(){
                console.log('获取post参数完成')
            })

        }
        switch(request.url){
            case '/':
            response.end('ok')
            break
    
            case '/login':
            ejs.renderFile(__dirname+'/view/demo1.ejs',function(err,data){
                if(err){
                    console.log(err)
                }else{
                    response.end(data)
                }
            })
            break
    
        }
    }


})

server.listen(port,hostname,function(){
    console.log(`server is running at http://${hostname}:${port}`)
})
