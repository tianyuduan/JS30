# What is a prototype?  & Understanding prototype inheritance

> First things first, all JavaScript objects inherit their properties and methods from their prototype. </br>
> The Object.prototype is on the top of the prototype chain. </br>
> When a function is created in JavaScript, JavaScript engine adds a prototype property to the function.


> This prototype property is an object, which has a constructor property by default.
> The prototype property allows you to add new properties and methods to existing objects types.
> We can access the functions prototype property using functionName.prototype

![](https://github.com/rupeshmi/CodeSprint/blob/dev/JavaScript/Part2/CodeSnippets/ConstructorPrototype.png)


> As shown in the above image, Human constructor function has a prototype property which points to the prototype object. The prototype object has a constructor property which points back to the Human constructor function.

```
function Human(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function(){
    return this.firstName + this.lastName
  }
};
```

> what happens when we log Human?
```
 console.log(Human)
```
> it returns undefined
--
> then how do we access the prototype property of the Human constructor
```
> console.log(Human.prototype)
```

> will actually return the function Human {}, Chrome Dev tools will return  <br/>
```
 Constructor: function Human(first, last)
 __proto__: Object
```
> when an object is created in JavaScript, JavaScript engine adds a \_\_proto_\_\_ property to the newly created object    
> which is called a dunder proto, \_\_proto_\_\_ points to the prototype object of the constructor function.

![](https://github.com/rupeshmi/CodeSprint/blob/dev/JavaScript/Part2/CodeSnippets/HumanObjectProto.png)
> person1 object has which is created using Human constructor has a proto property which points to the prototype object of the > constructor function

```//create a person
  let person1 = new Human('Tianyu', "Duan");
  console.log(person1);
```

> Console Output </br>

```
person1
Human {firstName: "tianyu", lastName: "duan", fullName: ƒ}
firstName: "tianyu"
fullName: ƒ ()
lastName: "duan"
__proto__:
constructor: ƒ Human(firstName, lastName)
__proto__: Object
```

> in this case, we can see that Human.prototype === person1.\_\_proto_\_\_  //true <br/>
> Both person1s dunder property and Human.prototype are pointing at the same object. <br/>

> Say we make another Person

```//create a person
  let person2 = new Human('Sky', "Fish");
  console.log(person2);
```

> We will find out that even person2’s dunder proto property is equal to the Human.prototype property and they points to the same object.

```
Human.prototype === person2.__proto__ //true
person1.__proto__ === person2.__proto__ //true
```
![](https://github.com/rupeshmi/CodeSprint/blob/dev/JavaScript/Part2/CodeSnippets/person12ConsProto.png)

### Thus, Prototype object of the constructor function is shared among all the objects created using the constructor function.

>> we can attach properties and methods to the prototype object. Thus, enabling all the objects created using the constructor function to share those properties and methods.

```
Human.prototype.age = 26;
Human.prototype.jog= function () {
    console.log(this.firstName + 'is jogging');
 };
```

>> instantiating a Human

```
 const person3 = new Human('sarah', "whitman");
 person3.jog(); //sarah is jogging
 person3.age // 26
```

>> When we try to access a property of an object, JavaScript engines first tries to find the property on the object; if the property is present on the object it outputs its value. But, if the property is not present on the object then it checks tries to find the property on the prototype object or dunder proto of the object. If the property is found the value is returned else JavaScript engine tries to find the property on the dunder proto of the dunder proto of the object. This chain continues till the dunder proto property is null. In this cases output will be undefined.


### TLDR: .prototype accesses the children, while \_\_proto_\_\_ asks who the parents are.

> Adding properties to prototypes </br>
> You cannot add a new property to a prototype the same way as you add a new property to an existing object, because the prototype is not an existing object.

```
not
Person.nationality = "English";
```

> but

```
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";
}
```

or

```
Person.prototype.nationality = "English";

```
