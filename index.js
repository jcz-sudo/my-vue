/***
 * 使用一个对象将对应的事件和事件存起来，调用发布函数进行发布
 */
const eventHub = {
  events: {},
  //事件订阅
  on(name,callback){
    //事件订阅
    if(!this.events){
      this.events = {}
    }
    if(this.events[name]){
      this.events[name].push(callback)
    }else{
      this.events[name] = [callback]
    }
  },
  subscribe(name,...args){
    //事件发布
    this.events[name].forEach(fn=>{
      fn(...args)
    })
  },
  off(name,callback){
    //取消事件监听
    if (this.events && this.events[name]) {
      this.events[name] = this.events[name].filter(fn => {
        return fn !== callback
      })
    }
  },
  once(name,callback){
    //只监听一次
    const one = () => {
      //构造一个函数one，执行callback，再立马移除掉
      callback()
      eventHub.off(name,callback)
    }
    eventHub.on(name,one)
  }
}

const fn1 = () => {
  console.log("发布订阅1")
}
const fn2 = () => {
  console.log("发布订阅2")
}
eventHub.on("eventA", fn1)
eventHub.on("eventA", fn2)
eventHub.subscribe("eventA")
eventHub.off("eventA",fn2)
console.log(eventHub.events)
eventHub.subscribe("eventA")
