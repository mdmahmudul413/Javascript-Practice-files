// pretent this is coming from a server as response
let a = 'Harry Vai';
a = undefined;

if(a != undefined){
    // custom error. this will stop the execution of this script
    throw new Error('This is not undefined');
}
else{
    console.log('This is undefined');
}

// try catch will not throw syntex error. If any kind of error occured,
// compiler will execute the catch block. 
// The main reason for using try catch, if we want our program will not stop for any reason, then we have to use try catch
try {
    console.log('Hello');
    sfjasjdfo
} catch (error) {
    console.log('Are you okey?');
    // if we want to print the error
    // console.log(error);
    // console.log(error.name);
    console.log(error.message);
}finally{
    console.log('This statement will always run');
}