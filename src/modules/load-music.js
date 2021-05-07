const player = document.getElementById('music-player');

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

function loadMusic() {
    if (this.files && this.files[0]) {
        player.onload = () => {
            URL.revokeObjectURL(player.src);
        }
        
        player.src = URL.createObjectURL(this.files[0]);
        console.log(this.files[0].name);
    }
}