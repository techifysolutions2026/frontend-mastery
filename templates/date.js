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