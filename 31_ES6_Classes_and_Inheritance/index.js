console.log('hello');

// class is a blueprint or tamplate
class Employee{
    // constructor: when object is made of any class, first constructor will run
    constructor(givenName, givenExperience, givenDivision){
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }

    slogan(){
        return `I am ${this.name} and this company is the best.`
    }

    joiningYear(){
        return 2022-this.experience;
    }

    static add(a, b){
        return a + b;
    }
}

// making object of Employee class
// when object is made of any class, first constructor will run
let harry = new Employee('Harry', 67, 'Dhaka');
console.log(harry);
console.log(harry.slogan());
console.log(harry.joiningYear());

// static method : The methods which are not use object property. We can use those methods without making object of the class
// in the static method we can not use 'this' keyword
console.log(Employee.add(2,3));

// inheritence
// the basic meaning of inheritence is to make a template using another template

class Programmer extends Employee{
    constructor(givenName, givenExperience, givenDivision, givenLanguage, gitHub){
        super(givenName, givenExperience, givenDivision);
        this.language = givenLanguage;
        this.gitHub = gitHub;
    }

    favoriteLanguage(){
        if(this.language == 'python'){
            return 'Python';
        }
        else{
            return 'JS';
        }
    }

    static multiply(a, b){
        return a*b;
    }
}

let rohan = new Programmer('Rohan', 3, 'Dhaka', 'easy', 'rohan420');
console.log(rohan);
console.log(rohan.favoriteLanguage());
// we can also use the super class methods
console.log(rohan.slogan());
console.log(Programmer.multiply(2,3));
