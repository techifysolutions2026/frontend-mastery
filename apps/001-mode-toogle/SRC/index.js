//! DOM SELECTION
const mainBtn = document.querySelector(".power-btn");
const mainObject = document.querySelector(".bulb");
const titleHeader = document.querySelector(".title-header");
const dotYellow = document.querySelector(".yellow-dot");
const dotRed = document.querySelector(".red-dot");
const leftSidebar = document.querySelectorAll(".power-stats");
const textColor = document.querySelectorAll(".text")
const breakLine = document.querySelectorAll(".breakline")
const clockTime = document.querySelector("#current-clock")
const dateTime = document.querySelector(".datetime")

//!IMMEDIATE FUNCITON
todayDate();
clock();
setInterval(clock, 1000)

//! TOOGLE FUNCTION

let isPowered = false;

function mainFunction(){

    if(isPowered === false){
        mainObject.style.backgroundColor = "var(--warn)"
        mainObject.style.boxShadow = "0 0 30px gold"
        titleHeader.style.color = "var(--accent)"
        dotYellow.style.boxShadow = "0 0 10px yellow"
        dotYellow.style.backgroundColor = "var(--warn)"
        dotYellow.style.animation = "glowup 3s infinite forwards"
        dotRed.style.boxShadow = "0 0 10px red"
        dotRed.style.backgroundColor = "var(--danger)"
        dotRed.style.animation = "glowup 3s infinite forwards"

        leftSidebar.forEach(sidebar => {
            sidebar.style.borderLeft = "2px solid var(--accent)";
        })

        textColor.forEach(text => {
            text.style.color = "var(--text-bright)"
        })

        breakLine.forEach(line => {
            line.style.backgroundColor = "var(--accent)";
        })

        clockTime.style.color = "var(--text-bright)";

        dateTime.style.color = "var(--text-bright)";

        isPowered = true;
    }
    else{
        mainObject.style.backgroundColor = "var(--off-accent)"
        mainObject.style.boxShadow = "none"
        titleHeader.style.color = "var(--off-accent)"
        dotYellow.style.boxShadow = "none"
        dotYellow.style.backgroundColor = "var(--off-accent)"
        dotYellow.style.animation = "none"
        dotRed.style.boxShadow = "none"
        dotRed.style.backgroundColor = "var(--off-accent)"
        dotRed.style.animation = "none"

        leftSidebar.forEach(sidebar => {
            sidebar.style.borderLeft = "none";
        })

        textColor.forEach(text => {
            text.style.color = "var(--text-dim)"
        })

        breakLine.forEach(line => {
            line.style.backgroundColor = "var(--off-accent)";
        })

        clockTime.style.color = "var(--text-dim)";

        dateTime.style.color = "var(--text-dim)";

            isPowered = false;
    }
}

mainBtn.addEventListener("click", mainFunction)

//!CLOCK FUNCTION
function clock(){

    const now = new Date();

    const hours = String(now.getHours()).padStart(2, 0)
    const minutes = String(now.getMinutes()).padStart(2, 0)
    const seconds = String(now.getSeconds()).padStart(2, 0)
    
    clockTime.innerText = (`${hours}` + ":" + `${minutes}` + ":" + `${seconds}`)
}

//!DATE FUNCTION
function todayDate(){

    const now = new Date();

    const days = ["Sunday","Monday","Tuesday","Wednasday","Thursday","Friday","Saturday"];
    const day = days[now.getDay()];

    const date = String(now.getDate()).padStart(2, 0)

    const mon = ["JAN", "FEB" ,"MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]   
    const month = mon[now.getMonth()]

    const year = String(now.getFullYear()).padStart(2, 0)
    
    dateTime.innerText = (`${day}` + " " + `${date}` + " " + `${month}` + " " + `${year}`)
}