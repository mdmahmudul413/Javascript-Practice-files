// create a div
let divElem = document.createElement('div');

// grabing the elements .container and #myfirst 
let container = document.querySelector('.container');
let myfirst = document.querySelector('#myfirst');

// to check that all element are ready or not
console.log(divElem, container, myfirst);

// create a text node for the divElem
let val = localStorage.getItem('text');
let text;
if(val == null){
    text = document.createTextNode('This is an empty div. Click to edit it');
}else{
    text = document.createTextNode(val);
}
divElem.appendChild(text);

// give attributes to the divElem
divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', 'elem');
divElem.setAttribute('style', 'border: 2px solid black; width:320px; margin: 34px; padding: 23px;');

  
// insert the element with insertBefore() function
container.insertBefore(divElem, myfirst);

// we can target the 'divElem' as 'elem' because now 'elem' is the id of divElem
// adding click listener
divElem.addEventListener('click', function(){
    let noTextAreas = document.getElementsByClassName('textarea').length;
    console.log('Total number of textarea: ' + noTextAreas);
    if(noTextAreas == 0){
        let html = divElem.innerHTML;
        divElem.innerHTML = `<textarea class="textarea" id="textarea" cols="40" rows="5">${html}</textarea>`;
    }

    // adding blur listener
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function(){
        divElem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    });
});