export{}; // To make this file a module and avoid global scope issues
// Primitive Types
// 1 - Number

let age: number = 30;
let price: number = 25.5;
let big: number = 4234234234;

console.log("Age:", age);    // Age: 30
console.log("Price:", price);
console.log("Big Number:", big);

// 2 - String

let firstName: string = "John";
let lastName: string = 'Kenedy';

console.log(`Hello ${firstName} ${lastName}`);  // Hello John Kenedy.
console.log(typeof age);  // number
console.log(typeof firstName);  // string
console.log(typeof price);  // number

// 3 - Boolean

let isStudent: boolean = true;
let isEmployed: boolean = false;    

console.log("Is Student:", isStudent);  // Is Student: true
console.log("Is Employed:", isEmployed);  // Is Employed: false

// 4 - Null and Undefined

let nullValue: null = null;
let undefinedValue: undefined = undefined;

console.log("Null Value:", nullValue);  // Null Value: null
console.log("Undefined Value:", undefinedValue);  // Undefined Value: undefined

// 5 - Any

let randomValue: any = 42;
console.log("Random Value (number):", randomValue);  // Random Value (number): 42

randomValue = "Now I'm a string";
console.log("Random Value (string):", randomValue);  // Random Value (string): Now I'm a string

randomValue = true;
console.log("Random Value (boolean):", randomValue);  // Random Value (boolean): true

// 6 - Union Type

let unionValue: number | string;
unionValue = 100;
console.log("Union Value (number):", unionValue);  // Union Value (number): 100

unionValue = "Now I'm a string";
console.log("Union Value (string):", unionValue);  // Union Value (string): Now I'm a string

// 7 - Void

function logMessage(message: string): void {
    console.log("Log:", message);
}
logMessage("This is a log message.");  // Log: This is a log message.

/*
Summary of Primitive Data Types in TypeScript:  and it is immutable 
1) Primitive Data Types
Number
String  
Boolean
Null
Undefined
Any 
Union Type
Void

*/

