// const app = require("express")()
const WebSocket = require("ws")

const wss = new WebSocket.Server({port: 8888},()=>{
  console.log("链接成功")
})

wss.on("connection",function connection(ws){
  ws.on('message', function incoming(message) {
    console.log('server: received: %s', message)
    ws.emit("chart",message)
  });

  ws.send('欢迎进入！')
})


