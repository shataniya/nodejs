const url = require("url")

// console.log(url)
console.log(typeof url) // object

// 可以看见 url模块 其实是一个对象

// { Url: [Function: Url],
//     parse: [Function: urlParse],
//     resolve: [Function: urlResolve],
//     resolveObject: [Function: urlResolveObject],
//     format: [Function: urlFormat],
//     URL: [Function: URL],
//     URLSearchParams: [Function: URLSearchParams],
//     domainToASCII: [Function: domainToASCII],
//     domainToUnicode: [Function: domainToUnicode],
//     pathToFileURL: [Function: pathToFileURL],
//     fileURLToPath: [Function: fileURLToPath] }

const path = "https://www.baidu.com/animal?name=tom&job=teacher"
// console.log(url.parse+'')
console.log(url.parse(path,true)) // object
console.log(typeof url.parse(path,true))

// url.parse() 可以解析路由，参数就是路由，或者域名

// Url {
//     protocol: 'https:',
//     slashes: true,
//     auth: null,
//     host: 'www.baidu.com',
//     port: null,
//     hostname: 'www.baidu.com',
//     hash: null,
//     search: '?name=tom',
//     query: 'name=tom',
//     pathname: '/animal',
//     path: '/animal?name=tom',
//     href: 'https://www.baidu.com/animal?name=tom' }

// url.parse() 有几个需要注意的参数：
// 1. protocol 就是协议，http协议，或者https协议
// 2. host/hostname 就是主机名
// 3. pathname 就是根路径之后的路径【不包含主机域名】，不包含后面的参数
// - path 就是根路径之后的路径【不包含主机名】，但是包含后面的参数
// 4. href 就是整个路径名
// 5. query 就是参数，返回的是参数
// - 如果 url.parse() 的第二个参数是true，那么query 返回的就是一个对象，里面包含的就是参数
// - query 一般应用于获取 get请求的参数

console.log(url.format( {
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'www.baidu.com',
    port: null,
    hostname: 'www.baidu.com',
    hash: null,
    search: '?name=tom&job=teacher',
    query:{ name: 'tom', job: 'teacher' },
    pathname: '/animal',
    path: '/animal?name=tom&job=teacher',
    href: 'https://www.baidu.com/animal?name=tom&job=teacher' })) // https://www.baidu.com/animal?name=tom&job=teacher

// url.format() 就是 url.parse() 的逆变换
// - url.parse() 把路由解析之后可以得到一个对象object，里面包含所有的解析信息，主机名，域名，参数等等
// - url.format() 把这个对象作为参数反变换，就可以得到 路由


// url.resolve
// console.log(url.resolve+'')
// console.log(typeof url.resolve)// function
const path1 = "https://www.baidu.com"
console.log(url.resolve(path1,'new')) // https://www.baidu.com/new

// url.resolve(from,to)
// - 第一个参数是 解析时相对的基本 URL
// - 第二个参数是 要解析的超链接 URL


// supervisor 修改代码会重启服务器

