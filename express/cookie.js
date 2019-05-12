// cookie 是存在于客户端计算机中的变量，可以用同一个浏览器访问同一个域名的时候共享数据
// 1. cookie 保存在浏览器本地
// 2. 正常设置的cookie是不加密的，用户可以自由看到
// 3. 用户可以删除cookie，或者禁用他
// 4. cookie 也可以被修改，被篡改
// 5. coolie 可以用于攻击
// 6. cookie 存储量很小，未来要被 localStorage 替代

const express = require("express")
const cookieParser = require("cookie-parser")
const ejs = require("ejs")

const port=3000
const hostname='127.0.0.1'

const app = new express()

// 使用中间件 cookie-parser
app.use(cookieParser('signed'))

app.use(express.static(__dirname+'/public'))

// app.set("view engine","ejs")

app.engine("html",ejs.__express)

app.set("views",__dirname+"/views")

app.get('/',function(request,response){
    // console.log(request.cookies)
    console.log(request.signedCookies)
    response.send("ok")
})

app.get('/login',function(request,response){

    // 调用 cookie 的时候使用 request.cookies 就可以了 
    console.log(request.cookies)
    response.send("login")
})

app.get('/set',function(request,response){

    // 设置的时候使用 response.cookie() 来设置
    // 1. 参数1：cookie名称
    // 2. 参数2：cookie值
    // 3. cookie的相关配置
    response.cookie('UserName','zhang',{ maxAge:60000 , signed:true })

    // 设置 cookie 的时候使用 response.cookie ,但是调用 cookie 的时候 使用 request.cookies

    response.send('cookie 设置成功')
})

app.listen(port,hostname,function(){
    console.log(`app is running at http://${hostname}:${port}`)
})


// response.cookie() 的配置【参数3】
// - maxAge 过期时间
// 1. domain:'.aaa.com' 表示只要是aaa.com的子域名都可以访问cookie 多个二级域名共享cookie，其他的都不行
// 2. secure【安全的意思】,默认值是 false ，也就是说，默认是 http 可以访问 cookie，但是 https 不可以访问 cookie
// - 如果 secure 为 true，那么 http 不可以访问，但是 https 可以访问
// 3. path 表示只有这个指定的目录下才可以访问 cookie
// 4. httpOnly 如果只为true，表示只有ndoejs服务器可以操作cookie，客户端不可以
// 5. signed 设置signed为true时，那么表示对cookie进行加密
// 要想获取加密的cookie信息，有以下3步：
// - 在 response.cookie() 第三个参数里设置 signed 为 true
// - 设置加密规则
    // - 在 app.use(cookieParser(string)) string没有要求，只要是字符串，这将作为加密的随机字符串
// - 获取加密的cookie的时候，使用 request.signedCookies 就可以获取加密的 cookie 信息了
    // - 1. request.cookies 获取的是 明文cookie，也就是未加密的 cookie
    // - 2. request.signedCookies 获取的是 加密的cookie 

