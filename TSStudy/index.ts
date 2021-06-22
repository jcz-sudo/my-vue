// interface Person {
//   firstName:string
//   lastName:string
// }
// function greeter(person:Person){
//   return "hello," + person
// }
// let user = {
//   firstName:"Yee",
//   lastName:"Huang"
// }
// greeter(user)
class User {
  fullName:string
  firstName:string
  lastName:string

  constructor(firstName:string,lastName:string){
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = this.firstName + ' ' + this.lastName
  }
}

interface Person {
  firstName: string
  lastName: string
}

function greeter(person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName
}

let user = new User('Yee', 'Huang')

console.log(greeter(user))

//t2是一个元组，元组是已知数量和类型的数组
let t2:[string,number]
t2 = ['hello',10]

//enum 枚举类型 enum类型是对js标准数据类型的一个补充。使用枚举类型可以为 一组数值赋予友好名字 enum在js中是生成对象
enum Color {
  Red,//0
  Green,//1
  Blue//2
}
//枚举数值 Color.Red|Green|Blue访问的结果是0，1，2，Color[0|1|2]访问的结果是Red,Green,Blue
let myColor:Color = Color.Green
console.log(myColor,Color.Red,Color.Blue)

enum Color2{
  Red = 2,
  Green = 4,
  Blue = 6
}
let myColor2 = Color2//Color2其实就是一个对象
console.log(myColor2,myColor2.Red)


//object类型
// object表示非原始类型，除number，string，boolean之外的类型
/**
 * 使用object类型，可以更好的标是Object.create
 */
 function fn2(obj: object) : object{
  console.log("fn2()",obj)
  return {}
}
fn2(new String("aaa"))
fn2(String)

//联合类型
// 表示可以取多种类型中的一种
function getLength(x: number | string) {
  // return x.length // error
  // 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的 所有类型里共有的属性或方法 ：
  //访问length属性会报错，因为number类型上没有length属性
  if(typeof x === "number"){
    return x.toString().length
  }else {
    return x.length
  }

  //下面这样写会报错
  // if(x.length){
  //   return x.length
  // }else{
  //   return x.toString().length
  // }
}
getLength("1234")

//类型断言
function getLength2(x: number | string) {
  if((<string>x).length){
    return (<string>x).length
  }else{
    return x.toString().length
  }
}

//ts的核心原则是对值所具有的结构进行类型检查
/**
 * 在TypeScript中，使用接口Interface定义对象类型
 * 
 * 可选属性使用？
 * 只读属性使用readonly
 */

//interface里面定义对象不需要,
interface IPerson{
  readonly id:number
  name:string
  age:number
  sex:boolean,
  score?:number
}
const person1:IPerson = {
  id:1,
  name:"tom",
  age:20,
  sex:false,
  // score:10//error
}
person1.sex = true
// person1.id = 2//error

/**
 * interface可以描述javascript中对象拥有的各种各样的外形。除了描述带有属性的普通对象，接口也可以描述函数类型
 * 用接口表示函数类型，为接口定义一个调用签名，表示了参数列表和返回值的函数定义
 */
interface SearchFnuc{
  (souce:string,subString:string):boolean
}
const mySearch:SearchFnuc = function(souce:string,sub:string):boolean{
  return souce.search(sub) > -1
}
console.log(mySearch("abcd","v"))
//接口可以继承
interface Alarm{
  alert():any
}
interface Light{
  lightOn():void
  lightOff():void
}
interface LightAlarm extends Alarm,Light {
  
}