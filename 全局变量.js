
// 可以知道每一个 js 文件就是一个函数，有这五个参数：exports, require, module, __filename, __dirname
console.log(typeof exports)
console.log(typeof require)

// 可以知道 exports 是一个对象,object
// require 是一个函数 function
console.log(typeof module)
// module 是一个对象，object
// console.log(module)  -->可以关注到，module 里面有 exports属性
console.log(exports == module.exports)//true
// 实际上， exports 就是 module 的属性 exports ，即 exports 和 module.exports 是一个东西
console.log(__dirname) // C:\Users\34762\Desktop\nodeNotes
console.log(__filename)// C:\Users\34762\Desktop\nodeNotes\全局变量.js
// 总结：__dirname 就是该文件的目录文件夹的路径 __filename 就是该文件的路径【绝对路径】

// console.log(global)
console.log(typeof global)// object
// console.log(global.module)

console.log(Array in global) //false

// global 类似于 windows 里的 window 是全局变量

// console 就是一个全局变量

setTimeout(()=>{
    console.log(`3 seconds have passed`)
},3000)

// const a = 10;
// console.log(global.a)// undefined

// 常用的全局变量 global就是一个全局变量
// 1. console
// 2. exports
// 3. module
// 4. __dirname
// 5. __filename
// 6. require 用于引入一个模块或者其他的文件
// 7. setTimeout clearTimeout
// 8. setInterval clearInterval

