
export
let a : number = 12;
let b : number = 5;
let c : number = a%b;
console.log(c); // This will log '2' since 'a' is 12 and 'b' is 5.

console.log(a>b); // This will log 'true' since 12 is greater than 5.
console.log(a<b); // This will log 'false' since 12 is not less than 5.

let d:any = 10;
let e:any  = "10";

console.log(d==e); // This will log 'true' since '==' compares values and both are 10.
console.log(d===e); // This will log 'false' since '===' compares both value and type, and here 'd' is a number while 'e' is a string.

let age : number = 25;

// If statement to check if the person is eligible to vote

if (age>=18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// else if statement to check if a number is positive, negative or zero

let num : number = -5;

if (num > 0) {
    console.log(`${num} is a positive number.`);
}
else if (num < 0) {
    console.log(`${num} is a negative number.`);
}
else {
    console.log(`${num} is zero.`);
}

// Nested if statement to check if a number is positive and even

let num2 : number = 8;
if (num2 > 0) {
    if (num2 % 2 === 0) {
        console.log(`${num2} is a positive and even number.`);
    }
    else {
        console.log(`${num2} is a positive but odd number.`);
    }
}  
else {
    console.log(`${num2} is not a positive number.`);
}

// Switch statement to check the day of the week

let day : number = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday"); 
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;  
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}   



let day1 : number = 3;

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log(days[day1 - 1] ?? "Invalid day");  

let stuId = 101;
const studentNames = ["John", "Alice", "Bob", "Eve"];
console.log(studentNames[stuId - 1] ?? "Invalid student ID");

