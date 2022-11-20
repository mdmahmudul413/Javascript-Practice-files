console.log('Hello');

// The main use case of symbol is to make unique key. It's so tough to make unique keys to use other premitive data types

// symbol is premitive data type like boolean, integer, float, etc
const sym1 = Symbol('My Identifier');
const sym2 = Symbol('My Identifier');
console.log('Symbol is ',sym1);
console.log('Type of symbol is : ', typeof sym1)

// though both sym1 and sym2 are same, they are unique and completely different to each other.
console.log(sym1 === sym2); // returns false

// If we do the same job with other premitive like string, integer, etc then the result 
// will true. but at the case of symbol, it will false. this is the main difference of symbols and other premitives.

let str1 = "this is";
let str2 = "this is";

console.log(str1 === str2); // returns true

// use case example
// both k1 and k2 are unique
const k1 = Symbol('Identifier for k1');
const k2 = Symbol('Identifier for k2');

let obj = {};

obj[k1] = 'Harry';
obj[k2] = 'Potter';
obj['name'] = 'good boy';

console.log(obj);
console.log(obj[k1]);
console.log(obj[k2]);
// console.log(obj.k2); // we can not do this to get value because it is same as obj["k2"]


// symbols are being ignored in for in loop
for (key in obj){
    console.log(`key is ${key}, The value of key ${obj[key]}`);
};

// to make an object to json. we use json.stringify()
console.log(JSON.stringify(obj)); // also ignore symbols