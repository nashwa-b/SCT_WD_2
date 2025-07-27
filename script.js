let startTime;
let elapsedTime = 0;
let timerInterval;
let lapCount = 0;

const display = document.getElementById("display");
const lapList = document.getElementById("lap-list");

function timeToString(time) {
    let hrs = Math.floor(time / 3600000);
    let mins = Math.floor((time % 3600000) / 60000);
    let secs = Math.floor((time % 60000) / 1000);
    
    return (
        (hrs < 10 ? "0" + hrs : hrs) + ":" +
        (mins < 10 ? "0" + mins : mins) + ":" +
        (secs < 10 ? "0" + secs : secs)
    );
}

function startStopwatch() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        display.textContent = timeToString(elapsedTime);
    }, 1000);
}

function pauseStopwatch() {
    clearInterval(timerInterval);
}

function resetStopwatch() {
    clearInterval(timerInterval);
    display.textContent = "00:00:00";
    elapsedTime = 0;
    lapCount = 0;
    lapList.innerHTML = "";
}

function recordLap() {
    if (elapsedTime == 0) return;
    lapCount++;
    const lapTime = timeToString(elapsedTime);
    const li = document.createElement("li");
    li.textContent = `Lap ${lapCount} : ${lapTime}`;
    lapList.appendChild(li);
}
