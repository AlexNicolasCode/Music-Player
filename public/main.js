const player = document.getElementById('music-player');
const btnPlay = document.getElementById('play');
const btnPause = document.getElementById('pause');

// Play and Pause
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

// Volume
function less() {
    player.volume -= 0.2;
}

function more() {
    player.volume += 0.2;
}

// Playlist
function openPlaylist() {
    document.getElementById('playlist-open').classList.remove('hidden');
}

function closePlaylist() {
    document.getElementById('playlist-open').classList.add('hidden');
}

function loadMusic() {
    if (this.files && this.files[0]) {
        player.onload = () => {
            URL.revokeObjectURL(player.src);
        }
        
        player.src = URL.createObjectURL(this.files[0]);
        console.log(this.files[0].name);
    }
}

function getFile() {
    document.getElementById("upfile").click();
}

// Playlist array
const list = [];

function playlist() {
    for(i = 0; i < list.length; i++) {  
        var music = list[i];

        player.onload = () => {
            URL.revokeObjectURL(player.src);
        }
        
        player.src = URL.createObjectURL(new Blob(music, {type: "application/mp3"}));
        document.getElementById('music').innerHTML = music.name;

        music.onended = function() {
            i++;
            console.log("This audio has ended");

            // player.onload = () => {
            //     URL.revokeObjectURL(player.src);
            // }
            
            // player.src = URL.createObjectURL(music);  
            // document.getElementById('music').innerHTML = fileName;
        };
    } 
    
    if (list.length == 0) {
        document.getElementById('music').innerHTML = "Please, add a new music"; 
        console.log("The audio has ended");        
    }
}

// Upload file and create a new music at playlist
function upload(fileInput) {
    let files = fileInput.files;
    document.getElementById('submit').click();
    
    list.push(files);
    console.log(list);
    
    for (var i = 0; i < files.length; i++) {
        let fileName = files[i].name.split('.mp3');
        let btn = document.createElement("button");

        // button build
        document.getElementById('music').innerHTML = fileName; 
        btn.innerHTML = fileName;
        btn.id = fileName;
        btn.style.cssText = 'background: none; outline: none; border: none; margin-bottom: 10px';

        btn.onclick = function playThis() {
            if (files && files[0]) {
                player.onload = () => {
                    URL.revokeObjectURL(player.src);
                }
                
                player.src = URL.createObjectURL(files[0]);
                document.getElementById('music').innerHTML = fileName;
            }

            // if (files && files[0]) {
            //     player.onload = () => {
            //         URL.revokeObjectURL(player.src);
            //     }
                
            //     player.src = URL.createObjectURL(files[0]);
            //     document.getElementById('music').innerHTML = fileName;
            // }
            
        };
        document.getElementById('playlist').appendChild(btn);
    };    
}

player.addEventListener('ended', function(){
    if (list.length > 0) {

    } else {
        document.getElementById('music').innerHTML = "Please, add a new music"; 
        console.log("The audio has ended");        
    }
});

// Automatic load
window.addEventListener('load', function() {""
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            player.onload = () => {
                URL.revokeObjectURL(player.src);
            }
            
            player.src = URL.createObjectURL(this.files[0]);
            console.log(this.files[0].name);

            btnPlay.classList.add('hidden');
            btnPause.classList.remove('hidden');
        }
    });
});


// Time presets
const toHHMMSS = function ( totalsecs ) {
    let sec_num = parseInt(totalsecs, 10);
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
    $('.player__find-range').stop(true,true).animate({'marginLeft':(currentTime +.25)/duration*100+'%'},250,'linear');
    $('.player__range').stop(true,true).animate({'width':(currentTime +.25)/duration*100+'%'},250,'linear');
});