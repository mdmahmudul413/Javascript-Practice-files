const proto = {
    slogan: function(){
        return `This company is the best.`;
    },
    changeName: function(newName){
        this.name = newName;
    }
}

// creating object newProto
// let newProto = Object.create(proto);
// console.log(newProto);
// newProto.name = 'Harry';
// newProto.role = 'Programmer';
// console.log(newProto);
// newProto.changeName('Mahmud');
// console.log(newProto);

// alternative syntex of creating newProto1 object
// let newProto1 = Object.create(proto, {
//     name: {value: 'Mahadi', writable: true},
//     role: {value: 'Programmer', writable: true}
// });
// console.log(newProto1);
// newProto1.changeName('Redoanul');
// console.log(newProto1);
 
// lets make a constructor name employee
function employee(name, salary, experience){
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// add slogan to the employee prototype
employee.prototype.slogan = function(){
    return `This company is the best company. Regards, ${this.name}`;
}
// make an object emp
let emp = new employee('Rohan', 20, 38)
console.log(emp);
console.log(emp.slogan());

// In the older varsion of JS, inheritence were happen via prototype. But in ES6, classes are met
// [prototype inheritence]

// lets make another constructor name programmer
function programmer(name, salary, experience, language){
    employee.call(this, name, salary, experience);
    this.language = language;
}

// In this way, prototype will not get. We have write extra code
// console.log(prog.slogan()); // so it will return error

// inheriting the prototype
programmer.prototype = Object.create(employee.prototype);

// also have to manually set the constructor
programmer.prototype.constructor = programmer;

// make an object prog
let prog = new programmer('Parker', 206, 38, 'JS')
console.log(prog);

// now it will work
console.log(prog.slogan());
// By doing these, we will achieve inheritence using prototype




