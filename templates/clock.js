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
