
// const prompt = require('prompt-sync')() 
// let player1 = prompt("Player 1 :");
// let player2 = prompt("Player 2 :");

// player1 = player1.toUpperCase();
// player2 = player2.toUpperCase();

let playAgain = true;
function askToPlayAgain(ask) {

  if (ask === true){
    playAgain = true;
  }
  else {
    playAgain = false;
  }
}

while(playAgain){
  
  // const prompt = require('prompt-sync')() 
  let player1 = prompt("Player 1 :");
  let player2 = prompt("Player 2 :");

  player1 = player1.toUpperCase();
  player2 = player2.toUpperCase();


  

SWG(player1, player2);
  
 function SWG(player1, player2){ 
   
   // CLASH
if(player1 == player2 ){
  console.log("Draw");
  console.log("Player 1 : ",player1 );
  console.log("Player 2 : ",player2 );
  
}
  // SNAKE
else if((player1 == "S") && (player2 == "W")) {
console.log(`Player 1 wins  ${player1}`);
  }

else if((player1 == "S") && (player2 == "G")) {

  console.log(`Player 2 wins ${player2}`)

  }

//WATER
  
else if((player1 == "W") && (player2 == "S")) {

console.log(`Player 2 wins ${player2}`)
}

  else if((player1 == "W") && (player2 == "G")) {

  console.log(`Player 2 wins ${player2}`)

}

// GUN
    
else if((player1 == "G") && (player2 == "W")) {

console.log(`Player 1 wins ${player1}`)
}

else if((player1 == "G") && (player2 == "S")) {

console.log(`Player 1 wins ${player1}`)

}

}
  let ask =  confirm("Do you want to play again ?");
  askToPlayAgain(ask);

  
  

}

console.log("GAME OVER.... ")
