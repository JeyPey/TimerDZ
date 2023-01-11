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
    millisecond++;
    if (millisecond >= 99) {
        millisecond = 0;
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
}
function Timer() {
    startTimer();
    time.textContent = (hour > 9 ? hour : "0" + hour)
        + ":" + (minute > 9 ? minute : "0" + minute)
        + ":" + (second > 9 ? second : "0" + second)
        + ":" + (millisecond > 9 ? millisecond : "0" + millisecond)
}


// EventListener------------------------------------------------------
buttonStart.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(Timer, 10)
})

buttonStop.addEventListener('click', () => {
    clearInterval(interval)
})

buttonReset.addEventListener('click', () => {
    clearInterval(interval)
    time.textContent = "00:00:00:00"
    hour = 0
    minute = 0
    second = 0
    millisecond = 0
})