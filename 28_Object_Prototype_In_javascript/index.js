console.log('Hello........!!');

// to make any kind of object, it will start making it from 'object.prototype'
// making object with object literal
let obj = {
    name: 'Harry',
    channel: 'Code With Harry',
    address: 'Mars'
}

console.log(obj);

// now, making a object with constructor
// Wheneven we make an object with constructor, it has it's own prototype which also build with object.prototype
function makeObj(givenName){
    this.name = givenName;
}

let obj2 = new makeObj('Hello');

console.log(obj2.name);
console.log(obj2);

// We can change prototype which is made by constructor. 
// if we want to write multiple utility functions and also want not to change the object key-value then we can write those functions in the object prototype
makeObj.prototype.address = 'Mirpur';
makeObj.prototype.addNum = function(a, b){
    c = a+b;
    return 'Sum is ' + c;
}

console.log(obj2.addNum(2, 5));
console.log(obj2.address);

// But using object literal which object is made, we can't change the prototype 
// obj.prototype.food = 'ABCD'; //it's not possible

// We can change the global object prototype. But this is not a good practice
// Object.prototype.age = 34;// We should not do this kind of thing

// we can use all of the method inside prototype like toString etc
