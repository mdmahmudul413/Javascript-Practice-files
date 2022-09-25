console.log('Hello World');
// Exploring the Math object
console.log(Math);

// to use the value of PI
console.log(Math.PI);

// Math.round
console.log(Math.round(5.6));//returns 6
console.log(Math.round(5.2));//returns 5

// Math.ceil
console.log(Math.ceil(5.2));//returns 6

// Math.floor
console.log(Math.floor(5.7));//returns 5

// Math.abs will return always positive number
console.log(Math.abs(-5.7));

// Math.sqrt
console.log(Math.sqrt(49));//returns 7

// Math.sqrt
console.log(Math.pow(2, 3));//returns 8

// Math.min
console.log(Math.min(2, 3, 43, 3, 2, -2));//returns -2

// Math.max
console.log(Math.max(2, 3, 43, 3, 2, -2));//returns 43

// Math.random
console.log(Math.random());

/*
suppose,
the range of a is 0-1
to make it 0-100,
a(1-100) = a*100
to make it 10-100,
a(10-100) = 10 + a*(100-10)
*/

// range between 0-100
console.log(Math.random()*100);

// range between 10-100
console.log(10+Math.random()*(100-10));

// range between 50-100
console.log(50+Math.random()*(100-50));

