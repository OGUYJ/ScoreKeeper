const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display"),
}

const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display"),
}

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");

let winningScore = 5;
let gameOver = false;

function updateScores (player, opponent){
    if (!gameOver){
        player.score +=1
        if(player.score === winningScore){
            gameOver = true
            player.display.classList.add("winner")
            opponent.display.classList.add("loser")
        }
        player.display.textContent = player.score
    }
}

p1.button.addEventListener("click", function(){
    updateScores(p1,p2)
})

p2.button.addEventListener("click", function(){
    updateScores(p2,p1)
})


winningScoreSelect.addEventListener("change", function(){
    winningScore = parseInt(this.value)
    reset()
})

resetButton.addEventListener("click", reset)

function reset(){
    for (let p of [p1, p2]){
    gameOver = false;
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("winner", "loser")
    }
}
