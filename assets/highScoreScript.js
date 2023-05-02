// link to high score HTML 

// ===============================

var pTag = document.getElementById("text");
var highscore = localStorage.getItem("highscore");

pTag.textContent = highscore;