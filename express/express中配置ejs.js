const express = require("express")
const ejs = require("ejs")

const port=3000
const hostname='127.0.0.1'

const app = new express()

// 中间件 app.use
// express.static 托管静态文件
app.use(express.static(__dirname+'/public'))
// 这句话的作用就是，当一遇到特殊文件的时候，例如css文件，那么会默认到public文件夹里面去找



// 设置默认的文件夹
// 修改 ejs 文件夹的默认存储位置
app.set('views',__dirname+'/views')
// 使用 view engine 来注册 express
// 配置 ejs 模板引擎，在 express 里，不需要提供 require 的方式来引用 ejs

// app.set('view engine','html')

app.engine('html',ejs.__express)

app.get('/',function(request,response){
    // response.send('ok start')
    const str = '我是来自后端的数据'
    const colors = ['red','green','blue']
    response.render('demo1.html',{
        str,
        colors
    })
    // response.render() 用来渲染模板
    // 1. 第一个参数是 ejs文件路径（或者说ejs模板路径）
    // 2. 第二个参数是 数据
})



app.listen(port,hostname,function(){
    console.log(`app is running at http://${hostname}:${port}`)
})