// console.log('Hello World');
// fetch api is a new standard of JS. We will us it more instead of using xhr object.
let myBtn = document.getElementById('myBtn');
let content = document.getElementById('content');
// console.log(myBtn);


// get request with fetch API
// get data from a local file name "harry.txt"
function getData(){
    // console.log('Started getData');
    let url = 'harry.txt';
    fetch(url).then((response) => {
        // console.log('Inside first "then"');
        return response.text();
    }).then((data) =>{
        // console.log('Inside second "then"');
        console.log(data);
    });
}

// console.log('Before running getData');
getData();
// console.log('After running getData');

// fetch() works asynchronously. So that 'Before running getData' will print. Then 'Started getData'. 
// And then 'After running getData'. In this moment fetch() function will run in the background. 
// After that 'Inside first "then"' will print and then 'Inside second "then"'. Finally 
// data will fetch and will print the desired data.



// get data from api
function getApiData(){
    let url = 'https://api.github.com/users';
    fetch(url).then((response) => {
        return response.json();

        // to get plain text
        // return response.text();
        // JSON = Javascript Object Notation
    }).then((data) =>{
        console.log(data);
    });
}
getApiData();


// post request with fetch API
// fetch api function take 2 parameters at the time post data
// we will use "http://dummy.restapiexample.com/" link to post data
function postData(){
    let url = 'https://dummy.restapiexample.com/api/v1/create';
    let data = {"name":"test","salary":"123","age":"23"};
    let params = {
        method: 'post',
        headers: {
            'Content-Type' : 'application/json'
        },
        // if the data is object then use JSON.stringify(). If data is string
        // then no need to use JSON.stringify()
        body: JSON.stringify(data)
    }

    // we will convert it to js arrow function
    // fetch(url, params).then((response) => {
    //     return response.text();
    // }).then((data) =>{
    //     console.log(data);
    // });

    
    fetch(url, params).then(response => response.text())
    .then(data => console.log(data));
}
postData();
