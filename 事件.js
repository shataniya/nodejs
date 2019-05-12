const eventEmitter = require("events")

// events 是nodejs里面的 事件触发器模块
// 可以引入然后直接使用

// 使用事件触发器的操作顺序
// 1. 引入 events 事件触发器模块
// 2. 创建一个类 newevents 来继承 events 模块，这样 newevents 就继承了 events 的功能
// 3. 使用 new 方法创建一个新的事件触发器 newevent = new newevents()
// 4. newevent.on() 用于注册监听器（注册事件）
    // - 第一个参数是事件名称（就是要注册的事件的名称）
    // - 第二个参数是当事件触发时，调用的方法 function
// 5. newevent.emit() 用于触发注册的事件
    // - 第一个参数是要触发的事件名称
    // - 第二个参数及之后的参数都是 给事件触发时的方法传递的参数，说白了就是 方法的参数

const emitter = new eventEmitter()

emitter.on('event',function(a,b){
    console.log(a)
    console.log(b)
    // console.log(this) // this 就是 emitter
    console.log(this == emitter) // true
})

emitter.emit('event',2,3)

emitter.emit('event',4,5)

emitter.on('event1',(a,b)=>{
    console.log(a)
    console.log(b)
    console.log(this) // {} 可以看见 this 就是一个空对象
    console.log(this == emitter) // false 因为 this 是以个空对象，所以和emitter不是一个东西
})

emitter.emit('event1',5,7)

console.log(emitter)
console.log(emitter._events)
console.log(emitter._eventsCount)
console.log(emitter._events.event) // function
console.log(emitter._events.event+'') // 通过字符串的方式把 function里面的内容 打印出来
console.log(emitter._maxListeners) // undefined

// 每一个事件里面，都含有三个属性:
// 1. _events 这是一个对象，里面的属性就是注册的所有事件，一个属性对应一个事件
// - 每一个事件都是一个函数 function
// 2. _eventsCount 就是事件的个数，你注册了多少事件，那么个数就是多少
// 3. _maxListeners


// once() 的方式注册事件监听器，那么这个只会触发一次
emitter.once('event2',function(string){
    console.log(string)
})

emitter.emit('event2','我是第一次触发')
emitter.emit('event2','我是第二次触发') // 可以看见只执行了一次

// 应该始终为 error 注册监听事件
emitter.on('error',function(error){
    console.log(error)
})

// new Error() 可以制造一个错误信息
emitter.emit('error',new Error('我是一个错误信息'))
