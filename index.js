//Define a function expression named 'divide' that takes two parameters 'a' and 'b'
const divide = function(a,b){
    // Return the result of dividing 'a' by 'b'
    return(a/b)
}
// Define an arrow function named 'square' 
const square = x => x* x;
// Declare a variable 'x' and assign it the value 2
let x = 2;

// Define an arrow function named 'add' that takes two parameters 'a' and 'b'
const add = (a, b) => a + b;
// Declare a variable 'a' and assign it the value 2
let a = 2;
// Declare a variable 'b' and assign it the value 3
let b = 3;
{
// Output the result of calling 'divide' function with arguments 2000 and 100
console.log(divide(2000, 100)); //output: 20

//Output the result of calling 'square' function with argument 2
console.log(square(x)); //output: 4

// Output the result of calling 'add' function with arguments 2 and 3
console.log(add(a ,b)); //output: 5
}
