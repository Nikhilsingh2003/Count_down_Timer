const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours')
const minE1 = document.getElementById('minutes');
const SecondsE1 = document.getElementById('seconds')

const newYears = '1 Jan 2025';
function countdown() {
    const newyeardate = new Date(newYears);
    const currentdate = new Date();
    console.log(newyeardate - currentdate);
    const seconds = (newyeardate - currentdate) / 1000
    const days = Math.floor(seconds / 3600 / 24)
    const hours = Math.floor(seconds / 3600 % 24)
    const minutes = Math.floor(seconds / 60) % 60
    const Seconds = Math.floor(seconds % 60);
    //console.log(days, hours, minutes, Seconds)
    daysE1.innerHTML = days;
    hoursE1.innerHTML = hours;
    minE1.innerHTML = minutes;
    SecondsE1.innerHTML = Seconds;
}
countdown();
setInterval(countdown, 1000);
