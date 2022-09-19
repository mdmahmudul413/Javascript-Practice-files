console.log('Hello');

// click evant, event object 'e'
document.getElementById('heading').addEventListener('click', function(e){
    console.log('you have clicked on heading.');
    // location = '//google.com';//redirect to google

    // printing event object 
    // console.log(e);

    // target is an event object 
    console.log(e.target);
    console.log(e.target.className);
    console.log(e.target.classList);
    console.log(e.target.id);
    // e.target mainly gives us an element and we can apply all of the element properties, functions, methods 

    // to make the classList an array
    let variable = e.target.classList;
    console.log(Array.from(variable));

    // offsetX, offsetY
    console.log(e.offsetX);
    console.log(e.offsetY);

    // clientX, clientY
    // this will give measurement according to our browser window
    console.log(e.clientX);
    console.log(e.clientY);
});


// click mouseover, event object 'e'
document.getElementById('heading').addEventListener('mouseover', function(e){
    console.log('you have clicked on heading.');
});