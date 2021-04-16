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

function getFile() {
    document.getElementById("upfile").click();
}

function openPlaylist() {
    document.getElementById('playlist-open').classList.remove('hidden');
}

function closePlaylis() {
    document.getElementById('playlist-open').classList.add('hidden');
}

function upload(fileInput) {
    let files = fileInput.files;

    pause();
    for (var i = 0; i < files.length; i++) {
      document.getElementById('music').innerHTML = files[i].name.split('.mp3');  
    }
}

function loadMusic(e) {
}

window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            let music = document.getElementById('music-player');
            music.onload = () => {
                URL.revokeObjectURL(music.src);  // no longer needed, free memory
            }
            
            music.src = URL.createObjectURL(this.files[0]); // set src to blob url
        }
    });
});


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
    let currentTime = player.currentTime;
    let duration = player.duration;

    document.getElementById('nowtime').innerHTML = toHHMMSS(currentTime);    
    document.getElementById('endtime').innerHTML = toHHMMSS(duration);    
    $('.player__range').stop(true,true).animate({'width':(currentTime +.25)/duration*100+'%'},250,'linear');
});