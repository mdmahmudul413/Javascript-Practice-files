console.log('Hello World');

// current date
let today = new Date();
// console.log(today, typeof today);

// any date
let otherDate =new  Date('8-3-2002 06:56:55');
let otherDate1 =new  Date('june 4 1998 12:09:2');
let otherDate2 =new  Date('07/02/2009');
// console.log(otherDate);
// console.log(otherDate1);
// console.log(otherDate2);

// getDay()
// will return sun=0, mon=1, thu = 2, wed = 3, thu = 4, fri = 5, sat = 6
// console.log(otherDate.getDay());

// getDate()
// will return date
// console.log(otherDate.getDate());

// getHours()
// will return date
// console.log(otherDate.getHours());

// getMinutes()
// will return date
// console.log(otherDate.getMinutes());

// getSecond()
// will return date
// console.log(otherDate.getSeconds());

// getMonth()
// will return date
// console.log(otherDate.getMonth());

// getTime()
// will return seconds from 1 jan 1970
// console.log(otherDate.getTime());

// we can set the time what we want
console.log(otherDate);
otherDate.setDate(9);
otherDate.setMonth(0);
otherDate.setFullYear(1995);
otherDate.setHours(15);
otherDate.setMinutes(30);
otherDate.setSeconds(0);
console.log(otherDate);


