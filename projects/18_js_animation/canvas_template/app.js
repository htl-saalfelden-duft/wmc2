const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

let intervalID
let movesIndex

const stepX = 2
const stepY = 2

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

const moveToPos = (x, y) => {
    if(pos.x == x && pos.y == y) {
        return true
    }
    
    if(pos.x < x) {
        pos.x += stepX
    } else if(pos.x > x) {
        pos.x -= stepX
    }

    if(pos.y < y) {
        pos.y += stepY
    } else if(pos.y > y) {
        pos.y -= stepY
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawRect(pos.x, pos.y, ctx)

    showPos()
}

const makeMoves = () => {
    const currentMove = moves[movesIndex]
    const moveFinished = moveToPos(currentMove.x, currentMove.y)

    if(moveFinished) {
        movesIndex +=1
    }

    if(movesIndex == moves.length) {
        cancelAnimationFrame(intervalID)
    }

    intervalID = requestAnimationFrame(makeMoves)
}

const drawRect = (x, y, ctx) => {
    ctx.beginPath()
    ctx.rect(x, y, 50, 50)
    ctx.fillStyle = 'red'
    ctx.fill()
}

const start = () => {
    movesIndex = 0
    pos = {x:0,y:0}
    intervalID = requestAnimationFrame(makeMoves)
}

drawRect(pos.x, pos.y, ctx)