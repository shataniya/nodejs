const http  = require("http")
const url = require("url")
const path = require("path")

// 引入ejs模板引擎
const ejs = require("ejs")

// ejs.renderFile(path,data,options,callback(error,data))

const colors = ['red','green','blue']
const string = '我是后台的一段话'
const htmlstr = `<h2>这是一个h2标签</h2>`

const port = 3005
const hostname = '127.0.0.1'

const server = http.createServer(function(request,response){
    response.setHeader("Access-Control-Allow-Origin","*")
    response.setHeader("Content-Type","text/html;charset=utf-8")
    response.statusCode=200

    let pathname = url.parse(request.url).pathname
    switch(pathname){
        case '/':
        ejs.renderFile(__dirname+'/view/demo2.ejs',{
            colors,
            string,
            htmlstr
        },function(error,data){
            // 使用 <%- %> 可以让浏览器解析html代码
            response.end(data)
        })
        // response.end('ok nihao1')
        break
    }
})

server.listen(port,hostname,function(){
    console.log(`server is running at http://${hostname}:${port}`)
})
