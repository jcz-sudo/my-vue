class Axios{
  constructor(){
    this.interceptors = {
      requset:new InterceptorsManage,
      response:new InterceptorsManage
    }
  }
  request(config){
    return new Promise((resolve)=>{
      const {url="",data={},method="get"} = config
      const xhr = new XMLHttpRequest
      xhr.open(method,url,true)
      xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200){
          resolve(xhr.responseText)
        }
      }
      xhr.send(JSON.stringify(data))
    })
  }
}
const methodsArr = ['get','post','put','delete','head','options','patch','head'];
methodsArr.forEach(method=>{
  Axios.prototype[method] = function(){
    return this.request({
      method:method,
      ...arguments[0]
    })
  }
})
function CreateAxiosFn(){
  let axios = new Axios;
  let req = axios.request.bind(axios)
  return req
}
let axios = CreateAxiosFn()

class InterceptorsManage{
  constructor(){
    this.handles = []
  }
  use(onFulField,onRejected){
    this.handles.push({
      onFulField,
      onRejected
    })
  }
}
