console.log("Hello, TypeScript!");

var age: number = 30;
// age = "thirty"; // This will cause a type error

console.log(`I am ${age} years old.`);


function greet() {

    if (true) {
        var message = "Hello, World!";
        let blockMessage = "Hello, Block!";
        const constantMessage = "Hello, Constant!";
        console.log(message);
        console.log(blockMessage);
        console.log(constantMessage);
    }

    console.log(message); // Works (function-scoped)
    // console.log(blockMessage); // Error: blockMessage is not defined (block-scoped)
    // console.log(constantMessage); // Error: constantMessage is not defined (block-scoped)







}


greet();









