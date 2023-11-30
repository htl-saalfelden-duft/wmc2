function bulbOn() {
    document.getElementById('myImage').src='./images/pic_bulbon.gif'
    document.getElementById('status').innerHTML = "Das Licht ist an"
    document.getElementById('status').className = "text-warning"
}

function bulbOff() {
    document.getElementById('myImage').src='./images/pic_bulboff.gif'
    document.getElementById('status').innerHTML = "Das Licht ist aus"
    document.getElementById('status').className = "text-primary"
} 