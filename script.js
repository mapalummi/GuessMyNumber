'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = (document.querySelector('.score').textContent = 20);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);




  // CHALLENGE EXERCISE
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;


    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
  });




  //   When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '↗️ Too high!';
    } else {
      document.querySelector('.message').textContent = '😬 You lost the game';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '↘️ Too low!';
    } else {
      document.querySelector('.message').textContent = '😬 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
