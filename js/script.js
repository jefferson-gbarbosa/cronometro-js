const buttonPlayPause = document.querySelector('.btn-playpause');
const buttonStop = document.querySelector('.btn-stop');
const timer = document.querySelector('#time');

let millisecond = 0;
let second = 0;
let minute = 0;

let countTime;

let isPlaying = false;

function playPause(){
    isPlaying ? pause():play();
}

function play(){
    isPlaying = true;
    countTime = setInterval(time,10);
    buttonPlayPause.innerHTML = "<i class='bx bx-pause'></i>";
    buttonStop.style.display = "block";
}
function pause(){
    isPlaying = false;
    clearInterval(countTime);
    buttonPlayPause.innerHTML = "<i class='bx bx-play'></i>";
}
function stop(){
    clearInterval(countTime);
    millisecond = 0;
    second = 0;
    minute = 0;
    buttonPlayPause.innerHTML = "<i class='bx bx-play'></i>";
    buttonStop.style.display = "none";
    timer.innerHTML = `${formatTime(minute)}:${formatTime(second)}:${formatTime(millisecond)}`;
}
// format timer
function formatTime(timer){
    if(timer < 10){
        return `0${timer}`;
    }else{
        return timer;
    }
}
// time
function time(){
    millisecond++;
    if(millisecond === 100){
        second+=1;
        millisecond = 0;
        if(second === 60){
            minute +=1;
            second = 0;
        }
    }

    timer.innerHTML = `${formatTime(minute)}:${formatTime(second)}:${formatTime(millisecond)}`; 
}