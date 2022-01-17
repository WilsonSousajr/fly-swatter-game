
let width  = 0;
let height = 0;
let lifes = 1;

function adjustGameStageSize(){
    width  = window.innerWidth
    height = window.innerHeight
}

adjustGameStageSize()

console.log(width, height)


function randomPosition(){

    //remove previus fly if any

    if(document.getElementById('fly')){
        document.getElementById('fly').remove()
        
        if(lifes > 3){
           window.location.href = "src/pages/game_over.html"
        }else{
            document.querySelector(`#l${lifes}`).src="./src/imgs/empty_heart.png"
            lifes++
        }
    }

    let positionX = Math.floor(Math.random() * width) - 90
    let positionY = Math.floor(Math.random() * height) - 90

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    console.log(positionX, positionY)

//Create the html element

    let fly = document.createElement('img')

    fly.src = "./src/imgs/fly.png"
    fly.classList.add(randomSize(), randomSide())
    
    fly.style.left = `${positionX}px`
    fly.style.top = `${positionY}px`
    fly.style.position = 'absolute'
    fly.id = 'fly'

    fly.addEventListener("click", function(){
        this.remove()
    })

    document.body.appendChild(fly)

}



function randomSize(){
    let _class = Math.floor(Math.random() * 3)

    if( _class === 0 )
    {
        return 'fly1'
    }
    else if( _class === 1 )
    {
        return 'fly2'
    }
    else if( _class === 2 )
    {
        return 'fly3'
    }

    console.log(_class)
}

function randomSide(){
    let side = Math.floor(Math.random() * 2)

    if(side === 0 )
    {
        return 'sideA'
    }
    else if( side === 1 )
    {
        return 'sideB'
    }
}

window.onload = () => {
    document.body.appendChild(fly)
    
    document.body.onresize = () => {
        adjustGameStageSize()
    }
}


