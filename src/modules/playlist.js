const player = document.getElementById('music-player');

// Playlist array
const list = [];

function playlist() {
    for (i = 0; i < list.length;) { 
        let file = list[i];
        
        console.log(file)

        player.onload = () => {
            URL.revokeObjectURL(player.src);
        }
        
        player.src = URL.createObjectURL(new Blob(list[0], {type: "application/mp3"}));
        document.getElementById('music').innerHTML = file;

        player.onended = function() {
            player.src = URL.createObjectURL(new Blob(list[i + 1], {type: "application/mp3"}));
            console.log(file)

            // ++i;
            // console.log("This audio has ended");

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