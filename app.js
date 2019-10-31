const tatle = document.querySelector("#tatle");

document.addEventListener("mousemove", getMouse);

const tatleMove = { x: 0, y: 0 };

setInterval(followMouse, 50);

const mouse = { x: 0, y: 0 }; //mouse.x, mouse.y

let dir = "right";
function getMouse(e) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
    //Checking directional change
    if (mouse.x > tatleMove.x) {
        dir = "right";
    } else {
        dir = "left";
    }
}

function followMouse() {
    //1. find distance X , distance Y
    const distX = mouse.x - tatleMove.x;
    const distY = mouse.y - tatleMove.y;
    //Easing motion
    //Progressive reduction of distance 
    tatleMove.x += distX / 5;
    tatleMove.y += distY / 2;

    tatle.style.left = tatleMove.x + "px";
    tatle.style.top = tatleMove.y + "px";


    //Apply css class 
    if (dir == "right") {
        tatle.setAttribute("class", "right");
    } else {
        tatle.setAttribute("class", "left");
    }

}

const beforemoon = document.querySelector(".beforemoon");
const aftermoon = document.querySelector(".aftermoon");
const reload = document.querySelector(".reload");

const theEnd = document.querySelector('#theEnd')
const songOfTime = document.querySelector('#songOfTime')
const songOfHealing = document.querySelector('#songOfHealing')

let timeleft = 15;

const timer = setInterval(() => {
    timeleft--;
    document.querySelector("#countdown").innerHTML = timeleft;

    if (timeleft <= 0) {
        clearInterval(timer);
        document.querySelector("#countdown").innerHTML = '0';
        setTimeout(() => {
            theEnd.pause()
            beforemoon.style.display = 'none'
            aftermoon.style.display = 'block'
            songOfHealing.play()
        }, 1000);


    }
}, 1000);
window.addEventListener('load', () => {

    theEnd.play()
})

reload.addEventListener('click', () => {
    location.reload()
    songOfHealing.pause()
})
// window.onload = () => {
//     setTimeout(() => {

//     }, 4000);
// }
// const work = () => {
//     theEnd.play()
// }
// if (document.readyState == 'loading') {
//     // loading yet, wait for the event
//     document.addEventListener('DOMContentLoaded', work);
// } else {
//     // DOM is ready!
//     work();
// }
// document.addEventListener("DOMContentLoaded", () => { theEnd.play() })

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    theEnd.pause()
    clearInterval(timer)
    document.querySelector("#countdown").innerHTML = timeleft
    songOfTime.play()
    setTimeout(() => {
        location.reload()

    }, 10000);

});

