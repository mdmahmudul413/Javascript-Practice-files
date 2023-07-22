console.log('This is javascript tutorial');
const marks = [34, 23, 93, 73];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 23, [93, 73]];
const arr = new Array(23, 123, 'Orange');

console.log(marks);
console.log(fruits);
console.log(mixed);
console.log(arr);

// Array index wise printing
console.log(marks[1]);
console.log(fruits[2]);
console.log(mixed[2]);
console.log(arr[0]);

// Array property arr.length
console.log(arr.length);
console.log(marks.length);
console.log(fruits.length);
console.log(mixed.length);

// Array methods
console.log(Array.isArray(arr));

// we can easily change the array value
arr[0] = 'moon';
console.log(arr);

// Array method indexOf()
console.log(marks.indexOf(73));

// method push() to add value at the last, unshift() to add value at first
console.log(marks)
marks.push(36427934)
console.log(marks);
marks.unshift(1234)
console.log(marks);

// method pop() to remove a value from the last index, shift() to remove a value from the first index
marks.pop();
console.log(marks);
marks.shift();
console.log(marks);

// method splice() to remove specific index values from a specific index
marks.splice(1, 2);
console.log(marks);

// method reverse() to make array reverse
fruits.reverse();
console.log(fruits);

// method concat() to concate a array to another
let cars =['lamborghini', 'marcedes', 'bugati'];
let concatanation = marks.concat(cars);
console.log(concatanation);

// Object 
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