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