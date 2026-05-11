//! CLOCK
function ClockFunction(){

    //DOM ELEMENT
    let clock = document.querySelector("#clock");
    const now = new Date();
    
    //24HOURS TO 12HOURS
    let hrs = now.getHours() % 12;
    let hrs12 = String(hrs).padStart(2,0);
    
    //MINUTES
    let min = String(now.getMinutes()).padStart(2,0);
    
    //SECONDS
    let sec = String(now.getSeconds()).padStart(2,0); 
    
    //EXPORTING TO HTML
    const currentTIme = (`${hrs12}`+ ":" + `${min}` + ":" + `${sec}`);
    clock.innerText = currentTIme;
}

ClockFunction();

setInterval( ClockFunction, 1000);

//! FORM VALIDATION
//*DOM ELEMENT SELECT
let nm = document.querySelector("#name")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let phone = document.querySelector("#phone")
let url = document.querySelector("#url")
let sumbit = document.querySelector("#sumbit-btn")
let form = document.querySelector("form")
let field = document.querySelectorAll(".field-status-item")
let circle = document.querySelectorAll(".circle")
let validCount = document.querySelector("#valid-count")
let errorCount = document.querySelector("#error-count")
let sts = document.querySelector(".status-text")
let waitingInput = document.querySelector("small")
let status1 = document.querySelector(".status-text1")
let fieldTitle = document.querySelectorAll(".field-status-title")
let inputStatus = document.querySelector(".waiting")

//*NAME INPUT VALIDATION
function validateName(){

    if(nm.value.length <= 2){
        field[0].style.backgroundColor = "var(--error)"
        circle[0].style.backgroundColor = "var(--warn)"

    }
    else{
        field[0].style.backgroundColor = "var(--valid)";
        field[0].style.borderColor = "var(--color-valid)";
        circle[0].style.backgroundColor = "var(--valid-dot)";
        circle[0].style.boxShadow = "var(--valid-dot-shadow)";
        fieldTitle[0].style.color = "var(--color-valid)";
        sts.style.color = "var(--color-valid)";
        sts.innerText = "Valid"
        inputStatus.style.backgroundColor = "var(--valid)";
        inputStatus.style.borderColor = "var(--color-valid)";
        inputStatus.style.color = "var(--color-valid)";
    }
}

nm.addEventListener("input" , validateName);

//*VALIDATE EMAIL
function validateEmail(){

}



//*VALIDATE PASSWORD
function validatePassword(){

}



//*VALIDATE PHONE
function validatePhone(){

}



//*VALIDATE URL
function validateUrl(){

}



//*SUMBIT THE FORM
function validateForm(){
    validateName();
    validateEmail();
    validatePassword();
    validatePhone();
    validateUrl();
}

form.addEventListener("submit",validateForm);