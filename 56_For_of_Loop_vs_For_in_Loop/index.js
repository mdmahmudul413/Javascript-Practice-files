console.log('Hello');

let people = ['Rohan', 'Harry', 'Mahmud', 'Mahadi'];

// *******************Traditional For In Loop ************
console.log('***** Traditional For Loop *****');
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);
// }

let obj = {
    name: 'Harry',
    language: 'JS',
    hobby: 'Mobile App Development'
}

// To get keys in array form
// console.log(Object.keys(obj));

// Iterationg obj using for loop
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);   
// }


// ********************** For In Loop ************
console.log('***** For in Loop *****');
// let do the same thing in a convenient way
// Iterationg obj using for in loop
for(let key in obj){
    console.log(obj[key]);
    
    //It will not work 
    // console.log(obj.key);
}

// we can also iterate string also using for in
let moon = 'MOON';

// for(let char in moon){
//     console.log(moon[char]);
// }

// and the traditional for loop for iterating the same string
// for (let index = 0; index < moon.length; index++) {
//     const element = moon[index];
//     console.log(element);   
// }


// ********************** For of Loop ************
console.log('***** For of Loop *****');
// for(index of people){
//     console.log(index);
// }

// string iteration using for of
for(index of moon){
    console.log(index);
}
