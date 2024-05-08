const hourEl = document.getElementById("hour");

const minuteEl = document.getElementById("minutes");

const secondEl = document.getElementById("second");

const AmPmEl = document.getElementById("AmPm");

function updateClock() {

    let h = new Date().getHours ();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let AmPm ="Am"

    if (h > 12) {
        h = h - 12;
        AmPm = "Pm";
    }
    
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    AmPmEl.innerHTML = AmPm;
    setTimeout(updateClock, 1000);
}
updateClock()


