//! DOM SELECTION
const mainBtn = document.querySelector(".power-btn");
const mainObject = document.querySelector(".bulb");



//! FUNCTION
function mainFunction(){
    mainObject.style.backgroundColor = "var(--warn)"
    mainObject.style.boxShadow = "0 0 30px gold"
}

mainBtn.addEventListener("click", mainFunction)