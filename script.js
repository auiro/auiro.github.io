const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
getDate()
function getDate(){
    const d = new Date();
let day = weekday[d.getDay()];
let hour = d.getHours()
let minute = d.getMinutes()
document.getElementById("timeteller").textContent = "The time is " + hour + ":" + minute 
}
setInterval(getDate, 1000)