const myFunction = function(){
  console.log(this);
};
// myFunction();
// console.log(window);

const myFunction2 = function(){
  console.log(this);
};

// myFunction2();
// create an object
var myObject = {};

// create a method on our object
myObject.someMethod = function () {
  console.log(this);
};

// call our method
myObject.someMethod();
