console.log('Hello');
/* 
Two types of element selectors
1. Single element selector
2. Multi element selector
*/

// 1. Single element selector
// getElementById
//let element = document.getElementById('heading');
//console.log(element);

// to know the class name of this element
//let clsName = element.className;
//console.log(clsName);

// childNodes: to know the child element of an parent element
//let element1 = document.getElementById('form');
//console.log(element1.childNodes);

// parentNode: to know the parent element of an element
//et element2 = document.getElementById('form');
//console.log(element2.parentNode);

// css styling
// let element3 = document.getElementById('form');
// element3 = element3.parentNode.style.backgroundColor = 'yellow';

// changing innerText &innerHtml
//let element4 = document.getElementById('heading');
// element4 = element4.innerText = 'Hello Mahadi';
//element4 = element4.innerHTML = '<i>Hello Mahadi</i>';

// querySelector
// let sel  = document.querySelector('#heading');
// console.log(sel);

// let sel1  = document.querySelector('.hello');
// console.log(sel1);

// if we select element by it's tag name then it will select only first element
// let sel2  = document.querySelector('h1');
// console.log(sel2);
// let sel3  = document.querySelector('div');
// console.log(sel3);

// Multi element selector
// let sel4 = document.getElementsByClassName('child');
// console.log(sel4);
// console.log(sel4[0]);
// console.log(sel4[1]);
// console.log(sel4[2]);

// we can travers element by index number
// let sel5 = document.getElementsByClassName('container');
// console.log(sel5[0].getElementsByClassName('child'));
// console.log(sel5[0].getElementsByTagName('div'));

// we have to form the html collection into an array for make any iteration 
// sel6 = document.getElementsByTagName('div');

// Array.from(sel6).forEach(element => {
//     element.style.color = 'blue';
// });




