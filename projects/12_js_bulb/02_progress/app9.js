var myImage = document.getElementById('myImage')
var lampeAlert = document.getElementById('lampeAlert')
var container = document.querySelector(".container")

function bulb(status) {
    var alert = document.createElement('div')
    alert.classList.add('alert')
    alert.classList.add('mt-4')

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

    container.appendChild(alert)

    setTimeout(function() {
        alert.remove()
    }, 2000)
}


{/* <div id="lampeAlert" class="alert alert-primary mt-4" role="alert">
    Die Lampe ist aus
</div> */}