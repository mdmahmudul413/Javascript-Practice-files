console.log('hello');
// we can add event listener another way
let btn = document.getElementById('btn');
btn.addEventListener('click', func);

function func(e){
    console.log('Thank', e);
}

// to bypassing an element type default behaviour, then we should use preventDefault() function
let btn0 = document.getElementById('btn0');
btn0.addEventListener('click', func0);

function func0(e){
    console.log('Thank', e);
    e.preventDefault();
}

// dblclick event
btn0.addEventListener('dblclick', func1);
function func1(e){
    console.log(`It's Double Click`);
    e.preventDefault();
}

// mousedown event
let btn1 = document.getElementById('btn1');
btn1.addEventListener('mousedown', func2);
function func2(e){
    console.log(`It's mousedown event`);
    e.preventDefault();
}

// mouseenter event and mouse leave
let btn2 = document.getElementById('btn2');
btn2.addEventListener('mouseenter', func3);
btn2.addEventListener('mouseleave', func4);

function func3(e){
    console.log(`It's mouseenter`);
    e.preventDefault();
}

function func4(e){
    console.log(`It's mouseleave`);
    e.preventDefault();
}

// mousemove event
let container = document.querySelector('.container');
container.addEventListener('mousemove', func5);

function func5(e){
    console.log(`It's mousemove`);
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 255`;
    e.preventDefault();
}



