let regex = /harry/;

let str = "harry is harry";

// let result = regex.exec(str);
// console.log('The result from exec is ', result);

// if(regex.test(str)){
//     console.log(`The string "${str}" matches the expression "${regex.source}"`)
// }
// else{
//     console.log(`The string "${str}" does not match the expression "${regex.source}"`)
// }


// metacharacters
// regex = /^h/; // "^" means string is start with regex value

// if(regex.test(str)){
//     console.log(`The string "${str}" is start with "${regex.source}"`)
// }
// else{
//     console.log(`The string "${str}" is not start with "${regex.source}"`)

// }


// regex = /ry$/; // "$" means string is end with regex value

// if(regex.test(str)){
//     console.log(`The string "${str}" is end with "${regex.source}"`)
// }
// else{
//     console.log(`The string "${str}" is not end with "${regex.source}"`)

// }


// matches any one character
// regex = /h.rry/; // "." matches any one character at the place of "."

// if(regex.test(str)){
//     console.log(`The string "${str}" matches with "${regex.source}"`)
// }
// else{
//     console.log(`The string "${str}" does not match with "${regex.source}"`)

// }


// matches zero or more characters
// regex = /h*rry/; // "*" matches zero or more characters at the place of "*"

// if(regex.test(str)){
//     console.log(`The string "${str}" matches with "${regex.source}"`)
// }
// else{
//     console.log(`The string "${str}" does not match with "${regex.source}"`)

// }


// optional character
// regex = /ha?rry?/; // "?" means the character before "?" is optional

// if(regex.test(str)){
//     console.log(`The string "${str}" matches with "${regex.source}"`)
// }
// else{
//     console.log(`The string "${str}" does not match with "${regex.source}"`)

// }


// to make a metacharacter as an expression
regex = /h\*rry/; // "\" makes the meta character an expression

if(regex.test(str)){
    console.log(`The string "${str}" matches with "${regex.source}"`)
}
else{
    console.log(`The string "${str}" does not match with "${regex.source}"`)

}