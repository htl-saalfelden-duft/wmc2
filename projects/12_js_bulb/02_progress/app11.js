var myImage = document.getElementById('myImage')
var lampeAlert = document.getElementById('lampeAlert')
var container = document.querySelector(".container")
var btnOn = document.querySelector('#btnOn')
var btnOff = document.querySelector('#btnOff')

var url = 'http://10.0.0.17'

btnOn.addEventListener('click', async function() {
    bulb('on')
    showAlert('on')

    await fetch(`${url}?led=on`)
})

btnOff.addEventListener('click', async function() {
    bulb('off')
    showAlert('off')

    await fetch(`${url}?led=off`)
})

function bulb(status) {
    if(status == 'on') {
        myImage.src='./images/pic_bulbon.gif'
    }
    if(status == 'off') {
        myImage.src='./images/pic_bulboff.gif'
    }
}

function showAlert(status) {
    var alert = document.createElement('div')
    alert.classList.add('alert')
    alert.classList.add('mt-4')

    if(status == 'on') {
        alert.classList.add('alert-warning')
        alert.innerHTML = "Die Lampe ist an"
    }
    if(status == 'off') {
        alert.classList.add('alert-primary')
        alert.innerHTML = "Die Lampe ist aus"
    }


    container.appendChild(alert)

    setTimeout(function() {
        alert.remove()
    }, 2000)
}


/* <div id="lampeAlert" class="alert alert-primary mt-4" role="alert">
    Die Lampe ist aus
</div> */