var myImage = document.getElementById('myImage')
var lampeAlert = document.getElementById('lampeAlert')
var body = document.querySelector("body")

function bulb(status) {
    /* <div id="lampeAlert" class="alert alert-primary" role="alert">
        Die Lampe ist aus
    </div> */
    var alert = document.createElement('div')
    alert.classList.add('alert')
    alert.role = 'alert'

    if(status == 'on') {
        myImage.src='./images/pic_bulbon.gif'
        alert.classList.add('alert-warning')
        alert.innerHTML = "Die Lampe ist an"
    }
    if(status == 'off') {
        myImage.src='./images/pic_bulboff.gif'
        alert.classList.add('alert-primary')
        alert.innerHTML = "Die Lampe ist aus"
    }

    body.appendChild(alert)

    setTimeout(function() {
        alert.remove()
    }, 2000)
}
