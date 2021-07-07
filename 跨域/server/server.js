const express = require("express")
const app = express()


app.use(express.json()) 
app.use(express.urlencoded({extended:false}))

const router = express.Router()


app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*")
  res.header("Access-Control-Allow-Credential",true)
  next()
})

app.get('/', function(req, res){
  res.send('hello world');
});

app.get("/list",(req,res)=>{
  console.log("req",req.query)
  const data = {
    name:"张三",
    age:12
  }
  let callbackFn = req.query.callback
  let str = `${callbackFn}(${JSON.stringify(data)})`
  res.send(str)
})

app.post("/query",(req,res)=>{
  console.log("接口调用query！",req.query,req.body)
})

app.post("/upload",(req,res)=>{
  console.log("接口调用！",req)
  console.log(req.body)
})

app.listen("3000",()=>{
  console.log("server is running")
})