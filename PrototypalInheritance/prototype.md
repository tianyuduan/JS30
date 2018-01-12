### what is a prototype?

## When a function is created in JavaScript, JavaScript engine adds a prototype property to the function.


## this prototype property is an object, which has a constructor property by default
## the prototype property allows you to add new properties and methods to existing objects types.
## We can access the functions prototype property using functionName.prototype

![](https://github.com/rupeshmi/CodeSprint/blob/dev/JavaScript/Part2/CodeSnippets/ConstructorPrototype.png)


## As shown in the above image, Human constructor function has a prototype property which points to the prototype object. The prototype object has a constructor property which points back to the Human constructor function.

function Human(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function(){
    return this.firstName + this.lastName
  }
};
