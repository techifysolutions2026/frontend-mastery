//! NUMBER CALCULATOR LOGIC

//*INPUT AND OUTPUT DISPLAY
let mainInputDisplay = document.querySelector("#main-input-tag")

//*MAIN DIV OF THE KEYPAD
const mainKeypad = document.querySelector(".main-number-div")

//*FUNCTION
mainKeypad.addEventListener("click", (event) => {
    let keyname = event.target.innertext;

    mainInputDisplay.innertext = keyname;
})
