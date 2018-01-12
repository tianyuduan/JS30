// function Dog(name) {
//   this.name = name;
// }
//
//
// Dog.prototype.woof = function () {
//     console.log(this.name + ' woof');
// };
//
// const d = new Dog('sarah');
// d.woof();
//
// const betty = Dog("betty");
// console.log(betty
// );


//inheritance  through objects
//All JavaScript objects inherit their properties and methods from their prototype.
//The Object.prototype is on the top of the prototype chain.
//Objects created using an object literal, or with new Object(), inherit from a prototype called Object.prototype.

//Objects created with new Date() inherit the Date.prototype.


// function test() {
//   test.prototype.myname = function () {
//     console.log("my name is handsome");
//   };
// }
// var a = new test();
//
// console.log(a.__proto__ === test.prototype);
// console.log(a.__proto__);
// console.log(a.prototype);
// // console.log(a.myname());


function Human(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function(){
    return this.firstName + this.lastName;
  };
}


// let person1 = new Human('tianyu', 'duan');
// console.log(Human("tianyu", "Duan"));
// console.log(person1);

console.log(Human);
