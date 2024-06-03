const objEl = document.querySelector("#object")
const posLabel = document.querySelector("#posLabel")

let intervalID
let movesIndex

let pos = {x:0,y:0}

let moves = [
    {x:0,y:0},
    {x:350,y:350},
    {x:350,y:0},
    {x:0,y:350},
    {x:0,y:0}
]

const showPos = () => {
    posLabel.textContent = `${JSON.stringify(pos)}`
}

const moveToPos = (el, x, y) => {
    if(pos.x == x && pos.y == y) {
        return true
    }
    
    if(pos.x < x) {
        pos.x++
    }else if(pos.x > x) {
        pos.x--
    }

    if(pos.y < y) {
        pos.y++
    } else if(pos.y > y) {
        pos.y--
    }

    el.style.left = `${pos.x}px`
    el.style.top = `${pos.y}px`

    showPos()

    return false
}

const makeMoves = () => {
    const currentMove = moves[movesIndex]
    const moveFinished = moveToPos(objEl, currentMove.x, currentMove.y)

    if(moveFinished) {
        movesIndex +=1
    }

    if(movesIndex == moves.length) {
        clearInterval(intervalID)
    }
}

const start = () => {
    movesIndex = 0
    pos = {x:0,y:0}
    intervalID = setInterval(makeMoves, 5)
}

showPos()