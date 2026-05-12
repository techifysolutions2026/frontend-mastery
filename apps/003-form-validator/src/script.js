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

//*BOTH SIDEBAR
let field = document.querySelectorAll(".field-status-item")
let circle = document.querySelectorAll(".circle")
let validCount = document.querySelector("#valid-count")
let errorCount = document.querySelector("#error-count")
let sts = document.querySelector(".status-text")
let waitingInput = document.querySelector("small")
let status1 = document.querySelector(".status-text1")
let fieldTitle =  document.querySelectorAll(".field-status-title")
let progressBar = document.querySelector(".progress-bar")
let progressMeter = document.querySelector("#progress-meter")

//*MAIN SECTION 
let nm = document.querySelector("#name")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let phone = document.querySelector("#phone")
let gender = document.querySelector("#gender")
let sumbit = document.querySelector("#sumbit-btn")
let form = document.querySelector("form")
let inputStatus = document.querySelector(".waiting")
let finalSelection = document.querySelector("small")
let inputStatus2 = document.querySelector(".waiting2")

//*GLOBAL
let valiDationState = {
    nm: false,
    email: false,
    password: false,
    phone: false,
    url: false,
};

//*PROGRESS BAR UPDATE FUNCTION
function upDateProggressBar(){

    let totalField = Object.keys(valiDationState).length;
    let validField = Object.values(valiDationState).filter(val => val === true).length;

    let percentage = (validField/totalField)*100;

    progressBar.style.width = percentage + "%"
    progressBar.style.backgroundColor = "var(--color-valid)"
    progressMeter.innerText = percentage + "%"
}

//*NAME INPUT VALIDATION
function validateName(){

    const val = nm.value.trim();

    if(val === ""){
        field[0].style.backgroundColor = "";
        field[0].style.borderColor = "";
        circle[5].style.backgroundColor = "";
        circle[5].style.boxShadow = "";
        circle[0].style.backgroundColor = "";
        circle[0].style.boxShadow = "";
        fieldTitle[0].style.color = "";
        sts.style.color = "";
        sts.innerText = "Waiting";
        inputStatus.style.backgroundColor = "";
        inputStatus.style.borderColor = "";
        inputStatus.style.color = "";
        nm.style.boxShadow = "";
        nm.style.borderColor = "";
        validCount.innerText = "00"
        validCount.style.color = "";
        errorCount.innerText = "00";
        errorCount.style.color = "";
        status1.style.color = "";
        finalSelection.style.color = "";
        finalSelection.innerText = "Awating Input...";
        inputStatus2.style.color = "";
        valiDationState.nm = false;
        progressMeter.innerText = "0%"
    }
    
    else if(val.length <= 3){
        field[0].style.backgroundColor = "var(--error)";
        field[0].style.borderColor = "var(--color-error)";
        circle[5].style.backgroundColor = "var(--error-dot)";
        circle[5].style.boxShadow = "var(--error-dot-shadow)";
        circle[0].style.backgroundColor = "var(--error-dot)";
        circle[0].style.boxShadow = "var(--error-dot-shadow)";
        fieldTitle[0].style.color = "var(--color-error)";
        sts.style.color = "var(--color-error)";
        sts.innerText = "Error";
        inputStatus.style.backgroundColor = "var(--error)";
        inputStatus.style.borderColor = "var(--color-error)";
        inputStatus.style.color = "var(--color-error)";
        nm.style.boxShadow = "var(--red-glow)";
        nm.style.borderColor = "var(--color-error)";
        validCount.innerText = "00"
        validCount.style.color = "";
        errorCount.innerText = "01"
        errorCount.style.color = "var(--color-error)";
        status1.style.color = "var(--color-error)";
        finalSelection.style.color = "var(--color-error)";
        finalSelection.innerText = "The Name Should Be 4 Charc Long";
        inputStatus2.style.color = "var(--color-error)";
        valiDationState.nm = false;
        progressMeter.innerText = "0%"
    }
    
    else{
        field[0].style.backgroundColor = "var(--valid)";
        field[0].style.borderColor = "var(--color-valid)";
        circle[5].style.backgroundColor = "var(--valid-dot)";
        circle[5].style.boxShadow = "var(--valid-dot-shadow)";
        circle[0].style.backgroundColor = "var(--valid-dot)";
        circle[0].style.boxShadow = "var(--valid-dot-shadow)";
        fieldTitle[0].style.color = "var(--color-valid)";
        sts.style.color = "var(--color-valid)";
        sts.innerText = "Valid";
        inputStatus.style.backgroundColor = "var(--valid)";
        inputStatus.style.borderColor = "var(--color-valid)";
        inputStatus.style.color = "var(--color-valid)";
        nm.style.boxShadow = "var(--green-glow)";
        nm.style.borderColor = "var(--color-valid)";
        validCount.innerText = "01"
        validCount.style.color = "var(--color-valid)";
        errorCount.innerText = "00";
        errorCount.style.color = "";
        status1.style.color = "var(--color-valid)";
        finalSelection.style.color = "var(--color-valid)";
        finalSelection.innerText = "Valid";
        inputStatus2.style.color = "var(--color-valid)";
        valiDationState.nm = true;
    }

    upDateProggressBar();
}

nm.addEventListener("input" , validateName);

//*VALIDATE EMAIL
function validateEmail(){

    let val = email.value.trim();

    if(val.length <= 8){
        
    }

}

email.addEventListener("input", validateEmail);

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