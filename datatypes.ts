//Type string

let lname : string;

lname = "Adrian";

let newname = lname.toUpperCase();

console.log(newname);

//Type number

let age: number;

age = 25;
age = 25.5;

console.log(age);

//Type boolean

let isValid : boolean;

isValid = true;

console.log(isValid);

// Type array (string)

let empList : string[];

empList = ["Adrian", "Hugo", "Pedro"];

let emp = empList.find((e) => e === "Adrian" )

console.log(`Hello my name is ${emp}`);

// Type array (number)

//Remenber to type always in lowercase (number)

let numList : number[];

numList = [1,2,3,4,5];

let result = numList.filter((num)=>num > 2);

let num = numList.find((e) => e === 2 )

let sum = numList.reduce((acumulator, numberOnIteration) => acumulator + numberOnIteration)

console.log(`The number stablished in then condition is ${num}`);
console.log(`The numbers on the array greater than 2 are: ${result}`);
console.log(`The total sum of the numbers into numList array is: ${sum}`);


// Type enum

const enum Color {
  Red, Green, Blue
}

let c: Color = Color.Green;

console.log(`Color ${c}`)


// Type Array tuples

let swapNumbs: [number, number];

/*A tuple is a typed array with a pre-defined length and types for each index.*/

function swapNumbers(num1: number, num2: number):[number, number]{
  return [num1,num2];
}

swapNumbs = swapNumbers(10,20);

swapNumbs[0];
swapNumbs[1];

//Type any

/*Avoid use randomly any*/

/*Also is automatically typed example let department: any === let department */

let department;

department = "IT";
department = 10;

function add(num1: number, num2: number){
  return num1 + num2;
}
