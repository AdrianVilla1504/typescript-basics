"use strict";
//Type string
var lname;
lname = "Adrian";
var newname = lname.toUpperCase();
console.log(newname);
//Type number
var age;
age = 25;
age = 25.5;
console.log(age);
//Type boolean
var isValid;
isValid = true;
console.log(isValid);
// Type array (string)
var empList;
empList = ["Adrian", "Hugo", "Pedro"];
var emp = empList.find(function (e) { return e === "Adrian"; });
console.log("Hello my name is " + emp);
// Type array (number)
//Remenber to type always in lowercase (number)
var numList;
numList = [1, 2, 3, 4, 5];
var result = numList.filter(function (num) { return num > 2; });
var num = numList.find(function (e) { return e === 2; });
var sum = numList.reduce(function (acumulator, numberOnIteration) { return acumulator + numberOnIteration; });
console.log("The number stablished in then condition is " + num);
console.log("The numbers on the array greater than 2 are: " + result);
console.log("The total sum of the numbers into numList array is: " + sum);
var c = 1 /* Green */;
console.log("Color " + c);
// Type Array tuples
var swapNumbs;
/*A tuple is a typed array with a pre-defined length and types for each index.*/
function swapNumbers(num1, num2) {
    return [num1, num2];
}
swapNumbs = swapNumbers(10, 20);
swapNumbs[0];
swapNumbs[1];
//Type any
/*Avoid use randomly any*/
/*Also is automatically typed example let department: any === let department */
var department;
department = "IT";
department = 10;
function add(num1, num2) {
    return num1 + num2;
}
