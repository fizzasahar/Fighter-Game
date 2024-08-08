
var music = document.getElementById('background-music');
var toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', function () {
    if (music.paused) {
        music.play();
        toggleButton.classList.remove('play');
        toggleButton.classList.add('pause');
    } else {
        music.pause();
        toggleButton.classList.remove('pause');
        toggleButton.classList.add('play');
    }
});



var character1 = document.getElementById("character1")
var right1 = 0;
function animation1() {
    console.log(event.keyCode)

    if (event.keyCode === 39 && right1 < 1400) {
        character1.src = "img/bluemary-left.gif"
        right1 = right1 + 10
        character1.style.left = right1 + "px"
        character1.style.height = "45vh"
        character1.style.width = "30vw"
        setTimeout(function () {
            character1.src = "img/bluemary-stand.gif"
            character1.style.height = "30vh"
            character1.style.width = "10vw"
        }, 2000)

    }
    if (event.keyCode === 37 && right1 > 10) {
        character1.src = "img/bluemary-right.gif"
        right1 = right1 - 10
        character1.style.left = right1 + "px"
        character1.style.height = "30vh"
        character1.style.width = "20vw"

        setTimeout(function () {
            character1.src = "img/bluemary-stand.gif"
            character1.style.height = "30vh"
            character1.style.width = "10vw"
        }, 1500)

    }
    if (event.keyCode === 38) {
        character1.src = "img/bluemary-attack.gif"
        character1.style.height = "60vh"
        character1.style.width = "40vw"
        setTimeout(function () {
            character1.src = "img/bluemary-stand.gif"
            character1.style.height = "30vh"
            character1.style.width = "10vw"
        }, 4000)

    }
}








var character2 = document.getElementById("character2")
var right2 = 0;
function animation2() {
    console.log(event.keyCode)

    if (event.keyCode === 34 || event.keyCode === 99 && right2 < 1400) {
        character2.src = "img/chunli-left.gif"
        right2 = right2 + 10
        character2.style.left = right2 + "px"
        character2.style.height = "30vh"
        character2.style.width = "13vw"
        setTimeout(function () {
            character2.src = "img/chunny-stand.gif"
            character2.style.height = "30vh"
            character2.style.width = "10vw"
        }, 2500)

    }
    if (event.keyCode === 35 || event.keyCode === 97 && right2 > 10) {
        character2.src = "img/chunli-left.gif"
        right2 = right2 - 10
        character2.style.left = right2 + "px"
        character2.style.height = "30vh"
        character2.style.width = "13vw"

        setTimeout(function () {
            character2.src = "img/chunny-stand.gif"
            character2.style.height = "30vh"
            character2.style.width = "10vw"
        }, 2500)

    }
    if (event.keyCode === 40 || event.keyCode === 98) {
        character2.src = "img/chunli-attack.gif"
        character2.style.height = "35vh"
        character2.style.width = "35vw"
        setTimeout(function () {
            character2.src = "img/chunny-stand.gif"
            character2.style.height = "30vh"
            character2.style.width = "10vw"
        }, 3000)

    }
}
window.addEventListener("keydown", animation1);
window.addEventListener("keydown", animation2);

