'use strict';
/*
//console.log(document.querySelector('.between'));
let my = document.querySelector('.message').textContent;
console.log(my);
*/

//lecture 71
//console.log(document.querySelector('.message'));
/*
document.querySelector('.message').textContent = 'Correct Number!';
console.log(
  (document.querySelector('.message').textContent = 'Correct Number!')
);
// console.log((document.querySelector('.message').textContent = 'Correct'));

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
// lecture 73 74
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let nam = 'Guest';

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  const name = document.querySelector('.nam').value;
  if (!name) {
    nam = 'Guest';
  } else {
    nam = name;
  }
  console.log(name, typeof name);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('No number');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;

      document.querySelector('.highscore').textContent =
        nam + ' - ' + highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!📈' : 'Too Low📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost');
      document.querySelector('.score').textContent = 0;
    }
  }
  //  else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High!📈';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low!📉';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  //location.reload();
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';
  document.querySelector('.nam').value = 'Guest';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
