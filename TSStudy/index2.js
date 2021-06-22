var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var mySearch = function (souce, sub) {
    return souce.search(sub) > -1;
};
console.log(mySearch("abcd", "v"));
/**
 * ts中定义类
 */
var Greeter = /** @class */ (function () {
    //构造方法
    function Greeter(name) {
        this.name = name;
    }
    //一般方法
    //一般方法:放在原型上的，prototype上的
    Greeter.prototype.greet = function () {
        return "hello" + this.name;
    };
    //使用static关键字声明，这个方法直接挂在在构造函数上，而不是原型上
    Greeter.say = function () {
        console.log("hello world" + this.name);
    };
    return Greeter;
}());
var greeter1 = new Greeter("jone");
console.log(greeter1.greet());
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function (distance) {
        console.log("Animal run " + distance + "m");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.cry = function () {
        console.log('wang! wang!');
    };
    return Dog;
}(Animal));
var dog = new Dog("wangwang");
dog.cry();
dog.run(100); // 可以调用从父中继承得到的方法
var Animal1 = /** @class */ (function () {
    function Animal1(name) {
        this.name = name;
    }
    Animal1.prototype.run = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(this.name + " run " + distance + "m");
    };
    return Animal1;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this; //super调用父类构造方法
    }
    Snake.prototype.run = function (distance) {
        if (distance === void 0) { distance = 5; }
        console.log("sliding...");
        _super.prototype.run.call(this, distance);
    };
    return Snake;
}(Animal1));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    //重写父类方法
    Horse.prototype.run = function (distance) {
        if (distance === void 0) { distance = 50; }
        console.log("dashing...");
        _super.prototype.run.call(this, distance);
    };
    Horse.prototype.say = function () {
        console.log("sisi");
    };
    return Horse;
}(Animal1));
var snake = new Snake('sn');
snake.run();
var horse = new Horse('ho');
horse.run();
horse.say();
// 父类型引用指向子类型的实例 ==> 多态
var tom = new Horse('ho22');
tom.run();
/* 如果子类型没有扩展的方法, 可以让子类型引用指向父类型的实例 */
var tom3 = new Animal1('tom3');
tom3.run();
/* 如果子类型有扩展的方法, 不能让子类型引用指向父类型的实例 */
// const tom2: Horse = new Animal('tom2')
// tom2.run()
/**
 * 公有，私有和受保护修饰符
 * 公有public:默认是公有
 * 私有private：不被外界访问
 * 受保护protected：可以被派生子类继承
 */
var Teacher = /** @class */ (function () {
    function Teacher(name, course) {
        this.course = course;
        this.age = 20;
        this.sex = true;
        this.name = name;
        this.course = course;
    }
    return Teacher;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name) {
        return _super.call(this, name, "中文") || this;
    }
    Student.prototype.myTeacher = function () {
        console.log(this.sex);
        // console.log(this.age) //error:age是私有属性，只能在Teacher类中访问 
    };
    return Student;
}(Teacher));
var stu1 = new Student("zhangsang");
/**
 * 存取器：get和set:存取器通过getter和setter来截取对对象成员的访问
 */
/**
 * 泛型：在定义接口。函数或者类的时候不指定具体的类型，再使用的时候指定具体的类型
 */
function createArray(value, count) {
    var arr = [];
    for (var i = 0; i <= count; i++) {
        arr.push(value);
    }
    return arr;
}
createArray("111", 10);
createArray({ name: "zhangsan", age: 10 }, 10);
jQuery("#foo");
