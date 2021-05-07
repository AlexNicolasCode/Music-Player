const player = document.getElementById('music-player');

player.addEventListener('ended', function(){
    if (list.length > 0) {

    } else {
        document.getElementById('music').innerHTML = "Please, add a new music"; 
        console.log("The audio has ended");        
    }
});