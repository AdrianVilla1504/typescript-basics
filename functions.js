"use strict";
// void function type
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function addVoid(num1, num2) {
    num1 + num2;
}
// NOT void function
function addNotVoid(num1, num2) {
    return num1 + num2;
}
// conditional parameter in function declaration
function addConditional(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(addConditional(2, 3));
console.log(addConditional(2, 3, 5));
// Passing an array of numbers as parameter into a function with spread operator
function addArraySpreaded(num1, num2) {
    var num3 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        num3[_i - 2] = arguments[_i];
    }
    return num1 + num2 + num3.reduce(function (acc, i) { return acc + i; });
}
var numbers = [1, 2, 3, 4, 5];
console.log(addArraySpreaded.apply(void 0, __spreadArrays([2, 3], numbers)));
//rest parameters on a function
function addRest(num1, num2) {
    var num3 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        num3[_i - 2] = arguments[_i];
    }
    return num1 + num2 + num3.reduce(function (acc, i) { return acc + i; });
}
console.log(addRest(1, 2, 5, 4, 3));
//T or type
function getItems(items) {
    return new Array().concat(items);
}
var concatResult = getItems([1, 2, 3, 4, 5]);
var concatString = getItems(["a", "b", "c", "c", "d", "e"]);
