const prompt = require("prompt-sync")();
// window.location.href = "https://www.google.com";

let number;
number = prompt("Enter a number: ");

checker(number);
function checker(number) {
  while (number < 4) {
    number = prompt("Try again !");
    number = Number.parseInt(number);
  }

  location.href = "https://www.google.com";
  
}
