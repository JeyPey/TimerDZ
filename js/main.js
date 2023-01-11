const time = document.querySelector('.time')
const buttonStart = document.querySelector('.start')
const buttonStop = document.querySelector('.stop')
const buttonReset = document.querySelector('.reset')

let hour = 0,
    minute = 0,
    second = 0,
    millisecond = 0,
    interval

function startTimer() {
    second++;
    if (second >= 60) {
        second = 0;
        minute++;
        if (minute >= 60) {
            minute = 0;
            hour++;
        }
    }
}
function Timer() {
    startTimer();
    time.textContent = (hour > 9 ? hour : "0" + hour)
        + ":" + (minute > 9 ? minute : "0" + minute)
        + ":" + (second > 9 ? second : "0" + second);
}

buttonStart.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(Timer, 10)
})