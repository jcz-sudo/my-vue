const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 5000;

let users = [];//存储登录的用户
let userInfo = [];//存储用户姓名和头像

//挂载静态目录
app.use('/',express.static(__dirname+'/static'));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

//监听连接
io.on('connection', function (socket) {
  console.log('连接成功');
  //监听登陆
  socket.on('login', function (user) {
    const {username} = user;
    console.log(users.indexOf(username))

    if (users.indexOf(username)>-1){   
      //发送错误事件         
      socket.emit('loginError');

    }else{
      // 存储用户名
      users.push(username);
      userInfo.push(user);
      io.emit('loginSuc');
      socket.nickName = username;
      // 系统通知
      io.emit('system', {
        name: username,
        status: '进入'
      })

      // 显示在线人员
      io.emit('disUser',userInfo);
      console.log('一个用户登录');

    }

  });
  // 发送窗口事件
  socket.on('shake',()=>{
    socket.emit('shake',{
      name:'您'
    })
    // 广播消息
    socket.broadcast.emit('shake',{
      name:socket.nickName
    })
  });
  // 发送消息事件
  socket.on('sendMsg',(data)=>{

    let img = '';
    for(let i = 0; i < userInfo.length;i++){
      if(userInfo[i].username === socket.nickName){
        img = userInfo[i].img;
      }
    }
    // 广播
    socket.broadcast.emit('receiveMsg', {
      name: socket.nickName,
      img: img,
      msg: data.msgVal,
      color: data.color,
      type: data.type,
      side: 'left',
      isUser:true
    });
    socket.emit('receiveMsg', {
      name: socket.nickName,
      img: img,
      msg: data.msgVal,
      color: data.color,
      type: data.type,
      side: 'right',
      isUser: true
    });

  })

  // 断开连接时
  socket.on('disconnect',()=>{
    console.log('断开连接');

    let index = users.indexOf(socket.nickName);        
    if(index > -1){
      users.splice(index,1);//删除用户信息
      userInfo.splice(index,1);//删除用户信息

      io.emit('system',{
        name:socket.nickName,
        status:'离开'
      })
      io.emit('disUser,userInfo'); //重新渲染
      console.log('一个用户离开');

    }
  })

});


http.listen(3000, () => {
  console.log('listen on 3000端口');
})
