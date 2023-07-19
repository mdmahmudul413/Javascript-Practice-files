## 02 Console Logs Errors Warnings & More

    // to print something in the console
    console.log('Hello');
    console.log(32+2)
    console.log(true);
    console.log([12,14,14]);
    console.log({one: 1,
    two: 2, three: 3});


    // print something in tabular form 
    console.table({harry: 32, code: 43, peter: 53})


    // to show warning message
    console.warn('This is a warning!!');


    // to show error message
    console.error('This is an error!!');


    // ======================================
    //      To see the execution time
    // ======================================

    // execution time will count from here
    console.time('execution time');

    // the execution time of bellow this line will print
    console.log('hi');

    // execution time will count upto here
    console.timeEnd('execution time');

    // if condition is false, it will throw error in the console
    console.assert(181 < 180, 'age > 180 is not possible');


    // to clear the console
    // console.clear();

## 02 Console Logs Errors Warnings & More

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






