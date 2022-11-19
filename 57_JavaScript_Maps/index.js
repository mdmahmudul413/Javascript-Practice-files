// console.log('Hello');
// Maps in JS
// Maps is close to Object of key-value pair. We can use any type of key value

// creating map object
const myMap = new Map();

// creating keys
const key1 = 'mystr', key2 = {}, key3 = function () { };

// setting map values
myMap.set(key1, 'This is a string');
myMap.set(key2, 'This is blank obj');
myMap.set(key3, 'This is blank function');
console.log(myMap);

// Getting the values from a Map
let value1 = myMap.get(key2);
console.log(value1);

// Getting the size of the map
console.log(myMap.size);

// we can get key and value both using for of loop
for (let [key, value] of myMap) {
    console.log(key, value);
}

// get only keys using for of
for(let key of myMap.keys()){
    console.log('key is ',key);
}

// get only values using for of
for(let value of myMap.values()){
    console.log('value is ',value);
}

// we can also use foreach loop to get both value and key
myMap.forEach((value, key)=>{
    console.log("key is ", key);
    console.log("value is ", value);
});

// converting map to array
let myArr = Array.from(myMap);
console.log(myArr);

// converting map keys to array
let myArrKeys = Array.from(myMap.keys());
console.log(myArrKeys);

// converting map values to array
let myArrValues = Array.from(myMap.values());
console.log(myArrValues);