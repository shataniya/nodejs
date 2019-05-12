const express = require("express")
const ejs = require("ejs")
const MongoClient = require("mongodb").MongoClient

const DBurl = 'mongodb://127.0.0.1:10086'

const bodyParser = require("body-parser")

const port=3000
const hostname='127.0.0.1'

const app = new express()

// 配置 body-parser 中间件
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(bodyParser.json())

app.use(express.static(__dirname+"/public"))

app.set("views",__dirname+"/views")

app.set("view engine","ejs")

app.engine("html",ejs.__express)

app.get('/',function(request,response){
    // response.send('ok 这是首页')
    response.render('main.html')
})

app.get('/login',function(request,response){
    // response.send("登录")
    response.render('login.html')
})

app.post('/doLogin',function(request,response){
    console.log(request.body)

    MongoClient.connect(DBurl,{ useNewUrlParser:true },function(error,db){
        if(error){ // 数据没连接上
            console.log(error)
            console.log("数据库读取错误")

            return false
        }else{ // 数据库连接上了

            // 查询数据
            // let userdemo = db.db('demo1').collection('user')
            // { name:user.UserName , password:user.PassWord }
            db.db('demo1').collection('user').find(request.body).toArray(function(error,result){
                if(error){
                    console.log(error)
                    return false
                }else{
                    console.log(result)

                    // 如果长度为0，说明没有
                    console.log(result.length)
                    if(result.length > 0){
                        // 长度为0 说明没有数据
                        console.log("登录成功")
                        response.redirect('/product')
                        // response.send("抱歉，你好没有注册")
                    }else{
                        console.log("登录失败")
                        response.send("<script>alert('登陆失败');location.href='/login';</script>")
                    }   

                }
            })
            
        }
    })
})

app.get('/logout',function(request,response){
    response.send("退出登录")
})
app.get('/product',function(request,response){
    // response.send("商品列表")
    response.render('product.html')
})
app.get('/productdelete',function(request,response){
    response.send("删除商品")
})
app.get('/productadd',function(request,response){
    // response.send("增加商品")
    response.render('productadd.html')
})
app.get('/productedit',function(request,response){
    response.send("编辑商品")
})


app.listen(port,hostname,function(){
    console.log(`app is running at http://${hostname}:${port}`)
})