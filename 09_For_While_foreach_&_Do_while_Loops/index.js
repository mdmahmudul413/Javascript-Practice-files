console.log('Hello World....')
// Three types of loops 1. For Loop 2. While loop 3. Do While loop

// For loop
for (i = 1; i <= 5; i++) {
    console.log(i);
}

let a = 2;
let b = 9;
//a++ will increment the value of variable at the next line 
console.log(a++);
console.log(a);

// ++b will increment the value of variabel immediatly
console.log(++b)

// While Loop
let c = 0;
while (c < 5) {
    console.log(c);
    c++;
}

// Do While loop
console.log('Do While Loop');
let d = 1;
do {
    console.log(d)
    d++;
} while (d < 5)

// If the condition false, do while loop will run at least once
let m = 1;
do {
    console.log(m)
    m++;
} while (m > 5)

// continue and break statement
// 'break' statement stop the iteration
let n = 1;
do{
    console.log(`The 'break' number is ` + n);
    n++;
    if(n===5){
        break;
    }
}while(n<10)

// 'continue' statement will skip a single iteration

let p = 1;
do{
    if(p===5){
        p++;
        continue;
    }
    console.log(`The 'continue' number is ` + p);

    p++;
}while(p<10)

// foreach loop
arr = [1,2,3,4,5];
arr.forEach(function(element) {
    console.log('Array Number is ' + element);
});

// alternative of foreach loop with is not convenient
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log('alternate is '+ element);
    
}


// to itterate object we have to use 'in' keyword

let obj = {
    name: 'Rohan Das',
    age: 78,
    type: 'Dangerous Programmer',
    os: 'Ubuntu'
}

for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}.`);
}

// we can pass multiple arguments to the foreach loop
arr = [1,2,3,4,5];
arr.forEach(function(element, index, array) {
    console.log(element, index, array);
});


