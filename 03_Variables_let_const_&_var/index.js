// 3 types of variables in js
// 1. var  2. let  3. const

// 1. 'var' is a global scope
var name = 'harry';

console.log(name);

var channel = 'codeWithHarry';
var marks = 34

console.log(name, channel, marks);

// 2. const 
const city = 'Dhaka';

// we can't change the constant variable value
// city = 'Rangpur';
console.log(city);

// 3. 'let' is a block level scope
{
    let city = 'Barisal';
    console.log(city);
}

// while using const in the array, what we can do and what we can't do

// we can push or pop 
const arr1 = [1,2,3,4] ;
arr1.push(100);
console.log(arr1);

arr1.pop();
console.log(arr1);

// But we can't redeclear the array
// arr1 = [3, 3, 5];

/* 
Most common programming case types

1. camelCase
2. kebab-case
3. snake_case
4. PascalCase

*/


