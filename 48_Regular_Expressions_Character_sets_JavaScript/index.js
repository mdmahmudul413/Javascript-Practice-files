// Use always const if you know that your value of variable is fixed.

// character sets
// we can use a range of character
let regex = /h[a-z]rry/; 
// example string : 'hprry bhai'

// we can use some specific characters
regex = /h[xyz]rry/; 
// example string : 'hxrry bhai'

// we can use some specific characters
regex = /h[^xyz]rry/; // except x, y, z
// example string : 'horry bhai'

// Multiple character set
regex = /h[^xyz]rr[yu]/; // except x, y, z
// example string : 'hkrry bhai'/'hnrru bhai'

// Multiple character set
regex = /h[a-zA-Z]rr[yu0-9]/; // except x, y, z
// example string : 'hPrry bhai'

// Multiple character set
regex = /h[a-zA-Z]rr[yu0-9][0-9]/; // except x, y, z
// example string : 'hUrry7 bhai'

// Multiple character set
regex = /har{2}y/; // r can occur exactly 2 times
// example string : 'harry bhai'

// Quantifiers - use {}
regex = /har{0,2}y/; // r can occur exactly 0 time to 2 times(0-2)
// example string : 'harry bhai'/'hary bhai'/'hay bhai'

// Groupings - we use () for groupings
regex = /(har){2}/;
// example string : 'harhar bhai'

// Groupings - we use () for groupings
regex = /(har){2}([0-9]r){3}/;
// example string : 'harhar9r3r0r bhai'

const str = 'harry bhai';

let result = regex.exec(str);
console.log("The result from exec is ", result);

if(regex.test(str)){
    console.log(`The string "${str}" matches with "${regex.source}"`)
}
else{
    console.log(`The string "${str}" does not match with "${regex.source}"`)

}