const express = require("express")

const port=3000
const hostname = '127.0.0.1'

// 创建一个实例
let app = new express()

app.get('/',function(request,response){
    response.send('ok，你是不是傻')
})
app.get('/login',function(request,response){
    response.send('登录模块')
})


app.get('/news',function(request,response){
    response.send('新闻模块')
})

// 动态路由  http://127.0.0.1:3000/news/456
app.get('/news/:newID',function(request,response){
    
    // 获取动态路由传值
    console.log(request.params)

    // request.params 获取动态路由传值
    let newID = request.params.newID
    response.send('新闻模块'+newID)

})


// 获取get请求的传值
app.get('/product',function(request,response){
    console.log(request.query)
    response.send('产品模块')
})





app.listen(port,hostname,function(){
    console.log(`app is running at http://${hostname}:${port}`)
})