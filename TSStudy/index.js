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
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = this.firstName + ' ' + this.lastName;
    }
    return User;
}());
function greeter(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var user = new User('Yee', 'Huang');
console.log(greeter(user));
//t2是一个元组，元组是已知数量和类型的数组
var t2;
t2 = ['hello', 10];
//enum 枚举类型 enum类型是对js标准数据类型的一个补充。使用枚举类型可以为 一组数值赋予友好名字 enum在js中是生成对象
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; //2
})(Color || (Color = {}));
//枚举数值 Color.Red|Green|Blue访问的结果是0，1，2，Color[0|1|2]访问的结果是Red,Green,Blue
var myColor = Color.Green;
console.log(myColor, Color.Red, Color.Blue);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 2] = "Red";
    Color2[Color2["Green"] = 4] = "Green";
    Color2[Color2["Blue"] = 6] = "Blue";
})(Color2 || (Color2 = {}));
var myColor2 = Color2; //Color2其实就是一个对象
console.log(myColor2, myColor2.Red);
//object类型
// object表示非原始类型，除number，string，boolean之外的类型
/**
 * 使用object类型，可以更好的标是Object.create
 */
function fn2(obj) {
    console.log("fn2()", obj);
    return {};
}
fn2(new String("aaa"));
fn2(String);
//联合类型
// 表示可以取多种类型中的一种
function getLength(x) {
    // return x.length // error
    // 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的 所有类型里共有的属性或方法 ：
    //访问length属性会报错，因为number类型上没有length属性
    if (typeof x === "number") {
        return x.toString().length;
    }
    else {
        return x.length;
    }
    //下面这样写会报错
    // if(x.length){
    //   return x.length
    // }else{
    //   return x.toString().length
    // }
}
getLength("1234");
//类型断言
function getLength2(x) {
    if (x.length) {
        return x.length;
    }
    else {
        return x.toString().length;
    }
}
var person1 = {
    id: 1,
    name: "tom",
    age: 20,
    sex: false
};
person1.sex = true;
var mySearch = function (souce, sub) {
    return souce.search(sub) > -1;
};
console.log(mySearch("abcd", "v"));
