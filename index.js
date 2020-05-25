var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);

var imageNaming1 = "images/dice" + randomNumber1 + ".png";
var imageNaming2 = "images/dice" + randomNumber2 + ".png";

var randomImageSource1 = document.querySelectorAll("img")[0].setAttribute("src", imageNaming1);
var randomImageSource2 = document.querySelectorAll("img")[1].setAttribute("src", imageNaming2);

function diceWinner () {

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
  }
  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "It's a draw!";
  }

}

diceWinner();
