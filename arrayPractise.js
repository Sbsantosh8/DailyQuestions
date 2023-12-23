

const prompt = require('prompt-sync')() // makes you prompt run in node.js
let number = prompt("enter a number?");
number = Number.parseInt(number);


let arr = [];

addingZeroArray(number);
function addingZeroArray (number){

while(number!==0){

        arr.unshift(number);

         number = prompt("Enter a number ?");
       number = Number.parseInt(number);
    }
    arr.unshift(number);
    
}

console.log(arr);
