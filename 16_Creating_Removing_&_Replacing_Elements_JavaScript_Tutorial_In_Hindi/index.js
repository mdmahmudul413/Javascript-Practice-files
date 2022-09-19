console.log('Hello');

// createElement()
// Adding a class name to the element
// Adding a id to the element
// Adding tittle to the element
// Adding text
let element = document.createElement('li');
element.className = 'child_li';
element.id = 'created';
element.setAttribute('tittle', 'mytittle');

// Add inner html or text
// element.innerText = 'Hello Guys';
// element.innerHTML = '<b>Hello Guys</b>';

// Another way to add inner html
let text = document.createTextNode('I am a golden man');
element.appendChild(text);

let ul = document.querySelector('ul.this_ul');
ul.appendChild(element);

// Replacing an element with another
let elem = document.createElement('h1');
let heading = document.getElementById('heading');
let text1 = document.createTextNode('This is the replaced heading');

elem.id = 'elem';
elem.className = 'elem';
console.log(elem);
elem.appendChild(text1);
heading.replaceWith(elem);

// Replacing an element with child element
let myui = document.getElementById('myui');
let child = document.getElementById('fui');
myui.replaceChild(element, child);

// Removing an child element
// myui.removeChild(document.getElementById('lui'));

// getAttribute(), hasAttribute(), removeAttribute()
let elem2 = document.getElementById('myfirst');
console.log(elem2.getAttribute('id'));
console.log(elem2.getAttribute('class'));
console.log(elem2.getAttribute('tittle'));
console.log(elem2.hasAttribute('tittle'));
console.log(elem2.hasAttribute('class'));
console.log(elem2.hasAttribute('gsdf'));
elem2.removeAttribute('id');
console.log(elem2);






