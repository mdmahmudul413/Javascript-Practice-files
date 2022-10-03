// synchronous programming
// processing done will print after finishing the loop iteration 

// for (i = 0; i <= 8500; i++) {
//     console.log('The value of index: ' + i);
// }
// console.log('Processing done.');


// asynchronous programming
setTimeout(() => {
    for (i = 0; i <= 500; i++) {
        console.log('The value of index: ' + i);
    }
}, 100);
console.log('Processing done.');



