// 好好研究 events 事件模块
const events = require('events')
console.log(events)
console.log(typeof events) // function

// 可以看见 events 是一个函数 function
console.log(events.EventEmitter)
console.log(events == events.EventEmitter) // true

// 实际上，events.EVentEmitter 和 events 是一个东西
console.log(typeof events.EventEmitter) // function

const eventsEmit = new events()
console.log(eventsEmit)
// console.log(events.once+'')
const eventEmit1 = new events.EventEmitter()
console.log(eventEmit1)

// 1. events 和 events.EventEmitter 是同一个东西
// 2. events 含有 EventEmitter属性