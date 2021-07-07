
const vm = new Vue({
  el: '#app',
  data() {
    return {
      username: '',
      msgVal: '',
      isShow: true,
      nowDate: new Date().toTimeString().substr(0, 8),
      userHtml: '',
      userInfo: [],
      isShake: false,
      timer: null,
      userSystem: [],
      color: '#000000',
      emojis: [],
      isEmojiShow: false
    }
  },
  methods: {
    handleClick() {
      var imgN = Math.floor(Math.random() * 4) + 1; // 随机分配头像
      if (this.username) {
        this.socket.emit('login', {
          username: this.username,
          img: 'image/user' + imgN + '.jpg'
        });
      }

    },
    shake() {
      this.isShake = true;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.isShake = false;
      }, 500);
    },
    handleShake(e) {
      this.socket.emit('shake');
    },
    // 发送消息
    handleSendMsg(e) {
      e.preventDefault();
      if (this.msgVal) {
        this.socket.emit('sendMsg', {
          msgVal: this.msgVal,
          color: this.color,
          type: 'text'
        })
        this.msgVal = '';
      }
    },
    scrollBottom() {
      this.$nextTick(() => {
        const div = document.getElementById('messages');
        div.scrollTop = div.scrollHeight;
      })
    },
    initEmoji() {
      for (let i = 0; i < 141; i++) {
        this.emojis.push(`image/emoji/emoji (${i + 1}).png`);
      }
    },
    // 点击微笑 弹出表情
    handleSelectEmoji() {
      this.isEmojiShow = true;
    },
    handleDoubleSelectEmoji() {
      this.isEmojiShow = false;
    },
    // 用户点击发送表情
    handleEmojiImg(index) {
      this.isEmojiShow = false;
      this.msgVal = this.msgVal + `[emoji${index}]`;
    },
    handleLogout(e) {
      e.preventDefault();
      this.socket.emit('disconnect')
    }
  },
  created() {
    const socket = io();
    this.socket = socket;
    this.socket.on('loginSuc', () => {
      this.isShow = false;
    });
    this.socket.on('loginError', () => {
      alert('用户名已存在,请重新输入');
      this.username = '';
    })
    // 系统提示消息
    this.socket.on('system', (user) => {
      console.log(user);
      this.userSystem.push(user);
      this.scrollBottom()
    })
    // 显示在线人员
    this.socket.on('disUser', (userInfo) => {
      this.userInfo = userInfo;
    })
    //监听抖动事件
    this.socket.on('shake', (user) => {
      this.userSystem.push(user);
      this.shake();
      this.scrollBottom();
    })
    this.socket.on('receiveMsg', (obj) => {
      let msg = obj.msg;
      let content = ''
      if (obj.type === 'img') {
      }
      // 提取文字中的表情加以渲染
      while (msg.indexOf('[') > -1) {  // 其实更建议用正则将[]中的内容提取出来
        var start = msg.indexOf('[');
        var end = msg.indexOf(']');
        content += '<span>' + msg.substr(0, start) + '</span>';
        content += '<img src="image/emoji/emoji%20(' + msg.substr(start + 6, end - start - 6) + ').png">';
        msg = msg.substr(end + 1, msg.length);
      }
      content += '<span>' + msg + '</span>';
      obj.msg = content;
      this.userSystem.push(obj);
      // 滚动条总是在最底部
      this.scrollBottom();
    })
    // 渲染表情
    this.initEmoji();
  }

})
