"use strict";
//creating a class
var Employee = /** @class */ (function () {
    //constructor of class
    function Employee(id, name, address) {
        this.address = address;
        this.id = id;
        this.name = name;
    }
    //instance of class
    Employee.prototype.getNameWithAddress = function () {
        return this.name + " stays at " + this.address;
    };
    return Employee;
}());
var john = new Employee(1, "John", "Highway 71");
//john.id = 1;
//john.name = 'John';
//john.address = 'Highway 71';
var address = john.getNameWithAddress();
console.log(address);
