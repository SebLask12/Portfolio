'use strict';
let activePlayer = 0;
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0Act = player0.classList.contains('player--active');
const player1Act = player1.classList.contains('player--active');

//Start gry
score0El.textContent = 0;
score1El.textContent = 0;
let currScore = 0;
let playing = true;
const scores = [0, 0];

diceEl.classList.add('hidden');

//Zmiana activePlayera
const changePlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  console.log(activePlayer);
};

const holdPoitns = function () {
  if (playing) {
    scores[activePlayer] += currScore;
    currScore = 0;
    document.querySelector(
      `#score--${activePlayer}`
    ).textContent = `${scores[activePlayer]}`;
    document.querySelector(
      `#current--${activePlayer}`
    ).textContent = `${currScore}`;
  }
  if (scores[activePlayer] >= 100) {
    playing = false;
    diceEl.classList.add('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
  }
};

const newGame = function () {
  scores[1] = 0;
  scores[0] = 0;
  currScore = 0;
  diceEl.classList.add('hidden');
  playing = true;
  document.querySelector(`#score--${0}`).textContent = `${scores[0]}`;
  document.querySelector(`#score--${1}`).textContent = `${scores[1]}`;
  document.querySelector(
    `#current--${activePlayer}`
  ).textContent = `${currScore}`;
  if (
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.contains('player--winner')
  ) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--active');
    if (activePlayer === 1) {
      changePlayer();
    }
  }
  if (activePlayer === 1) {
    changePlayer();
  }
};

//Losowanie
btnRoll.addEventListener('click', function () {
  if (playing) {
    let rollDice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${rollDice}.png`;
    if (rollDice !== 1) {
      currScore += rollDice;
      document.querySelector(
        `#current--${activePlayer}`
      ).textContent = `${currScore}`;
    } else {
      changePlayer();
    }
  }
});

btnHold.addEventListener('click', holdPoitns);
btnNew.addEventListener('click', newGame);
