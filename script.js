const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset")
const winningScoreSelect = document.querySelector("#playTo")

let p1Score = 0;
let p2Score = 0;

const p1Display = document.querySelector("#p1Display")
const p2Display = document.querySelector("#p2Display")

let winningScore = 5;
let gameOver = false;

p1Button.addEventListener("click", function(){
    if (!gameOver){
        p1Score +=1
        if(p1Score === winningScore){
            gameOver = true
            p1Display.classList.add("winner")
            p2Display.classList.add("loser")
        }
        p1Display.textContent = p1Score
    }
})


p2Button.addEventListener("click", function(){
    if (!gameOver){
        p2Score +=1
        if(p2Score === winningScore){
            gameOver = true
            p1Display.classList.add("loser")
            p2Display.classList.add("winner")
        }
        p2Display.textContent = p2Score
    }
})


winningScoreSelect.addEventListener("change", function(){
    winningScore = parseInt(this.value)
    reset()
})

resetButton.addEventListener("click", reset)

function reset(){
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner", "loser")
    p2Display.classList.remove("winner", "loser")
}
