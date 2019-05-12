function input(callback,params){
    callback(params)
}

function output(params){
    console.log(params)
}

input(output,"我是一个回调函数")

// 回调函数就是 在函数里面调用函数，那么里边的函数 就叫做 回调函数