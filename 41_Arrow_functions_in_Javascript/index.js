// A simple function
function harry(){
    console.log('Harry is a good boy');
}
harry();


// Alternative way of writing a function
const func = function(){
    console.log('This is the alternate way of writing function');
}
func();


// Arrow function
const func1 = ()=> {
    console.log('This is the Arrow Function');
}
func1();


// Arrow function shortcut syntex
const func2 = ()=> console.log('Arrow Function with shortcut syntex');
func2();

// Arrow function returning object
// while returning an object then we have to use brackets
const func3 = ()=> ({name: harry});
console.log(func3());


// Arrow function with parameter
const func4 = (name)=> 'Hello ' + name;
console.log(func4('Mahmud'));


// Arrow function with single parameter can be shorted like bellow
// But multiple parameter will not accepted
const func5 = name => 'Hello ' + name;
console.log(func5('Muhammad'));


// Arrow function with multiple parameter can be written like bellow
const func6 = (name, behave) => 'Name is ' + name + '. He is ' + behave +'.';
console.log(func6('Muhammad', 'good'));