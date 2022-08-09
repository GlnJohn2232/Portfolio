'use strict';
console.log(document.querySelector(`.message`).textContent);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector(`.number`).textContent = secretNumber;
document.querySelector(`.again`).addEventListener(`click`, function () {
  document.querySelector(`body`).style.backgroundColor = `#222`;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(`.message`).textContent = `Start guessing`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`.score`).value = 20;
});

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  if (!guess) {
    document.querySelector(`.message`).textContent = `No Number`;
    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `Correct Number!!!`;
    score += 20;
    document.querySelector(`.score`).textContent = score;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).textContent = secretNumber;
    if (score > highscore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }
    // when number guess wrong
  } else if (guess !== secretNumber) {
    if (score > 0) {
      document.querySelector(`.message`).textContent =
        guess > secretNumber ? `Too High` : `Too Low`;
      score--;
      document.querySelector(`.score`).textContent = score;
      document.querySelector(`body`).style.backgroundColor = `red`;
    } else {
      document.querySelector(`.message`).textContent = `You Lost the Game💥`;
    }
  }
});
let highScore = 0;
