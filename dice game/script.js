'use strict';
/*

roll dice  -> a function ( a button which calls the function when clicked through eventlistener) 

generating dice number with Math.random
current number = dice number
then display that number on the screen column of that particular user

if dice number is one , then current number is turned 0 and player is switched
else number is added to current number , and then new current number is displayed 


hold -> a function ( a button which calls the function when clicked through eventlistener) 

current number is added to user score 

if user score is now greater or equal to 100 then that player wins
else current number is turned 0 and player is switched


reset game -> a function ( a button which calls the function when clicked through eventlistener) 

users scores , current number , in fact every score is turned 0
set player 1 a starting point


when we switch user its just changes current--0 and score--0 to current--1 and score--1

that means now current--0 is turned 0 and score--0 does not change 
and now 
roll dice functions works for another player 

*/

// -----------------------------------------------------------------------------------------------

let diceNumber = 0;
let currentScore = 0;
let userScore0 = 0;
let userScore1 = 0;
let playerNumber = 1;
let winnerDelcared = 0;

document.querySelector('.dice').classList.add('hidden');

const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const players = document.querySelectorAll('.player');

score0.textContent = 0;
score1.textContent = 0;

// BREAK -----------------------------------------------------------------------------------------------

const diceRoll = function () {
  if (winnerDelcared === 0) {
    if (!(playerNumber % 2 === 0)) {
      players[0].classList.add('active');
      let randomNumber = Math.trunc(Math.random() * 6 + 1);
      diceNumber = randomNumber;
      document.querySelector('.dice').classList.remove('hidden');
      document.querySelector('.dice').src = `dice-${diceNumber}.png`;

      if (diceNumber > 1) {
        currentScore += diceNumber;
        current0.textContent = currentScore;
      } else {
        currentScore = 0;
        current0.textContent = currentScore;
        playerNumber++;
        players[0].classList.remove('active');
        if (!players[1].classList.contains('active')) {
          players[1].classList.add('active');
        }
      }
    } else {
      players[1].classList.add('active');
      let randomNumber = Math.trunc(Math.random() * 6 + 1);
      diceNumber = randomNumber;
      document.querySelector('.dice').classList.remove('hidden');
      document.querySelector('.dice').src = `dice-${diceNumber}.png`;

      if (diceNumber > 1) {
        currentScore += diceNumber;
        current1.textContent = currentScore;
      } else {
        currentScore = 0;
        current1.textContent = currentScore;
        playerNumber++;
        players[1].classList.remove('active');
        if (!players[0].classList.contains('active')) {
          players[0].classList.add('active');
        }
      }
    }
  }
};

// BREAK-----------------------------------------------------------------------------------------------

const hold = function () {
  if (playerNumber % 2 !== 0) {
    userScore0 += currentScore;
    score0.textContent = userScore0;
    currentScore = 0;
    current0.textContent = currentScore;

    if (score0.textContent >= 100) {
      winnerDelcared = 9;
      console.log(winnerDelcared);
      document.querySelector('.player--0').classList.remove('active');
      document.querySelector('.player--0').classList.add('player--winner');
    } else {
      playerNumber++;
      players[0].classList.remove('active');
      if (!players[1].classList.contains('active')) {
        players[1].classList.add('active');
      }
    }
  } else {
    userScore1 += currentScore;
    score1.textContent = userScore1;
    currentScore = 0;
    current1.textContent = currentScore;

    if (score1.textContent >= 100) {
      winnerDelcared = 9;
      console.log(winnerDelcared);

      document.querySelector('.player--1').classList.remove('active');
      document.querySelector('.player--1').classList.add('player--winner');
    } else {
      playerNumber++;
      players[1].classList.remove('active');
      if (!players[0].classList.contains('active')) {
        players[0].classList.add('active');
      }
    }
  }
};

// BREAK-----------------------------------------------------------------------------------------------

const newGame = function () {
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  playerNumber = 1;
  userScore0 = 0;
  userScore1 = 0;
  winnerDelcared = 0;
  for (let i = 0; i < players.length; i++) {
    players[i].classList.remove('player--winner');
  }
  document.querySelector('.dice').classList.add('hidden');
};

// -----------------------------------------------------------------------------------------------

// buttons --------------------
document.querySelector('.btn--roll').addEventListener('click', diceRoll);
document.querySelector('.btn--hold').addEventListener('click', hold);
document.querySelector('.btn--new').addEventListener('click', newGame);
// buttons ---------------------
