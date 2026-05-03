//! DOM SELECTION
const mainBtn = document.querySelector(".power-btn");
const mainObject = document.querySelector(".bulb");
const titleHeader = document.querySelector(".title-header");
const dotYellow = document.querySelector(".yellow-dot");
const dotRed = document.querySelector(".red-dot");
const leftSidebar = document.querySelectorAll(".power-stats");
const textColor = document.querySelectorAll(".text")

//! TOOGLE FUNCTION
function mainFunction(){
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
}

console.log(textColor)

mainBtn.addEventListener("click", mainFunction)