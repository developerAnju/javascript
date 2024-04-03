// Implement a function that sums an arbitrary number of arguments using the rest operator.
// The function should handle both positive and negative numbers, as well as zero.
// what is arbitrary number of arguments? accept an indefinite number of arguments as an array.

/*
Interview Task: Rest and Spread Operator

Objective:

Implement a function that accepts an arbitrary number of arguments and returns an object containing the sum, average, and minimum values of those arguments. 
The function should use the rest operator to collect the arguments and the spread operator when calculating the results.

Requirements:

Implement a function called computeStats that accepts an arbitrary number of arguments using the rest operator.
The function should return an object containing the sum, average, and minimum values of the given arguments. The object should have the following structure:
javascript
Copy code
{
  sum: 0,
  average: 0,
  min: 0
}
Use the spread operator when calculating the sum, average, and minimum values.
Example:

Calling computeStats(1, 2, 3, 4, 5) should return:

javascript
Copy code
{
  sum: 15,
  average: 3,
  min: 1
}
Bonus:

Validate that the input arguments are numbers and handle non-numeric inputs gracefully.
Add support for calculating the maximum value and include it in the returned object.
*/
// function computeStats() {
//     let sum = 0,average = 0,min = 0;
//     const args = [...arguments];
    
    // if (args.length === 0){
    //     throw new Error('No arguments provided');
    // }
    
    // Validating numeric inputs
    // for (let i=0;i<args.length;i++){
    //     if (!Number.isFinite(args[i])){
    //         console.log(`${args[i]} is not a valid number`);
    //         args.splice(i,1);
    //         i--;
    //     }
    // }
    
    //Calculations
//     sum = args.reduce((a,b)=>a+b,0);
//     average = sum/args.length;
//     min = Math.min(...args);
    
//     return {sum, average, min};
// }

// console.log(computeStats(1,2,3,4,5));
// Outputs: two is not a valid number
// { sum: 8, average: 2, min: 1 }</s>

// function computeStats(){
//     let sum = 0, average = 0, min = 0;
//     const args = [...arguments];
//     for(const arg of args) {
//         if (typeof arg !== 'number') {
//             throw new TypeError(`Argument ${arg} is not a number`);
//         }} numberArgs = args.filter(arg => typeof arg === 'number');
//     if (numberArgs.length ===  0) {
//         throw new Error('At least one number argument required');
//     }
//     sum = numberArgs.reduce((a, b) => a + b, 0);
//     average = sum / numberArgs.length;
//     min = Number.POSITIVE_INFINITY;
//     for (const num of numberArgs) {if (num < min) min = num;}
//     return { sum, average, min };
// }

// try {
//     console.log(computeStats(1, 2, 3, 4,  5));
// } catch (e) {
//     console.error(e.message);
// }


function computeStats(){
    let sum = 0, average = 0, min = 0;
    const numbers = [...arguments];
    sum = numbers.reduce((a, b) => a+b,0);// what is reduce() function?
    average = numbers.reduce((a, b) => a+(1/numbers.length)*b,  0);
    min = Math.min(...arguments);
    return {sum, average, min};
}
console.log(computeStats(1,2,3,4,5));
