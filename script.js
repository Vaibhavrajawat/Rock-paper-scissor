let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
});

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function playGame(playerMove) {
  let pcMove = computerMove();
  let result = "";

  if (playerMove === "Rock") {
    if (pcMove === "Rock") {
      result = "Tie";
    } else if (pcMove === "Paper") {
      result = "You Lose";
    } else if (pcMove === "Scissors") {
      result = "You win";
    }
  } else if (playerMove === "Paper") {
    if (pcMove === "Rock") {
      result = "You win";
    } else if (pcMove === "Paper") {
      result = "Tie";
    } else if (pcMove === "Scissors") {
      result = "You Lose";
    }
  } else if (playerMove === "Scissors") {
    if (pcMove === "Rock") {
      result = "You Lose";
    } else if (pcMove === "Paper") {
      result = "You win";
    } else if (pcMove === "Scissors") {
      result = "Tie";
    }
  }

  if (result === "You win") {
    score.wins += 1;
  } else if (result === "You Lose") {
    score.losses += 1;
  } else if (result === "Tie") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

  finalwin(score);
}

function finalwin() {
  if (score.wins >= 5) {
    alert("You Won this game");
  } else {
    playGame();
  }
}

function computerMove() {
  let pcMove;
  let randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    pcMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    pcMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
    pcMove = "Scissors";
  }
  return pcMove;
}
