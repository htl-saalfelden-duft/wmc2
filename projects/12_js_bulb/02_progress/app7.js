var myImage = document.getElementById('myImage')
var statusText = document.getElementById('status')

function bulb(status) {
    if(status == 'on') {
        myImage.src='./images/pic_bulbon.gif'
        statusText.innerHTML = "Das Licht ist an"
        statusText.className = "text-warning"
    } else {
        myImage.src='./images/pic_bulboff.gif'
        statusText.innerHTML = "Das Licht ist aus"
        statusText.className = "text-primary"        
    }
}
