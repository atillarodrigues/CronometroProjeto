let number = 0;
let clock;
const paragraph = document.getElementById('stopwatch');

function start() {
    if(clock){
        return
    }

    clock = setInterval(() => {
        number++
        const minute = Math.floor(number / 6000);
        const seconds = Math.floor((number % 6000)/ 100)
        const mili = number % 60
        const formattedTime = formatTime(minute) + ':' + formatTime(seconds) + ':' + formatTime(mili);
        paragraph.textContent = formattedTime;
    }, 10);
}
function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function pause() {
    clearInterval(clock)
    clock = null
}

function reset() {
    clearInterval(clock)
    clock = null
    number = 0

    paragraph.textContent = "00:00:00"
}