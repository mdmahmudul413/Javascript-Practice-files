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


