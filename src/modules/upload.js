const player = document.getElementById('music-player');

function getFile() {
    document.getElementById("upfile").click();
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

        console.log(files[i])


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