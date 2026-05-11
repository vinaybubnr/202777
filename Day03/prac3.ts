export{};

let value:number = 123;

console.log(Math.floor(value/10)); // Output: 12
console.log(Math.floor(value/100)); // Output: 1

let num1:number;

for(num1=1; num1<=5; num1++){

    console.log(num1); // Output: 1, 2, 3, 4, 5
}

console.log(num1); // Output: 6 (after the loop, num1 is incremented to 6)


// Reverse Number

let num2:number = 12345;
let reversedNum:number = 0;

while(num2 > 0){
    let digit:number = num2 % 10;
    reversedNum = (reversedNum * 10) + digit;
    num2 = Math.floor(num2 / 10);
}
console.log(reversedNum); // Output: 54321

// Array
console.log("Array Example:");
let arr:number[] = [1, 2, 3, 4, 5];

for(let i of arr){
    console.log(i); // Output: 1, 2, 3, 4, 5
}

