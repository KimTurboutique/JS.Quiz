// link to high score HTML 

// ===============================

let highScores= JSON.parse(localStorage.getItem("highscore"))||[];
highScores.sort(function(a,b){
    return b.score-a.score
})
for (i=0; i<highScores.length; i++){
let liEl=document.createElement("li");
liEl.textContent=highScores[i].initials+" - "+highScores[i].score
document.querySelector("ol").appendChild(liEl)
}

// display high scores^^^^