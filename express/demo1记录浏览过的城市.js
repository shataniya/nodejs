const express = require("express")
const ejs = require("ejs")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

const port=3000
const hostname='127.0.0.1'

const app = new express()

// app.use(bodyParser())
app.use(bodyParser.urlencoded({
    extended:false
}))

app.use(bodyParser.json())

app.use(cookieParser())
// app.use(cookieParser("signed"))
app.use(express.static(__dirname+"/public"))

app.set("views",__dirname+"/views")

app.engine("html",ejs.__express)

app.get('/',function(request,response){

    // request.cookies 是一个对象，不可以在页面上直接打印对象
    console.log(request.cookies)
    response.send("ok--"+request.cookies.citys)
})

app.get('/go/:city',function(request,response){
    // console.log(request.params)
    let city = request.params.city
    let citys = request.cookies.citys
    if(citys){
        citys.push(city)
    }else{
        citys = []
        citys.push(city)
    }
    // console.log(citys)
    response.cookie('citys',citys,{ maxAge:60*1000*60 })
    response.send("ok")
})

app.listen(port,hostname,function(){
    console.log(`server is running at http://${hostname}:${port}`)
})