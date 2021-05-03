// Upload file and create a new music at playlist
function upload(fileInput) {
    let files = fileInput.files;
    document.getElementById('submit').click();
    
    playlist.push(files);
    console.log(playlist);
    
    for (var i = 0; i < files.length; i++) {
        let fileName = files[i].name.split('.mp3');
        let btn = document.createElement("button");

        // button build
        document.getElementById('music').innerHTML = fileName; 
        btn.innerHTML = fileName;
        btn.style.cssText = 'background: none; outline: none; border: none; margin-bottom: 10px';

        btn.onclick = function PlayThis() {
            if (files && files[0]) {
                // player.onload = () => {
                //     URL.revokeObjectURL(player.src);
                // }
                
                // player.src = URL.createObjectURL(files[0]);

                player.onload = () => {
                    URL.revokeObjectURL(player.src);
                }
                
                player.src = URL.createObjectUR(playlist.length[0]);
                document.getElementById('music').innerHTML = fileName;
            }
            console.log(files);
        };
        document.getElementById('playlist').appendChild(btn);
    };    
}

player.addEventListener('ended', function(){
    if (playlist.length > 0) {
        player.src = playlist.length[1];
        player.load();
        player.play();
    }
}, false);