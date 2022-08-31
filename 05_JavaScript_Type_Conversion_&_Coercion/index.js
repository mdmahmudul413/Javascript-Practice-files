console.log('Welcome to javascript tutorial');

// converting to string
let myVar;
myVar = 34;
myVar = String(myVar);
console.log(myVar, typeof myVar);

let booleanVar;
booleanVar = true;
booleanVar = String(booleanVar);
console.log(booleanVar, typeof booleanVar);

let date = new Date();
date = String(date);
console.log(date, typeof date);

let arr = [1, 2, 3, 4];
arr = String(arr);
console.log(arr, typeof arr);

// the benifit to convert from other types to string that we can apply the string functions
console.log(arr.length, typeof arr);

// we can use tostring()
let i = 56788;
console.log(i);
console.log(i.toString());

// we can use Number() to convert other type to number
let a = '56788';
console.log(a);
console.log(Number(a));

// parseInt, parseFloat
let b = '56788.779';
console.log(parseInt(b));
console.log(parseFloat(b));
console.log(Number(b));

// toFixed(): to fixed the decimal point
let c = 56788.779;
console.log(c.toFixed(100));

// Type Coercion

let x = 123;
let y = '456';

console.log(x+y);

