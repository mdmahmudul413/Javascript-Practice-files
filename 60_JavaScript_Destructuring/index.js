let a, b;

[a, b] = [1, 2];
console.log(a, b);

//  ... means to make an array of the rest elements and assign it to "d"
[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a, b, c, d);

// we can do it using object 
({a, b, c} = {a:1, b:2, c:3});
console.log(a, b, c);

// using "..."
({a, b, c, ...d} = {a:1, b:2, c:3, d:4, e:5, f:6}) 

console.log(a, b, c, d)

// array destructuring
// let make an array
let fruits = ['apple', 'banana', 'mangoes'];
[a, b, c] = fruits;

console.log(a, b, c);

// object destructuring
const laptop = {
    model: "Hp Probook",
    age: "10 years",
    gender: 'male',
    net: 131,
    start: function(){
        console.log('started!');
    }
}

const {model, age, gender, start} = laptop;

console.log(model, age, gender);

start();
// we can call start() function directly after create object destructuring. otherwise we call function like "laptop.start()"

