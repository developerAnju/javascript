// rest operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Rest_parameters#rest_operator
// const sum = (...args) => args.reduce((a, b) => a + b);
// console.log(sum(1,  2, 3)); 
// Output:  6

function addNumber(a,b,c,...other){
    console.log(other);
    return a+b+c;
}
const add=addNumber(2,3,4,5,6,7,8,9,10);
console.log(add);

// spread
var names = ["Ajay","Anju","Anil"];

function getNames(name1,name2,name3){
    console.log(name1,name2,name3);
}
// getNames(names[0],names[1],names[2]);
// getNames(...names);
getNames(names);

// rest and spread operator with object
let person={
    name: "John",
    age: 30,
    hobby: "playing cricket",
}
// const age=person.age;
const {...rest} = person;
console.log(rest);

var newPerson={
    // ...person,
    age: 35,
}
console.log(newPerson);
