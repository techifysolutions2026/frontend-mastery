//!CLOCK FUNCITON
const Clock = document.querySelector("#clock")

function clockTime(){
    const now = new Date();

    const hours = String(now.getHours()) % 12;
    const hours12 = String(hours).padStart(2 ,0);
    const minutes = String(now.getMinutes()).padStart(2,0)
    const seconds = String(now.getSeconds()).padStart(2,0)

    Clock.innerText = (`${hours12}` + ":" + `${minutes}` + ":" + `${seconds}`)
}

clockTime();
setInterval(clockTime, 1000);

//!MAIN FUNCTION
