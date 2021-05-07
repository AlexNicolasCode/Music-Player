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

function getFile() {
    document.getElementById("upfile").click();
}

// Upload file and create a new music at playlist
function upload(fileInput) {
    let files = fileInput.files;
    document.getElementById('submit').click();
    
    list.push(files);
    
    for (var i = 0; i < files.length; i++) {
        let fileName = files[i].name.split('.mp3');
        let btn = document.createElement("button");
        listName.push(fileName);

        // button build
        document.getElementById('music').innerHTML = fileName; 
        btn.innerHTML = fileName;
        btn.id = fileName;
        btn.style.cssText = 'background: none; outline: none; border: none; margin-bottom: 10px; width: 100%';

        btn.onclick = function playThis() {
            if (files && files[0]) {
                player.onload = () => {
                    URL.revokeObjectURL(player.src);
                }
                
                player.src = URL.createObjectURL(files[0]);
                document.getElementById('music').innerHTML = fileName;
            }            
        };
        document.getElementById('playlist').appendChild(btn);
    };    
}

// Playlist array
const list = [];
const listName = []

function playlist() {
    let i = 0;

    if (list.length == 0) {
        document.getElementById('music').innerHTML = "Please, add a new music"; 
        console.log("The audio has ended");        
    }

    function prev() {
        --i;

        player.src = URL.createObjectURL(new Blob(list[i], {type: "application/mp3"}));
        document.getElementById('music').innerHTML = listName[i];
    }

    function next() {
        if (i === list.length - 1) {
            i = 0;
        } else {
            i++;
        }

                // Listen for the music ended event, to play the next audio file
        player.src = URL.createObjectURL(new Blob(list[i], {type: "application/mp3"}));
        document.getElementById('music').innerHTML = listName[i];
    }
        
    if (player === null) {
        throw "Playlist Player does not exists ...";
    } else {
        // Start the player
        player.src = URL.createObjectURL(new Blob(list[i], {type: "application/mp3"}));
        document.getElementById('music').innerHTML = listName[i];


        // Listen for the music ended event, to play the next audio file
        player.addEventListener('ended', next, false)
    }  

    document.getElementById("nextBtn").addEventListener("click", next, false);
    document.getElementById("prevBtn").addEventListener("click", prev, false);
}

// Automatic load
window.addEventListener('load', function() {""
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            player.onload = () => {
                URL.revokeObjectURL(player.src);
            }
            
            player.src = URL.createObjectURL(this.files[0]);

            btnPlay.classList.add('hidden');
            btnPause.classList.remove('hidden');
        }
    });
});

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