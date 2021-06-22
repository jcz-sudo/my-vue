

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

/**
 * ts中定义类
 */
class Greeter {
  //定义属性
  msg:string
  name:string
  //构造方法
  constructor(name:string){
    this.name = name
  }
  //一般方法
  //一般方法:放在原型上的，prototype上的
  greet():string{
    return "hello" + this.name
  }
  //使用static关键字声明，这个方法直接挂在在构造函数上，而不是原型上
  static say():void{
    console.log("hello world" + this.name)
  }
}
let greeter1 = new Greeter("jone")
console.log(greeter1.greet())

class Animal {
  name:string
  constructor(name:string){
    this.name = name
  }
  run(distance: number) {
    console.log(`Animal run ${distance}m`)
  }
}

class Dog extends Animal {
  constructor(name){
    super(name)
  }
  cry() {
    console.log('wang! wang!')
  }
}

const dog = new Dog("wangwang")
dog.cry()
dog.run(100) // 可以调用从父中继承得到的方法



class Animal1 {
  name:string
  constructor(name:string){
    this.name = name
  }

  run(distance:number = 0){
    console.log(`${this.name} run ${distance}m`)
  }
}

class Snake extends Animal1 {
  constructor(name: string){
    super(name)//super调用父类构造方法
  }
  run(distance:number = 5){
    console.log("sliding...")
    super.run(distance)
  }
}

class Horse extends Animal1 {
  constructor(name:string){
    super(name)
  }
  //重写父类方法
  run(distance:number = 50){
    console.log("dashing...")
    super.run(distance)
  }
  say(){
    console.log("sisi")
  }
}
 
const snake = new Snake('sn')
snake.run()

const horse:Horse = new Horse('ho')
horse.run()
horse.say()

// 父类型引用指向子类型的实例 ==> 多态
const tom:Animal1 = new Horse('ho22')
tom.run()

/* 如果子类型没有扩展的方法, 可以让子类型引用指向父类型的实例 */
const tom3: Snake = new Animal1('tom3')
tom3.run()
/* 如果子类型有扩展的方法, 不能让子类型引用指向父类型的实例 */
// const tom2: Horse = new Animal('tom2')
// tom2.run()

/**
 * 公有，私有和受保护修饰符
 * 公有public:默认是公有
 * 私有private：不被外界访问
 * 受保护protected：可以被派生子类继承
 */
class Teacher {
  name:string
  private age:number = 20
  protected sex:boolean = true
  constructor(name:string,public course:string){
    this.name = name
    this.course = course
  }
}
class Student extends Teacher {
  constructor(name:string){
    super(name,"中文")
  }
  myTeacher(){
    console.log(this.sex)
    // console.log(this.age) //error:age是私有属性，只能在Teacher类中访问 
  }
}
const stu1:Student = new Student("zhangsang")

/**
 * 存取器：get和set:存取器通过getter和setter来截取对对象成员的访问
 */

/**
 * 泛型：在定义接口。函数或者类的时候不指定具体的类型，再使用的时候指定具体的类型
 */
function createArray<T>(value:T,count:number):Array<T>{
  let arr:Array<T> = []
  for(var i = 0;i <= count; i++){
    arr.push(value)
  }
  return arr
}
createArray("111",10)
createArray({name:"zhangsan",age:10},10)

//ts中的声明？？？
declare var jQuery:(selector: string) => any
jQuery("#foo")