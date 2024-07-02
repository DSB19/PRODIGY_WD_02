let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer;
let isRunning = false;

const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const millisecondsEl = document.getElementById('milliseconds');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapsList = document.getElementById('lapsList');

function updateDisplay() {
    minutesEl.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondsEl.textContent = seconds < 10 ? '0' + seconds : seconds;
    millisecondsEl.textContent = milliseconds < 10 ? '0' + milliseconds : milliseconds;
}

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        startStopBtn.textContent = 'Start';
        isRunning = false;
    } else {
        timer = setInterval(() => {
            milliseconds++;
            if (milliseconds === 100) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            updateDisplay();
        }, 10);
        startStopBtn.textContent = 'Stop';
        isRunning = true;
    }
}

function reset() {
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    startStopBtn.textContent = 'Start';
    isRunning = false;
    lapsList.innerHTML = '';
}

function recordLap() {
    const lapTime = `${minutesEl.textContent}:${secondsEl.textContent}:${millisecondsEl.textContent}`;
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapsList.appendChild(lapItem);
}
