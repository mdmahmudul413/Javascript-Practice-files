console.log('hello worlds.');
const name = 'Harry';
const greeting = 'Good Morning';
console.log(greeting + ' ' + name);

let html;
// way 1
html = "<p> This is javascript tutorial </p>" +
       "<p> This is Helpful tutorial</p>";
console.log(html);

// anothor way 
// use comma "," inside consol.log() to print multiple things serially
html = html.concat('Adding another line', ' ', 3);
console.log(html);

// toLowerCase(), toUpperCase(), length()
console.log(html.length);
console.log(html.toUpperCase());
console.log(html.toLowerCase());

// indexing
console.log(html[1]);
console.log(html.indexOf('p'));
console.log(html.indexOf('javascript'));

// will return -1 because the substring is missing in the main string
console.log(html.indexOf('oewoj'));

// lastIndexof
console.log(html.lastIndexOf('<'));

// charAt() 
console.log(html.charAt(5));

// endsWith(), includes()
console.log(html.endsWith('aslfj'));
console.log(html.endsWith('3'));
console.log(html.includes('jwof'));
console.log(html.includes('3'));

// substring()
console.log(html.substring(0,2));

// slice()
console.log(html.slice(0,6));
console.log(html.slice(-6));

// split()
console.log(html.split(' '));

// replace(), it replaces only first occurace
console.log(html.replace('This', 'hello'));

// template literals

let fruit1 = 'Orange';
let fruit2 = 'Apple';
let myHtml = `
              Hello ${name}<br>
              <h1>This is Heading.</h1>
              ${name} loves ${fruit1} and ${fruit2}.

`;

console.log(myHtml);
document.body.innerHTML = myHtml;

// to use a single cout
let name1 = 'hello\'';
console.log(name1);

