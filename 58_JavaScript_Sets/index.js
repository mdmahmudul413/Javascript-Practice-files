// set stores unique values
const mySet = new Set();

console.log(mySet);

// adding value to the set
mySet.add('this');
mySet.add('my name');
console.log(mySet);

// now if we add same value like 'this', set will not accept it. The length will be same
mySet.add('this');
console.log(mySet);

// but if we add unique value like 'that', set will accept it. The length will change then
mySet.add('that');
console.log(mySet);

// we can do the same job using set() constructor
// let mySet2 = new Set([1, true, false, { hello : 'world' }, [1, 2,3, 4]], "A String");
// console.log(mySet2);

// to get the size
console.log(mySet.size);

// now we will look some set() functions
// has() returns true or false
console.log(mySet.has(34));
console.log(mySet.has('this'));

// to remove data from set 
mySet.delete('this');
console.log(mySet);

// to iterating a set using for of
for(let item of mySet){
    console.log('Item is: ', item);
}

// to iterating a set using foreach
mySet.forEach((item)=>{
    console.log("Item: ", item);
});

// converting set to array
let arr = Array.from(mySet);
console.log(arr);

// use case: to remove duplicate values from an array, we can convert the set into 
// array and then again convert the array into set. the duplicates will remove.

