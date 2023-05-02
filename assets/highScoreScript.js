// link to high score HTML 

// ===============================

var input = document.getElementById("text");
var highscore = localStorage.getItem("highscore");

input.textContent = highscore;
document.getElementById("highscore").classList.remove("hide");

// display high scores^^^^