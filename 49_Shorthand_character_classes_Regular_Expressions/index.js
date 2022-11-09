let regex = /\warr/; // word character(\w) - underscore(_) or alphanumaric
// example string: 'harry bhai' / '_arry bhai'


// more than one word characters
regex = /\w+y/;
// example string: 'harry bhai' / 'hy bhai'


// none word character
regex = /\Wbhai/; // Capital "W": none word character
// example string: 'harry bhai'


// multiple none word character
regex = /\W+bhai/;
// example string: 'harry #$%^&*bhai'


// single digit matching
regex = /\d999/; // d = (0-9)
// example string: 'Mahmud 89999' 
regex = /harry \d999/;
// example string: 'harry 89999' 


// more than one digit matching
regex = /\d+999/; // d = (0-9)
// example string: 'Mahmud 3535353489999'
regex = /harry \d+999/;
// example string: 'harry 53489999'


// single none digit matching
regex = /\D999/;
// example string: 'Mahmud &9999'
regex = /harry \D999/;
// example string: 'harry %9999'


// single none digit matching
regex = /\D+999/;
// example string: 'Mahmud &9999'
regex = /harry \D+999/;
// example string: 'harry Peter9999'


// mathing single blank space
regex = /\sHa/; // match white space character with "\t"(multiple write space)
// example string: 'harry Hatem9999'


// mathing one or multiple blank space
regex = /\s+Ha/;
// example string: 'harry     Hatem9999'


// mathing non blank space
regex = /\SHa/; // Capital S 
// example string: 'harryHatem9999'


// mathing multiple non blank space
regex = /\S+Ha/; // Capital S 
// example string: 'harryHatem9999'


// word boundary
regex = /harry\b/; // b = boundary
// example string: 'harry bhai'


// Assertion
regex = /b(?=h)/; // It means after b the character should be h
// example string: 'harry bhai'

regex = /b(?!h)/; // It means after b the character should any one ecept h
// example string: 'harry bkai'


const str = 'harry bkai';

let result = regex.exec(str);

console.log("The result from exec is ", result);

if(regex.test(str)){
    console.log(`The string "${str}" matches with "${regex.source}"`)
}
else{
    console.log(`The string "${str}" does not match with "${regex.source}"`)

}