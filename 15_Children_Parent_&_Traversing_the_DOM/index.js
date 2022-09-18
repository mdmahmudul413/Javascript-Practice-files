let cont = document.querySelector('.container');
// console.log(cont);

// this will print all of the childnodes like comments, new lines etc
// console.log(cont.childNodes);

// this will not print the comments, new lines only print the children
// console.log(cont.children);

// to know the nodeType
// let nodename = cont.children[1].nodeName;
// console.log(nodename);

// to know the nodeType.to the value of nodetype value we can google it like "nodetype values" 
// let nodeType = cont.childNodes[2].nodeType;
// console.log(nodeType); 

// we can travarse the childrens of childrens
// console.log(cont.children[1].children);
// console.log(cont.children[1].children[0].children);

// firstChild, firstElementChild
console.log(cont.firstChild);
console.log(cont.firstElementChild);

// lastChild, lastElementChild
console.log(cont.lastChild);
console.log(cont.lastElementChild);

// childElimentCount: count of child element
console.log(cont.childElementCount);

// parentNode, nextSibling, nextElementSiblig
console.log(cont.firstElementChild);
console.log(cont.firstElementChild.parentNode);
console.log(cont.firstElementChild.nextSibling);
console.log(cont.firstElementChild.nextElementSibling);
console.log(cont.firstElementChild.nextElementSibling.nextElementSibling);
