// Ternary/conditional operator

//  ?:

//  exp ?  res1 : res2;

//Example 1
/*
let a:number=100, b:number=200;

let res:number= (a>b) ? a: b;
console.log(res);//200
*/

//Example 2:

let personAge:number=30;

let res:string= (personAge>=18)? "Adult": "Minor";
//let res:string= (personAge<18)? "Minor": "Adult";


console.log(res);  // Adult

// example 3:

let marks:number=85;

let grade:string = (marks>=90) ? "A" : (marks>=75) ? "B" : (marks>=50) ? "C" : "F";


console.log("Grade:",grade);  // Grade: B


