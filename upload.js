
export default function Menu() {
    const [isPlay, setIsPlay] = useState(true);
    const [isPause, setIsPause] = useState(false);

    function Play() {
        document.getElementById('music-player').play();
        setIsPlay(false);
        setIsPause(true)        
    }

    function Pause() {
        document.getElementById('music-player').pause();
        setIsPlay(true);
        setIsPause(false)        
    }

    return (
      <div>
        <audio id="music-player" src="vincent.mp3"></audio>
        { isPlay && 
            <button onClick={Play}>Play</button>
        }
        { isPause && 
            <button onClick={Pause}>Pause</button>
        }
        <button onClick={() => document.getElementById('music-player').volume -= 0.1}>Vol -</button>
        <button onClick={() => document.getElementById('music-player').volume += 0.1}>Vol +</button>
      </div>
    )
}