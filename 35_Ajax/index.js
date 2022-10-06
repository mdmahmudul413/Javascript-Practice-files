/*
1. AJAX stands for asynchronous JavaScript and XML.
2. AJAX is not a programming language. Rather, It's a set of existing technologies.
3. AJAX helps in fetching data asynchronously without interfiring with the existing page.
4. NO page reload/refresh.
5. Modern websites use JSON instead of XML for data transfer.

Why use AJAX
1. No page reload/refresh
2. Better user experience
3. Saves network bandwith
4. Very interactive


How it Works?
1. AJAX uses XMLHttpRequest object(xhr object)
2. Data can be transferred in any format and protocol
*/

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler(){
    console.log('You have clicked!');
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();


    // use this for get request
    // open the object
    // 'GET' means only fetch
    // 'POST' means not only fetch but also send data
    // 'harry.txt' is the file where data will be fetched
    //  'true' means non blocking request, it means       asynchronous request
    // xhr.open('GET', 'harry.txt', true);

    // to fetch json data
    // xhr.open('GET', 'https://dummyjson.com/products/1', true);



    // use this for post request
    xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true);
    
    //content type: urlencoded 
    // xhr.getResponseHeader('Content-type', 'application/x-www-form-urlencoded');

    
    //content type: json 
    xhr.getResponseHeader('Content-type', 'application/json');



    // what to do on progress(optional) 
    // we can use onprogress when we want to add spinner or something like that in our website
    xhr.onprogress = function(){
        console.log('On Progress');
    }

    /*
    Now we can call the function onreadystatechange to see the current state. It also optional.
        0 = UNSENT: Client has been created. open() not called yet.
        1 = OPENED: open() has been called.
        2 = HEADERS_RECEIVED: send() has been called, and headers and status are available.
        3 = LOADING: Downloading; responseText holds partial data.
        4 = DONE: The operation is complete.
    */
    xhr.onreadystatechange = function(){
        console.log('Current State is ', xhr.readyState);
    }

    // what to do when response is ready
    // onload means the current state is 4
    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
        }
        else{
            console.error('Some error occured');
        }

    }

    // send the get request
    // xhr.send();

    // send the post request
    // content type: urlencoded
    // params = "name=test&salary=123&age=23";
    // xhr.send(params);


    // send the post request
    // content type: json
    params = `{"name":"testadf","salary":"123","age":"23"}`;
    xhr.send(params);

    // xhr.open('GET', 'harry.txt', true); bellow line will print first because of asynchrounous request
    // xhr.open('GET', 'harry.txt', false); bellow line will print last because of synchrounous request
    console.log('We are done');
}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler(){
    console.log('You have clicked popBtn!');
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();


    // use this for get request
    // open the object
    // 'GET' means only fetch
    // 'POST' means not only fetch but also send data
    // 'harry.txt' is the file where data will be fetched
    //  'true' means non blocking request, it means       asynchronous request
    // xhr.open('GET', 'harry.txt', true);

    // to fetch json data
    xhr.open('GET', 'https://dummy.restapiexample.com/api/v1/employees', true);


    // what to do when response is ready
    // onload means the current state is 4
    xhr.onload = function(){
        if(this.status === 200){
            let arr = JSON.parse(this.responseText);
            arr = arr.data;
            // console.log(arr);
            let list = document.getElementById('list');
            let str = '';
            for(key in arr){
                // console.log(key);
                str += `<li>${arr[key].employee_name}</li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.error('Some error occured');
        }

    }

    // send the get request
    xhr.send();
}