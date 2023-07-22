// Function Defination
// None return type function: This function has no return value
function greet(name, age) {
    console.log(`
    "Happy Birthday ${name}"
    "It's your ${age}'s birthday"
    “Hope all your birthday wishes come true!”
    “It's your special day — get out there and celebrate!”
    “Wishing you the biggest slice of happy today.”
    “I hope your celebration gives you many happy memories!”
    “Our age is merely the number of years the world has been enjoying us!”
    `);
}

// Function Call
greet('Mahmud', 23);

// this will return undefinde because the function has no return value
let val = greet('Mahmud', 23);
console.log(val);

// Function with default value
function greet1(name, age = 56) {
    console.log(`
    "Happy Birthday ${name}"
    "It's your ${age}'s birthday"
    “Hope all your birthday wishes come true!”
    “It's your special day — get out there and celebrate!”
    “Wishing you the biggest slice of happy today.”
    “I hope your celebration gives you many happy memories!”
    “Our age is merely the number of years the world has been enjoying us!”
    `);
}

// Function Call
greet1('Mahmud');

// Return type function
function greet2(name, age) {
    let msg = 
    `"Happy Birthday ${name}"
    "It's your ${age}'s birthday"
    “Hope all your birthday wishes come true!”
    “It's your special day — get out there and celebrate!”
    “Wishing you the biggest slice of happy today.”
    “I hope your celebration gives you many happy memories!”
    “Our age is merely the number of years the world has been enjoying us!”
    `;
    return msg;
}

console.log(greet2('Anwar', 88));

// we can store a function in a variable
// we don't have give name to type of function
// This is called annonymous function
let x = function (name, age){
    let msg = 
    `"Happy Birthday ${name}"
    "It's your ${age}'s birthday"
    “Hope all your birthday wishes come true!”
    “It's your special day — get out there and celebrate!”
    “Wishing you the biggest slice of happy today.”
    “I hope your celebration gives you many happy memories!”
    “Our age is merely the number of years the world has been enjoying us!”
    `;
    return msg;
};

console.log(x('Muhammad', 89));

// we can make function inside object
let myObj = {
    name: 'Hello',
    game: function(){
        return 'GTA'
    }
}
console.log(myObj.game());

// Now important topic
// Block level Scope and Function level Scope
// let, const has block level scope, var has function level scope

var i = 345; //function level
console.log('First value of i: ' + i);
function ui(name){
    var i = 88; //block level
    console.log('2nd value of i is : ' + i);
    return `This is ${name} ui.`;
}

console.log(ui('Harry'), i);

// Another Example....................!!!!!
var a = 345; //function level
console.log('First value of a: '+a);
function ui1(name){
    a = 88; //It will change the value of global variable
    console.log('2nd value of a is : '+a);
    return `This is ${name} ui.`;
}

console.log(ui1('Harry'), 'The global value of a is ' + a);


// Another Example....................!!!!!
if(1){
    var b = 1234; //global variable or function level scope 
    // let b = 1234; //it will through an error because this is a local variable 
    console.log('First value of b: ' + b);
}

function ui2(name){
    let b = 88; //It will change the value of global variable
    console.log('2nd value of b is : ' + b);
    return `This is ${name} ui.`;
}

console.log(ui2('Harry'), b);

