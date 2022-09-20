console.log('Hello');
// Local Storage: window.localStorage()
// to add key value in the local storage
localStorage.setItem('name', 'Harry');
localStorage.setItem('name2', 'Rohan');//it's an object type item. we can see the values of the keys like window.localstorage.name/windows.localstorage.name2

// to get/retreive the items, we use localStorage.getItem
let name = localStorage.getItem('name');
let name2 = localStorage.getItem('name2');
console.log(name, name2);

// to clear the local storage 
// localStorage.clear();
// now we will find in the devtool option localStorage kay-value pairs will clear

// to remove a particular key-value from local storage
console.log(name2);
localStorage.removeItem('name2');
console.log(name2); 

// we can't store array in the local storage directly
// so that we have to JSON.sringify() & JSON.parse()
let impArray = ['begun', 'potol', 'jhinga', 'kachkola'];
localStorage.setItem('sobji', JSON.stringify(impArray));
let name3 = JSON.parse(localStorage.getItem('sobji'));
// will return string
console.log(localStorage.getItem('sobji'));
console.log(typeof localStorage.getItem('sobji'));
// will return the original array
console.log(name3, typeof name3); 
// *** its easy to work with array but sometimes difficult to work with string 

// session storage
sessionStorage.setItem('sessionName', 'Harry');
sessionStorage.setItem('sessionName2', 'Rohan');
sessionStorage.setItem('sessionSobji', JSON.stringify(impArray));

// to clear the session storage 
// sessionStorage.clear();
// now we will find in the devtool option sessionStorage kay-value pairs will clear
