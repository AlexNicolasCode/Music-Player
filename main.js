const player = document.getElementById('music-player');
const btnPlay = document.getElementById('play');
const btnPause = document.getElementById('pause');

function play() {
    player.play();
    btnPlay.classList.add('hidden');
    btnPause.classList.remove('hidden');
}
function pause() {
    player.pause();
    btnPause.classList.add('hidden');
    btnPlay.classList.remove('hidden');
}

function less() {
    player.volume -= 0.2;
}

function more() {
    player.volume += 0.2;
}

const toHHMMSS = function ( totalsecs ) {
    let sec_num = parseInt(totalsecs, 10); // don't forget the second param
    let hours   = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    let seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours; }
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}

    var time = minutes+':'+seconds;
    return time;
}

player.addEventListener("timeupdate", function() {
    let nowTime = document.getElementById('player__nowtime');
    let endTime = document.getElementById('player__endtime');
    let currentTime = player.currentTime;
    let duration = player.duration;

    document.getElementById('nowtime').innerHTML = toHHMMSS(currentTime);    
    document.getElementById('endtime').innerHTML = toHHMMSS(duration);    
    $('.player__range').stop(true,true).animate({'width':(currentTime +.25)/duration*100+'%'},250,'linear');
});