function player1Roll() {

  var player1Num = Math.random() * 6;

  player1Num = Math.floor(player1Num) + 1;

  // Check random number and display appropriate image

  if (player1Num == 1){

    document.querySelector(".player1-img").setAttribute("src", "images/dice1.png");

  } else if (player1Num == 2) {

    document.querySelector(".player1-img").setAttribute("src", "images/dice2.png");

  } else if (player1Num == 3) {

    document.querySelector(".player1-img").setAttribute("src", "images/dice3.png");

  } else if (player1Num == 4) {

    document.querySelector(".player1-img").setAttribute("src", "images/dice4.png");

  } else if (player1Num == 5) {

    document.querySelector(".player1-img").setAttribute("src", "images/dice5.png");

  } else {

    document.querySelector(".player1-img").setAttribute("src", "images/dice6.png");

  }

    return player1Num;

}

function player2Roll() {

  var player2Num = Math.random() * 6;

  player2Num = Math.floor(player2Num) + 1;

  // Check random number and display appropriate image

  if (player2Num == 1){

    document.querySelector(".player2-img").setAttribute("src", "images/dice1.png");

  } else if (player2Num == 2) {

    document.querySelector(".player2-img").setAttribute("src", "images/dice2.png");

  } else if (player2Num == 3) {

    document.querySelector(".player2-img").setAttribute("src", "images/dice3.png");

  } else if (player2Num == 4) {

    document.querySelector(".player2-img").setAttribute("src", "images/dice4.png");

  } else if (player2Num == 5) {

    document.querySelector(".player2-img").setAttribute("src", "images/dice5.png");

  } else {

    document.querySelector(".player2-img").setAttribute("src", "images/dice6.png");

  }

    return player2Num;

}

// function compareThrows(player1, player2) {
//
//     if (player1 > player2) {
//
//       document.querySelector("h1").innerHTML = "Player 1 wins!";
//
//     } else if (player2 > player1) {
//
//       document.querySelector("h1").innerHTML = "Player 2 wins!";
//
//     } else {
//
//       document.querySelector.("h1").innerHTML = "Draw!";
//
//     }
//
//
// }

var player1Throw = player1Roll();
var player2Throw = player2Roll();

// compareThrows(player1Throw, player2Throw);



// // function compareThrows() {
// //
// //   if (randomNumber1 > randomNumber2) {
// //
// //     document.querySelector("h1").innerHTML = "Player 1 wins!";
// //
// //   } else if (randomNUmber22 > randomNUmber1) {
// //
// //     document.querySelector("h1").innerHTML = "Player 2 wins!";
// //
// //   } else {
// //
// //     document.querySelector.("h1").innerHTML = "Draw!";
// //
// //   }
// //
// // }
//
// var randomNumber1 = player1RandomThrow();
// var randomNumber2 = player2RandomThrow();
