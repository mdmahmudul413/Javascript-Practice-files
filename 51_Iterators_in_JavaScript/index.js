// Iterators
// The main task of Iterator is to travarse something
// The Iterator protocol is bellow
function fruitsIterator(array){
    let nextIndex = 0;
    // we will return an object
    return {
        next: function(){
            if(nextIndex < array.length){
                // we will return bellow object
                return {
                    value: array[nextIndex++],
                    done: false
                }
            }
            else{
                // we will return bellow object
                return {
                    done: true
                }
            }
        }
    }
}

const myArray = ['Apples', 'Grapes', 'Oranges', 'Bhindi'];

console.log('My array is', myArray);

// using the iterator
const fruits = fruitsIterator(myArray);

// to get the objects
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());

// to get the objects index value
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
