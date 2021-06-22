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
