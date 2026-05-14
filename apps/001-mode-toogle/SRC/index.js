//! DOM SELECTION
const mainBtn = document.querySelector(".power-btn");
const mainObject = document.querySelector(".bulb");
const mainObject2 = document.querySelector(".horizontal-line")
const mainObject3 = document.querySelector(".bulb-filament")
const titleHeader = document.querySelector(".title-header");
const dotYellow = document.querySelector(".yellow-dot");
const dotRed = document.querySelector(".red-dot");
const leftSidebar = document.querySelectorAll(".power-stats");
const textColor = document.querySelectorAll(".text")
const breakLine = document.querySelectorAll(".breakline")
const sideline = document.querySelectorAll(".sideline")
const sideline1 = document.querySelectorAll(".sideline1")
const clockTime = document.querySelector("#current-clock")
const dateTime = document.querySelector(".datetime")
const header = document.querySelector("header")
const footer = document.querySelector("footer")
const dotText = document.querySelectorAll(".dot-text")
const leftSidebarBorder = document.querySelector(".left-sidebar")
const rightSidebarBorder = document.querySelector(".right-sidebar")
const sidebarTitle = document.querySelectorAll(".left-sidebar-title")
const sidebarTitleID = document.querySelectorAll("#left-sidebar-title")
const plusIcon = document.querySelectorAll(".plus-icon")
const extraInformation = document.querySelector(".extra-information");
const extraInformation2 = document.querySelector(".extra-information-title");
const titleFooter = document.querySelectorAll(".title-footer")
let valuesDisplay = document.querySelectorAll(".text");
const audio = new Audio('resource/audio.wav');

//! COUNTUP ANIMATION FUNCTIONd
function countupAnimation(element, targetValue, duration = 600) {
    const isNumeric = /^[\d.]+/.test(targetValue.toString());
    if (!isNumeric) return;

    element.style.animation = "none";
    setTimeout(() => {
        element.style.animation = "countup-pulse 0.6s ease-out";
    }, 10);

    const numericPart = parseFloat(targetValue.toString());
    const start = 0;
    const startTime = performance.now();

    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(start + (numericPart - start) * progress);

        element.innerText = current + (targetValue.toString().includes(" ") ? " " + targetValue.toString().split(" ")[1] : "");

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            element.innerText = targetValue;
        }
    }

    requestAnimationFrame(animate);
}

//!CLOCK FUNCTION
function clock(){

    const now = new Date();

    const hours = now.getHours() % 12;
    const hrs12 = String(hours).padStart(2,0)

    const minutes = String(now.getMinutes()).padStart(2, 0)

    const seconds = String(now.getSeconds()).padStart(2, 0)
    
    clockTime.innerText = (`${hrs12}` + ":" + `${minutes}` + ":" + `${seconds}`)
}

clock();
setInterval(clock, 1000)

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

todayDate();

//! TOOGLE FUNCTION

let isPowered = false;

function mainFunction(){

    audio.currentTime = 0;
    audio.play();

    if(isPowered === false){
        mainObject.classList.add("active");
        mainObject2.style.backgroundColor = "var(--accent)";
        mainObject3.classList.add("active")
        titleHeader.style.color = "var(--accent)"
        dotYellow.style.boxShadow = "0 0 10px yellow"
        dotYellow.style.backgroundColor = "var(--warn)"
        dotYellow.style.animation = "glowup 3s infinite forwards"
        dotRed.style.boxShadow = "0 0 10px red"
        dotRed.style.backgroundColor = "var(--danger)"
        dotRed.style.animation = "glowup 3s infinite forwards"
        header.style.borderBottom = "var(--border3)"
        footer.style.borderTop = "var(--border3)"
        rightSidebarBorder.style.borderLeft = "var(--border3)";
        leftSidebarBorder.style.borderRight = "var(--border3)";
        mainBtn.style.backgroundColor = "var(--power-btn)"
        mainBtn.style.border = "var(--power-btn-border)"
        extraInformation.style.borderColor = "var(--accent)"
        extraInformation2.innerText = "ACTIVE";
        extraInformation2.style.color = "var(--accent)";
        countupAnimation(valuesDisplay[0], "200 V");
        countupAnimation(valuesDisplay[1], "1.4 A");
        countupAnimation(valuesDisplay[2], "450 W");
        countupAnimation(valuesDisplay[3], "1.71");
        countupAnimation(valuesDisplay[4], "12.4 hz");
        
        plusIcon.forEach(icon => {
            icon.style.color = "var(--accent3)"
        })

        sidebarTitle.forEach(title => {
            title.style.color = "var(--accent3)"
        })

        sidebarTitleID.forEach(title => {
            title.style.color = "var(--accent3)"
        })
        
        dotText.forEach(dot => {
            dot.style.color = "var(--accent2)";
        })

        leftSidebar.forEach(sidebar => {
            sidebar.style.borderLeft = "4px solid var(--accent)";
        })

        textColor.forEach(text => {
            text.style.color = "var(--text-bright)"
        })
        
        breakLine.forEach(line => {
            line.style.backgroundColor = "var(--accent)";
        })

        sideline.forEach(line => {
            line.style.backgroundColor = "var(--accent)";
        })

        sideline1.forEach(line => {
            line.style.backgroundColor = "var(--accent)";
        })

        titleFooter.forEach(footer => {
            footer.style.color = "var(--accent)";
        })
        
        clockTime.style.color = "var(--text-bright)";
        
        dateTime.style.color = "var(--text-bright)";

        isPowered = true;

    }
    else{
        mainObject.classList.remove("active");
        mainObject2.style.backgroundColor = "var(--off-accent)"
        mainObject3.classList.remove("active")
        titleHeader.style.color = "var(--off-accent)"
        dotYellow.style.boxShadow = "none"
        dotYellow.style.backgroundColor = "var(--off-accent)"
        dotYellow.style.animation = "none"
        dotRed.style.boxShadow = "none"
        dotRed.style.backgroundColor = "var(--off-accent)"
        dotRed.style.animation = "none"
        header.style.borderBottom = "var(--border4)"
        footer.style.borderTop = "var(--border4)"
        rightSidebarBorder.style.borderLeft = "var(--border4)"
        leftSidebarBorder.style.borderRight = "var(--border4)"
        mainBtn.style.backgroundColor = "var(--off-accent)"
        mainBtn.style.border = "20px solid var(--border)"
        extraInformation.style.borderColor = "var(--border)";
        extraInformation2.innerText = "STANDBY";
        extraInformation2.style.color = "var(--off-accent)";
        countupAnimation(valuesDisplay[0], "000 V");
        countupAnimation(valuesDisplay[1], "0.0 A");
        countupAnimation(valuesDisplay[2], "000 W");
        countupAnimation(valuesDisplay[3], "0.00");
        countupAnimation(valuesDisplay[4], "00.0 hz");

        plusIcon.forEach(icon => {
            icon.style.color = "var(--off-accent)"
        })
        
        sidebarTitle.forEach(title => {
            title.style.color = "var(--off-accent)"
        })

        sidebarTitleID.forEach(title => {
            title.style.color = "var(--off-accent)"
        })
        
        dotText.forEach(dot => {
            dot.style.color = "var(--off-accent)";
        })

        leftSidebar.forEach(sidebar => {
            sidebar.style.borderLeft = "4px solid var(--off-accent)";
        })

        textColor.forEach(text => {
            text.style.color = "var(--text-dim)"
        })

        breakLine.forEach(line => {
            line.style.backgroundColor = "var(--off-accent)";
        })

        sideline.forEach(line => {
            line.style.backgroundColor = "var(--off-accent)";
        })

        sideline1.forEach(line => {
            line.style.backgroundColor = "var(--off-accent)";
        })

        titleFooter.forEach(footer => {
            footer.style.color = "var(--off-accent)";
        })

        clockTime.style.color = "var(--text-dim)";

        dateTime.style.color = "var(--text-dim)";

        isPowered = false;
    }
}

mainBtn.addEventListener("click", mainFunction)

window.addEventListener("keydown", (event) => {
    if(event.code === 'Space'){
        event.preventDefault();

        mainFunction();
    }
})