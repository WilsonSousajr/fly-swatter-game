let start = document.querySelector("#start")
let level;


start.addEventListener("click", function(){
    startGame()
})

function startGame(){

    level = document.querySelector("#level").value
    if(level === ''){
        alert("Select a level to start the game")
        return false;
    }
    window.location.href = `/src/pages/game.html?${level}`
}


