const objEl = document.querySelector("#object")
const posLabel = document.querySelector("#posLabel")

let pos = {x:0,y:0}
let moves = [
    {x:0,y:0},
    {x:350,y:0},
    {x:350,y:350},
    {x:0,y:0},
    {x:0,y:350},
    {x:350,y:0}
]
let movesIndex = 0

const showPos = () => {
    posLabel.textContent = `${JSON.stringify(pos)}`
}

const moveToPos = (el, x, y) => {
    el.style.top = `${y}px` 
    el.style.left = `${x}px`;
    pos = {x,y}
    showPos()
}

const move = () => {
    movesIndex +=1
    const currentMove = moves[movesIndex]
    moveToPos(objEl, currentMove.x, currentMove.y)
}

const currentMove = moves[0]
moveToPos(objEl, currentMove.x, currentMove.y)

showPos()