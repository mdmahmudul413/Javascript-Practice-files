console.log('Hello world.......!!!');
const age = 65;

// "==" will check only value
if(age == 19){
    console.log('Age is 19');
}
// we should add else if at every alternative condition, otherwise total if else statements will execute and whitch consume more time
else if(age == 65){
    console.log('Age is 65');
}
else{
    console.log('Age is not 19');
}

// "===" will check value and type
const chanels = "2";
if(chanels === 2){
    console.log('No of Chanels is 1');
}
else if(chanels ==='2'){
    console.log('No of Chanels is 2');
}
else{
    console.log('No of Chanels is 3');
}

// '!==' will execute if value and type both false
const lol = '65';
if(lol !== 65){
    console.log('Hello');
}
else{
    console.log('Hi');
}

// to check a variable is defined or not
const variable = 34;

// this is not proper way to check variable is present or not
if(variable){
    console.log('variable is present.');
}

// the correct way to check variable existence
// let vari = 8;
if(typeof vari !== 'undefined'){
    console.log('vari is defined');
}
else{
    console.log('vari is undefined');
}

//we can use boolean variable in the if else condition
const boyos = 19;
const doesDrive = true;

if(doesDrive){
    console.log('Gari chalaite parbe');
}

// AND(&&) OR(||) operator
if(boyos == 19 && doesDrive == true){
    console.log('Gari chalaite parbe');

}

if(boyos == 12 || doesDrive == true){
    console.log('Gari chalaite parbe na');

}

if(boyos == 12 || doesDrive == false){
    console.log('Gari chalaite parbe na');

}

// turnary operator
console.log(age==45 ? 'Age is 45' : 'Age is not 45');

// switch case statement 
switch(age){
    case 12:
        console.log('age is 12');
        break;
    case 45:
        console.log('age is 45');
        break;
    case 65:
        console.log('age is 65');
        break;
    default:
        console.log('This is default value');
        break;
}