## 02 Console Logs Errors Warnings & More

    1. to print something in the console

        console.log('Hello');
        console.log(32+2)
        console.log(true);
        console.log([12,14,14]);
        console.log({one: 1,
        two: 2, three: 3});


    2. print something in tabular form 

        console.table({harry: 32, code: 43, peter: 53})


    3. to show warning message

        console.warn('This is a warning!!');


    4. to show error message

        console.error('This is an error!!');

    5. to clear the console

        console.clear();

    ======================================
           To see the execution time
    ======================================

    //execution time will count from here
    console.time('execution time');

    // the execution time of bellow this line will print
    console.log('hi');

    // execution time will count upto here
    console.timeEnd('execution time');

    // if condition is false, it will throw error in the console
    console.assert(181 < 180, 'age > 180 is not possible');

## 03 Variables let const & var

    => 3 types of variables in js

        1. var  2. let  3. const

    1. 'var' is a global scope

        var name = 'harry';
        
        console.log(name);

        var channel = 'codeWithHarry';
        
        var marks = 34

        console.log(name, channel, marks);

    2. const 

        const city = 'Dhaka';

        Note: we can't change the constant variable value

        city = 'Rangpur';

        console.log(city);

    3. 'let' is a block level scope

        {
            let city = 'Barisal';
            console.log(city);
        }

    4. while using const in the array, what we can do and what we can't do

        => we can push or pop 

            const arr1 = [1,2,3,4] ;

            arr1.push(100);

            console.log(arr1);

            arr1.pop();

            console.log(arr1);

    => But we can't redeclear the array

        arr1 = [3, 3, 5];

 
    5. Most common programming case types

        1. camelCase

        2. kebab-case

        3. snake_case

        4. PascalCase

## 04 Data Types in JavaScript

    Premitive Data types

        1. String 

            console.log('Hello');

        2. String concatenation

            let name = 'Muhammad';
            console.log('Hello' + ' ' + name);

        3. typeof function return the data type

            console.log('Data type is ' + typeof(name));

        4. Number 

            let age = 18;
            console.log(age);
            console.log('Data type is ' + typeof age);

        5. Boolean 

            let isDriver = true;
            console.log(isDriver);
            console.log('Data type is ' + typeof isDriver);

        6. null 

            let nullVar = null;
            console.log(nullVar);
            console.log('Data type is ' + typeof nullVar);

        7. undefined 

            let undef = undefined;
            console.log(undef);
            console.log('Data type is ' + typeof undef);


    Reference Data types

        8. Array

            let arr = [1, 2, 3, false, 'moon', [1, 11, 111], {moon: 27, mahadi: 8}];
            console.log(arr);
            console.log('Data type is ' + typeof arr);

        9. Object Literals

            let mathMarks = {
                Rohan: 33,
                'Harry Potter': 86,
                sam: 67
            };

            console.log(mathMarks);
            console.log('Data type is ' + typeof mathMarks);


        10. Function

            function findName() {
                
            }
            
            console.log(findName);
            console.log('Data type is ' + typeof findName);

        11. Date

            let date = new Date();
            console.log(date);
            console.log('Data type is ' + typeof date);

## 05 JavaScript Type Conversion & Coercion

    converting to string

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

        Note: the benifit to convert from other types to string that we can apply the string functions
        
        console.log(arr.length, typeof arr);

    we can use tostring()

        let i = 56788;
        console.log('Plain value of i is', i);
        console.log('Applying tostring of i ', i.toString());

    we can use Number() to convert other type to number
    
        let a = '56788';
        console.log('This is plain string', a);
        console.log('Converting the string into number using Number() function', Number(a));

    parseInt, parseFloat
    
        let b = '56788.779';
        console.log('Parseint', parseInt(b));
        console.log('Parsefloat', parseFloat(b));
        console.log(Number(b));

    toFixed(): to fixed the decimal point

        let c = 56788.779;
        console.log('To fixed the decimal point ', c.toFixed(100));

    Type Coercion

        let x = 123;
        let y = '456';
        console.log('Type Coercion ', x+y);

## 06 Strings Properties Methods & Template Literals

    console.log('hello worlds.');

    const name = 'Harry';
    const greeting = 'Good Morning';

    console.log(greeting + ' ' + name);

    let html;

    1. way 1

        html = "<p> This is javascript tutorial </p>" +
               "<p> This is Helpful tutorial</p>";

        console.log(html);

    2. anothor way 

        use comma "," inside consol.log() to print multiple things serially
        html = html.concat('Adding another line', ' ', 3);
        console.log(html);

    3. toLowerCase(), toUpperCase(), length()

        console.log(html.length);
        console.log(html.toUpperCase());
        console.log(html.toLowerCase());

    4. indexing

        console.log(html[1]);
        console.log(html.indexOf('p'));
        console.log(html.indexOf('javascript'));

    5. will return -1 because the substring is missing in the main string

        console.log(html.indexOf('oewoj'));

    6. lastIndexof

        console.log(html.lastIndexOf('<'));

    7. charAt() 

        console.log(html.charAt(5));

    8. endsWith(), includes()

        console.log('endsWith() ', html.endsWith('aslfj'));
        console.log('endsWith() ', html.endsWith('3'));
        console.log(html.includes('jwof'));
        console.log(html.includes('3'));

    9. substring()

        console.log(html.substring(0,2));

    10. slice()
        
        console.log(html.slice(0,6));
        console.log(html.slice(-6));

    11. split()
        
        console.log(html.split(' '));

    12. replace(), it replaces only first occurace

        console.log(html.replace('This', 'hello'));

    13. template literals

        let fruit1 = 'Orange';
        let fruit2 = 'Apple';
        let myHtml = `
                    Hello ${name}<br>
                    <h1>This is Heading.</h1>
                    ${name} loves ${fruit1} and ${fruit2}.

        `;

        console.log(myHtml);
        document.body.innerHTML = myHtml;

    14. to use a single cout
        
        let name1 = 'hello\'';
        console.log(name1);

## 07 Arrays and Objects

    console.log('This is javascript tutorial');
    const marks = [34, 23, 93, 73];
    const fruits = ['Orange', 'Apple', 'Pineapple'];
    const mixed = ['str', 23, [93, 73]];
    const arr = new Array(23, 123, 'Orange');

    console.log(marks);
    console.log(fruits);
    console.log(mixed);
    console.log(arr);

    1. Array index wise printing

        console.log(marks[1]);
        console.log(fruits[2]);
        console.log(mixed[2]);
        console.log(arr[0]);

    2. Array property arr.length

        console.log(arr.length);
        console.log(marks.length);
        console.log(fruits.length);
        console.log(mixed.length);

    3. Array methods
        
        console.log(Array.isArray(arr));

    4. we can easily change the array value

        arr[0] = 'moon';
        console.log(arr);

    5. Array method indexOf()

        console.log(marks.indexOf(73));

    6. method push() to add value at the last, unshift() to add value at first
        
        console.log(marks)
        marks.push(36427934)
        console.log(marks);
        marks.unshift(1234)
        console.log(marks);

    7. method pop() to remove a value from the last index, shift() to remove a value from the first index
        
        marks.pop();
        console.log(marks);
        marks.shift();
        console.log(marks);

    8. method splice() to remove specific index values from a specific index
        
        marks.splice(1, 2);
        console.log(marks);

    9. method reverse() to make array reverse

        fruits.reverse();
        console.log(fruits);

    10. method concat() to concate a array to another

        let cars =['lamborghini', 'marcedes', 'bugati'];
        let concatanation = marks.concat(cars);
        console.log(concatanation);

    11. Object 

        let myObj = {
            name: 'harry',
            channel: 'codeWithHarry',
            isActive: true,
            marks: [1,2,3,4],
            'last name': 'Hello'
        }

        console.log(myObj);
        console.log(myObj.name);
        console.log(myObj.marks);
        console.log(myObj.channel);
        console.log(myObj['last name']);

## 08 If Else Conditionals & Switches

    console.log('Hello world.......!!!');
    const age = 65;

    1. "==" will check only value

        if(age == 19){
            console.log('Age is 19');
        }

    2. we should add else if at every alternative condition, otherwise total if else statements will execute and whitch consume more time

        else if(age == 65){
            console.log('Age is 65');
        }
        else{
            console.log('Age is not 19');
        }

    3. "===" will check value and type
        
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

    4. '!==' will execute if value and type both false
        
        const lol = '65';

        if(lol !== 65){
            console.log('Hello');
        }
        else{
            console.log('Hi');
        }

    5. to check a variable is defined or not
        
        const variable = 34;

        if(variable){
            console.log('variable is present.');
        }

        Note: This is not proper way to check variable is present or not

    6. the correct way to check variable existence
        
        let vari = 8;

        if(typeof vari !== 'undefined'){
            console.log('vari is defined');
        }
        else{
            console.log('vari is undefined');
        }

    7. we can use boolean variable in the if else condition
        
        const boyos = 19;
        const doesDrive = true;

        if(doesDrive){
            console.log('Gari chalaite parbe');
        }

    8. AND(&&) OR(||) operator
        
        if(boyos == 19 && doesDrive == true){
            console.log('Gari chalaite parbe');

        }

        if(boyos == 12 || doesDrive == true){
            console.log('Gari chalaite parbe na');

        }

        if(boyos == 12 || doesDrive == false){
            console.log('Gari chalaite parbe na');

        }

    9. turnary operator

        console.log(age==45 ? 'Age is 45' : 'Age is not 45');

    10. switch case statement 

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

## 09 For While foreach & Do while Loops

    console.log('Hello World....')

    Three types of loops 1. For Loop 2. While loop 3. Do While loop

    1. For loop

        for (i = 1; i <= 5; i++) {
            console.log(i);
        }

    let a = 2;
    let b = 9;

    2. a++ will increment the value of variable at the next line 
        
        console.log(a++);
        console.log(a);

    3. ++b will increment the value of variabel immediatly
        
        console.log(++b)

    4. While Loop
        
        let c = 0;
        while (c < 5) {
            console.log(c);
            c++;
        }

    5. Do While loop
        
        console.log('Do While Loop');

        let d = 1;
        do {
            console.log(d)
            d++;
        } while (d < 5)

    6. If the condition false, do while loop will run at least once
        
        let m = 1;
        do {
            console.log(m)
            m++;
        } while (m > 5)

    7. 'break' statement stop the iteration
        
        let n = 1;
        do{
            console.log(`The 'break' number is `+n);
            n++;
            if(n===5){
                break;
            }
        }while(n<10)

    8. 'continue' statement will skip a single iteration
 
        let p = 1;
        do{
            if(p===5){
                p++;
                continue;
            }
            console.log(`The 'continue' number is ` +p);

            p++;
        }while(p<10)

    9. foreach loop
    
        arr = [1,2,3,4,5];
        arr.forEach(function(element) {
            console.log('Array Number is ' + element);
        });

    10. alternative of foreach loop with is not convenient

        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            console.log('alternate is '+ element);     
        }


    11. to itterate object we have to use 'in' keyword

        let obj = {
            name: 'Rohan Das',
            age: 78,
            type: 'Dangerous Programmer',
            os: 'Ubuntu'
        }

        for(let key in obj){
            console.log(`The ${key} of object is ${obj[key]}.`);
        }

    12. we can pass multiple arguments to the foreach loop

        arr = [1,2,3,4,5];
        arr.forEach(function(element, index, array) {
            console.log(element, index, array);
        });

## 10 Functions

    Function Defination

    1. None return type function: This function has no return value

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

        greet('Mahmud', 23);

    2. this will return undefinde because the function has no return value
        
        let val = greet('Mahmud', 23);
        console.log(val);

    3. Function with default value
        
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

        greet1('Mahmud');

    4. Return type function
        
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

    5. we can store a function in a variable. we don't have give name to type of function. This is called annonymous function
        
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

    6. we can make function inside object
        
        let myObj = {
            name: 'Hello',
            game: function(){
                return 'GTA'
            }
        }
        console.log(myObj.game());

    7. Now important topic. Block level Scope and Function level Scope. let, const has block level scope, var has function level scope

        var i = 345;        //function level

        console.log('First value of i: '+i);

        function ui(name){
            var i = 88;     //block level
            console.log('2nd value of i is : '+i);
            return `This is ${name} ui.`;
        }

        console.log(ui('Harry'), i);

    8. Another Example....................!!!!!

        var a = 345;    //function level

        console.log('First value of a: '+a);

        function ui(name){
            a = 88;     //It will change the value of global variable
            console.log('2nd value of a is : '+a);
            return `This is ${name} ui.`;
        }

        console.log(ui('Harry'), a);


    9. Another Example....................!!!!!
    
        if(1){
            var b = 1234;//global variable or function level scope 
            // let b = 1234;//it will through an error because this is a local variable 
            console.log('First value of b: '+b);
        }

        function ui(name){
            let b = 88;//It will change the value of global variable
            console.log('2nd value of b is : '+b);
            return `This is ${name} ui.`;
        }

        console.log(ui('Harry'), b);

