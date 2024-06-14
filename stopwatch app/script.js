let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timer = false;

function stopwatch() {
    if (timer === true) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if(second == 60) {
            minute++;
            second = 0;
        }

        if(minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        let hrString = hour;
        let minString = minute;
        let secString = second;

        //0 before the number like "01:05:08"
        if (hour < 10) {
            hrString = "0" + hrString;
        }

        if (minute < 10) {
            minString = "0" + minString;
        }
        
        if (second < 10) {
            secString = "0" + secString;
        }

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        setTimeout(stopwatch, 10); 
    }
}

startBtn.addEventListener('click', function() {
    timer = true;
    stopwatch();
});

stopBtn.addEventListener('click', function() {
    timer = false;
});

resetBtn.addEventListener('click', function() {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
});