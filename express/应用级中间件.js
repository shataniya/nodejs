// 中间件 就是匹配所有的路由
const express = require("express")
const ejs = require("ejs")
const bodyParser = require("body-parser")

const port=3000
const hostname='127.0.0.1'

const app = new express()

app.use(bodyParser.urlencoded({
    extended:false
}))

app.use(bodyParser.json())

// 内置中间件，托管静态页面，也叫做静态web服务
app.use(express.static(__dirname+'/public')) // 这里 public 前面的斜杠‘/’不要忘记了

// 虚拟目录的概念，在配置中间件的过程中
app.use('/static',express.static(__dirname+"/public"))
// http://127.0.0.1:3000/static/css/demo1.css
// 实际上他是从public开始找的，所以这里的static就类似于一个虚拟目录

// use 就是应用级中间件 
app.use(function(request,response,next){
    console.log(new Date())
    next()
})

app.set('views',__dirname+'/views')

app.engine('html',ejs.__express)

app.get('/',function(request,response){
    response.send('ok')
})

app.get('/login',function(request,response){
    // response.send()
    response.render('login.html')
})

app.post('/doLogin',function(request,response){

    // 获取post提交的数据
    console.log(request.body)
    // 就是你必须设置一个返回的数据，这样页面才可以加载出来
    response.send(JSON.stringify(request.body))
})


// 错误处理中间件 当路由没有匹配的时候会触发错误处理中间件
app.use(function(request,response){
    response.status(404).send("很抱歉，没有这个页面")
    // 状态status是404，说明请求失败
})

// 第三方中间件 body-parser


app.listen(port,hostname,function(){
    console.log(`app is running at http://${hostname}:${port}`)
})