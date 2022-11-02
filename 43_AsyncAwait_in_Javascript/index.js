// console.log('Hello');
// Bellow this serial of console will show the normal sequence of code flow.
// function harry(){
//     return "Harry";
// }

// console.log('Before calling harry() function');
// let a = harry();
// console.log('After calling harry() function');
// console.log(a);
// console.log('Last line of this JS file.');

// async function returns a promise
// When we make an async function then the compiler when get await it start to execute the task in the background and
//  at that time compiler will execute the next task outside the async function. After completing the outside task, 
//  compiler will back to the previous line inside the function and start to do the remaining task.

async function harry(){
    console.log('Inside harry() function.');

    const response = await fetch('https://api.github.com/users');

    console.log('Before response');

    // to get the response in text form: response.text()
    const users = await response.json();

    console.log('Users resolved');

    return users;
}

console.log('Before calling harry() function');
let a = harry();
console.log('After calling harry() function');
console.log(a);

// This line will execute when the promise is resolved only.
a.then(data => console.log(data));
console.log('Last line of this JS file.');