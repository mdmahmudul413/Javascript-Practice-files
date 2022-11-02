// alternate the part 37 with promise

// console.log('Hello');

// pretend that this response is coming from server
const students = [
    {name: 'harry', subject: 'javascript'},
    {name: 'Rohan', subject: 'Machine Learning'}
]

// when a function take functions as argument, those functions are called call back functions.

// function enrollStudent()
function enrollStudent(student){
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            students.push(student);
            const error = false;
            // const error = true;
            if(!error){
                console.log('Student has been enrolled');
                resolve();
            }
            else{
                reject();
            }
        }, 3000);
    });    
}
// enrollStudent function take 8 sec to enroll a student

// function getStudents()
function getStudents(){
    setTimeout(function() {
        let str = '';
        students.forEach(function(element) {
            str += `<li>${element.name}</li>`;
        });
        document.getElementById('students').innerHTML = str;
        console.log('Student has been fetched');
    }, 1000);
}
// getStudents function take 1 sec to fetch student data
// enrollStudent({name:'Moon', Subject: 'Python'});

// because of student enrollment take long time, that's why we don't see the data of 'Moon' in the DOM. that's why we have to set another callback parameter to enrollStudent to hold the execution of getStudents() function. and will not use direct call like 'getStudents()'
 
// getStudents();

// new way of enrollment using callback
let moon = {name:'Moon', Subject: 'Python'};
enrollStudent(moon).then(getStudents).catch(function(){
    console.log('Some error occured');
});

