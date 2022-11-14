// void function type

function addVoid(num1: number, num2: number): void {
  num1 + num2;
}

// NOT void function

function addNotVoid(num1: number, num2: number): any {
  return num1 + num2;
}


// conditional parameter in function declaration

function addConditional(num1: number, num2: number, num3?: number): number {
  return num3 ? num1 + num2 + num3 : num1 + num2;
}

console.log(addConditional(2,3));
console.log(addConditional(2,3,5));


// Passing an array of numbers as parameter into a function with spread operator

function addArraySpreaded(num1: number, num2: number, ...num3: number[]): number{
  return num1 + num2 + num3.reduce((acc, i) => acc + i)
}

let numbers = [1,2,3,4,5];

console.log(addArraySpreaded(2,3, ...numbers));

//rest parameters on a function

function addRest(num1: number, num2: number, ...num3: number[]): number{
  return num1 + num2 + num3.reduce((acc, i) => acc + i)
}

console.log(addRest(1,2,5,4,3));



//T or type

function getItems<Type>(items:Type[]): Type[] {

  return new Array<Type>().concat(items);
}

let concatResult = getItems<number>([1,2,3,4,5]);

let concatString = getItems<string>(["a","b","c","c","d","e"]);
