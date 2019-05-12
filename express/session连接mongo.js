const express = require("express")
const session = require("express-session")
const mongoStore = require("connect-mongo")(session)

const port=3000
const hostname='127.0.0.1'

const app = new express()

app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:60*1000*60
    },
    rolling:true,
    store:new mongoStore({
        url:"mongodb://127.0.0.1:10086/demo1",
        touchAfter:24*3600
    })
}))

// app.get("/",function(req,res){
//     res.send("ok 这是首页")
// })

app.get('/',function(request,response){
    if(request.session.UserName){
        response.send("hello welcome to main page!")
    }else{
        response.send("not login")
    }
})

app.get('/news',function(request,response){

    // 可以看见调用 session 的时候使用 request.session
    if(request.session.UserName){
        response.send("this is news page")
    }else{
        response.send("not login")
    }
})

app.get('/logout',function(request,response){
    request.session.cookie.maxAge = 0
    response.send("not login")
})

app.get('/login',function(request,response){

    // 设置 session 的时候 使用 request.session ,调用 cookie 的时候也是使用 request.session
    // 这个和设置 cookie 有着不同的区别
    request.session.UserName = "zhangsan"
    response.send("login successful")
})

app.listen(port,hostname,function(){
    console.log(`server is running at http://${hostname}:${port}`)
})


// 连接数据库之后可以看到，session 中设置的数据会被默认存储在 sessions 这个 collection（集合）中