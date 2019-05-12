// session 介绍
// 1. session 保存在服务器上
// 2. 只要浏览器关闭，session就会销毁

// session 参数讲解：
// 1. secret 是一个string类型的字符串，可以随便写， 作为服务器生成 session 的签名
// 2. name 返回客户端的那 key 名称，默认是 connect.sid ,可以设置也可以不设置
// 3. resave 强制保存session，即使没有变化，默认是true，这里 我们要把它设置为 false
// 4. saveUninitialized 强制将未初始化的session存储，默认值是 true
// 5. cookie 可以设置过期时间maxAge【通过设置cookie来设置session的一些特性】
// 6. rolling 每次请求时会重新设置 cookie ，默认是false
// - 如果我们想让用户不操作页面一段时间之后才令session过期，可以把rolling属性设置为 true

const express = require("express")
const session = require("express-session")

const port=3000
const hostname='127.0.0.1'

const app = new express()

// 配置 session
app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true
}))

app.get('/',function(request,response){

    // 获取 session
    if(request.session.UserName){
        response.send("欢迎回来")
    }else{
        response.send("未登录")
    }
    // response.send("ok")
})

app.get('/login',function(request,response){

    // 设置 session
    // 注意：设置 session 的时候，使用的是 request.session 而不是 response.session
    request.session.UserName="zhangsan"
    response.send("login successful")
})

app.listen(port,hostname,function(){
    console.log(`server is running at http://${hostname}:${port}`)
})
