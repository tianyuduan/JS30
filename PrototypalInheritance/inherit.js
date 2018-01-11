function Dog(name) {
  this.name = name;
}


Dog.prototype.woof = function () {
    console.log(this.name + ' woof');
};

const d = new Dog('sarah');
d.woof();

const betty = Dog("betty");
console.log(betty
);


//inheritnce through objects
