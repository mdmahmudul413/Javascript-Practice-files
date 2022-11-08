// console.log('Hello World');

// regular exprssions literals "/harry/"
let reg = /harry/;
let s = "This is great to code with harry and also harry bhai";

// to print the content writtern between regular expressions literals
// console.log(reg.source);

// // Funtions to match expressions
// Function - 01

// 1. exec() - This function will return an array for match or null for no match
// result = reg.exec(s);
// console.log(result);

// Again the result will same
// result = reg.exec(s);
// console.log(result);

// // To check the whole string, we have to use global flag "g"
// reg = /harry/g; // g means global flag 

// Now, It will return 1st "harry" in the string "s"
// result = reg.exec(s);
// console.log(result);

// Then, It will return 2nd "harry" in the string "s"
// result = reg.exec(s);
// console.log(result);

// It will return null because there is no substring "harry"
// result = reg.exec(s);
// console.log(result);

// reg = /harry/i; // i means case insensitive
// s = "This is great to code with HarRy and also HarrY bhai";

// result = reg.exec(s);
// console.log(result);

// we can use multiple flag
// reg = /harry/gi;

// return "HarRy"
// result = reg.exec(s);
// console.log(result);

// return "HarrY"
// result = reg.exec(s);
// console.log(result);

// return null
// result = reg.exec(s);
// console.log(result);

// we can travers the array
// result = reg.exec(s);
// console.log(result.groups);
// console.log(result.index);
// console.log(result.input);




// Function - 02 
// test() - returns true or false


// result = reg.test(s);
// console.log(result);


// Function - 03
// match() - It will returns the array of regults or null. This is exectly alternate syntax to exec()

// result = reg.match(s); // wrong syntax
// result = s.match(reg); // right syntax
// console.log(result);

// If the expression is with global flag, then the result will give an array of matchs.

// reg = /harry/g;
// result = s.match(reg); // right syntax
// console.log(result);


// Function - 04
// search() - returns index of first match or -1

// result = reg.search(s); // wrong syntax
// result = s.search(reg); // right syntax
// console.log(result);


// Function - 05
// replace() - returns new replaced string with all the replacement

// result = reg.replace(s); // wrong syntax

// replace the first match
// result = s.replace(reg, 'Mahmud'); // right syntax

// replace all match
reg = /harry/g; // g means global flag 
result = s.replace(reg, 'Mahmud');


console.log(result);