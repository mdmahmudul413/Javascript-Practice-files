// Generator
// syntax = function*
// Generator returns object

function* numbersGen(){
    let i = 0;

    // return some fixed number
    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;

    // return unlimited numbers
    while(true){
        yield i++;
    }
}

const gen = numbersGen();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
