"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Welcome";
console.log(message);
var x = 10;
var y = 30;
var sum;
// const div;
// advatage of variable
// first static string cannot be reassigm as boolen it will error
// second is intellisence, if the variable is string intellisence will give all string function
var isBeginner = true;
var total = 0;
var name = "Sandra";
var sentence = "My name is " + name + "\nI am beginner in typescript"; // `` below esc key for variable use
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// touple list with differenct type like in python with sequece
var list3 = ['chris', 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
console.log(sentence);
var randomValue = 10;
randomValue = true;
randomValue = "Sandra";
var myVariable = 10;
function hasName(obj) {
    return !!obj && typeof obj == "object" && "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
// myVariable();
// (myVariable as String).toUpperCase();
// without datatypes
var a;
a = true;
a = 10;
// without datatypes but initialise as number so it will error when your redeclare as boolean
// type interference
var b = 20;
// b = true;
// this is a uniontype
var multitype;
multitype = 20;
multitype = true;
// this is a anytype
var anyType;
anyType = 20;
anyType = true;
// add '?' to make the variable optional
// parameter can have a default by just add it and the of the variable
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
console.log(add(10, 7));
// passing object parameter
function fullname(person) {
    console.log(person.firstname + " " + person.lastname);
}
// this is and object
var p = {
    firstname: "Sandra",
    lastname: "Alejo"
};
fullname(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Evening " + this.employeeName + " ");
    };
    return Employee;
}());
var emp = new Employee("Sandra Alejo");
emp.greet();
// in typescript extewnds is the inheritance
var manager = /** @class */ (function (_super) {
    __extends(manager, _super);
    function manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    manager.prototype.delegateWork = function () {
        console.log("start");
        this.greet();
        console.log("Manager delegating task");
    };
    return manager;
}(Employee));
var m1 = new manager('Sandra');
m1.delegateWork();
