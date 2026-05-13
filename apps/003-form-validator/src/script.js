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

//?BOTH SIDEBAR
let field = document.querySelectorAll(".field-status-item")
let circle = document.querySelectorAll(".circle")
let sts = document.querySelectorAll(".status-text")
let waitingInput = document.querySelector("small")
let status1 = document.querySelectorAll(".status-text1")
let fieldTitle =  document.querySelectorAll(".field-status-title")
let progressBar = document.querySelector(".progress-bar")

//?MAIN SECTION 
let nm = document.querySelector("#name")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let phone = document.querySelector("#phone")
let gender = document.querySelector("#gender")
let sumbit = document.querySelector("#sumbit-btn")
let form = document.querySelector("form")
let inputStatus = document.querySelectorAll(".waiting")
let finalSelection = document.querySelectorAll("small")
let inputStatus2 = document.querySelectorAll(".waiting2");

//?GLOBAL
let valiDationState = {
    nm: false,
    email: false,
    password: false,
    phone: false,
    url: false,
};
let validCount = document.querySelector("#valid-count")
let errorCount = document.querySelector("#error-count")

//*PROGRESS BAR UPDATE FUNCTION
function upDateProggressBar(){

    let totalField = Object.keys(valiDationState).length;
    let validField = Object.values(valiDationState).filter(val => val === true).length;

    let percentage = (validField/totalField)*100;

    progressBar.style.width = percentage + "%"
    progressBar.style.backgroundColor = "var(--color-valid)"
}

//*VALID AND ERROR COUNT FUNCITON
function count(){

    const states = Object.values(valiDationState);

    const validField = states.filter(val => val === true).length;
    const errorField = states.length - validField;

    validCount.innerText = validField;
    errorCount.innerText = errorField;

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
        sts[0].style.color = "";
        sts[0].innerText = "Waiting";
        inputStatus[0].style.backgroundColor = "";
        inputStatus[0].style.borderColor = "";
        inputStatus[0].style.color = "";
        inputStatus[0].innerText = "IDEL";
        nm.style.boxShadow = "";
        nm.style.borderColor = "";
        status1[0].style.color = "";
        finalSelection[0].style.color = "";
        finalSelection[0].innerText = "Awating Input...";
        inputStatus2[0].style.color = "";
        valiDationState.nm = false;
    }
    
    else if(val.length <= 3){
        field[0].style.backgroundColor = "var(--error)";
        field[0].style.borderColor = "var(--color-error)";
        circle[5].style.backgroundColor = "var(--error-dot)";
        circle[5].style.boxShadow = "var(--error-dot-shadow)";
        circle[0].style.backgroundColor = "var(--error-dot)";
        circle[0].style.boxShadow = "var(--error-dot-shadow)";
        fieldTitle[0].style.color = "var(--color-error)";
        sts[0].style.color = "var(--color-error)";
        sts[0].innerText = "Error";
        inputStatus[0].style.backgroundColor = "var(--error)";
        inputStatus[0].style.borderColor = "var(--color-error)";
        inputStatus[0].style.color = "var(--color-error)";
        inputStatus[0].innerText = "ERROR";
        nm.style.boxShadow = "var(--red-glow)";
        nm.style.borderColor = "var(--color-error)";
        status1[0].style.color = "var(--color-error)";
        finalSelection[0].style.color = "var(--color-error)";
        finalSelection[0].innerText = "The Name Should Be 4 Charc Long";
        inputStatus2[0].style.color = "var(--color-error)";
        valiDationState.nm = false;
    }
    
    else{
        field[0].style.backgroundColor = "var(--valid)";
        field[0].style.borderColor = "var(--color-valid)";
        circle[5].style.backgroundColor = "var(--valid-dot)";
        circle[5].style.boxShadow = "var(--valid-dot-shadow)";
        circle[0].style.backgroundColor = "var(--valid-dot)";
        circle[0].style.boxShadow = "var(--valid-dot-shadow)";
        fieldTitle[0].style.color = "var(--color-valid)";
        sts[0].style.color = "var(--color-valid)";
        sts[0].innerText = "Valid";
        inputStatus[0].style.backgroundColor = "var(--valid)";
        inputStatus[0].style.borderColor = "var(--color-valid)";
        inputStatus[0].style.color = "var(--color-valid)";
        inputStatus[0].innerText = "VALID";
        nm.style.boxShadow = "var(--green-glow)";
        nm.style.borderColor = "var(--color-valid)";
        status1[0].style.color = "var(--color-valid)";
        finalSelection[0].style.color = "var(--color-valid)";
        finalSelection[0].innerText = "Valid";
        inputStatus2[0].style.color = "var(--color-valid)";
        valiDationState.nm = true;
    }
    
    upDateProggressBar();
    count()
}

nm.addEventListener("input" , validateName);

//*VALIDATE EMAIL
function validateEmail(){

    let val = email.value.trim();

    if(val === ""){
        field[1].style.backgroundColor = "";
        field[1].style.borderColor = "";
        circle[6].style.backgroundColor = "";
        circle[6].style.boxShadow = "";
        circle[1].style.backgroundColor = "";
        circle[1].style.boxShadow = "";
        fieldTitle[1].style.color = "";
        sts[1].style.color = "";
        sts[1].innerText = "Waiting";
        inputStatus[1].style.backgroundColor = "";
        inputStatus[1].style.borderColor = "";
        inputStatus[1].style.color = "";
        inputStatus[1].innerText = "IDEL";
        email.style.boxShadow = "";
        email.style.borderColor = "";
        status1[1].style.color = "";
        finalSelection[1].style.color = "";
        finalSelection[1].innerText = "Awating Input...";
        inputStatus2[1].style.color = "";
        valiDationState.email = false;
    }

    else if(val.length <= 6){

        field[1].style.backgroundColor = "var(--error)";
        field[1].style.borderColor = "var(--color-error)";
        circle[6].style.backgroundColor = "var(--error-dot)";
        circle[6].style.boxShadow = "var(--error-dot-shadow)";
        circle[1].style.backgroundColor = "var(--error-dot)";
        circle[1].style.boxShadow = "var(--error-dot-shadow)";
        fieldTitle[1].style.color = "var(--color-error)";
        sts[1].style.color = "var(--color-error)";
        sts[1].innerText = "Error";
        inputStatus[1].style.backgroundColor = "var(--error)";
        inputStatus[1].style.borderColor = "var(--color-error)";
        inputStatus[1].style.color = "var(--color-error)";
        inputStatus[1].innerText = "ERROR";
        email.style.boxShadow = "var(--red-glow)";
        email.style.borderColor = "var(--color-error)";
        status1[1].style.color = "var(--color-error)";
        finalSelection[1].style.color = "var(--color-error)";
        finalSelection[1].innerText = "Please Enter the Correct Format";
        inputStatus2[1].style.color = "var(--color-error)";
        valiDationState.email = false;
    }

    else{

        field[1].style.backgroundColor = "var(--valid)";
        field[1].style.borderColor = "var(--color-valid)";
        circle[6].style.backgroundColor = "var(--valid-dot)";
        circle[6].style.boxShadow = "var(--valid-dot-shadow)";
        circle[1].style.backgroundColor = "var(--valid-dot)";
        circle[1].style.boxShadow = "var(--valid-dot-shadow)";
        fieldTitle[1].style.color = "var(--color-valid)";
        sts[1].style.color = "var(--color-valid)";
        sts[1].innerText = "Valid";
        inputStatus[1].style.backgroundColor = "var(--valid)";
        inputStatus[1].style.borderColor = "var(--color-valid)";
        inputStatus[1].style.color = "var(--color-valid)";
        inputStatus[1].innerText = "VALID";
        email.style.boxShadow = "var(--green-glow)";
        email.style.borderColor = "var(--color-valid)";
        status1[1].style.color = "var(--color-valid)";
        finalSelection[1].style.color = "var(--color-valid)";
        finalSelection[1].innerText = "Valid";
        inputStatus2[1].style.color = "var(--color-valid)";
        valiDationState.email = true;
    }

    upDateProggressBar();
    count();
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