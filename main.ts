export {}
let message = "Welcome";
console.log(message);

let x = 10;
const y = 30;

let sum;
// const div;

// advatage of variable
// first static string cannot be reassigm as boolen it will error
// second is intellisence, if the variable is string intellisence will give all string function

let isBeginner:boolean = true;
let total:number = 0;
let name:string = "Sandra"
let sentence: String = `My name is ${name}
I am beginner in typescript` // `` below esc key for variable use

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1:number[] = [1,2,3];
let list2:Array<number> = [1,2,3];

// touple list with differenct type like in python with sequece
let list3:[string, number]=['chris',22];

enum Color {Red, Green, Blue};

let c: Color = Color.Green;

console.log(c);

console.log(sentence)

let randomValue: any = 10;
randomValue = true;
randomValue = "Sandra";

let myVariable: unknown = 10;

function hasName(obj: any): obj is {name: string}{
    return !! obj && typeof obj == "object" && "name" in obj
}

if(hasName(myVariable)){
    console.log(myVariable.name);
}
// myVariable();
// (myVariable as String).toUpperCase();

// without datatypes
let a;
a = true;
a = 10;

// without datatypes but initialise as number so it will error when your redeclare as boolean
// type interference
let b = 20;
// b = true;

// this is a uniontype
let multitype: number | Boolean;
multitype = 20;
multitype = true;
// this is a anytype
let anyType: any;
anyType = 20;
anyType = true;

// add '?' to make the variable optional
// parameter can have a default by just add it and the of the variable
function add(num1: number, num2: number = 10){
    return num1 + num2;
}

console.log(add(10,7));
// console.log(add(10,'7'));
interface person {
    firstname: string,
    lastname: string,
    age?: number
}


// passing object parameter
function fullname(person: person){
    console.log(`${person.firstname} ${person.lastname}`);
}

// this is and object
let p = {
    firstname: "Sandra",
    lastname: "Alejo"
}

fullname(p);

class Employee {
    employeeName: string;

    constructor(name: string){
        this.employeeName = name;
    }

    greet(){
        console.log(`Good Evening ${this.employeeName} `);
    }
}

let emp = new Employee("Sandra Alejo");
emp.greet();


// in typescript extewnds is the inheritance
class manager extends Employee {
    constructor(managerName: string){
        super(managerName);
    }

    delegateWork(){
        console.log("start");
        this.greet();
        console.log("Manager delegating task");
    }
}

let m1 = new manager('Sandra');
m1.delegateWork();