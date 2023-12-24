const prompt = require('prompt-sync')();
let n = prompt("Enter a number: ");
let arr =[];
let storing = []

factorialUsingReduce();

function factorialUsingReduce(){
for(let i = 1;i<=n;i++){
  arr[i-1] = i;
  
}

let arr2 = arr.reduce((acc,current) => {
storing.push(acc*current);
return acc * current;

})
console.log(arr2);
  console.log(storing);
}

