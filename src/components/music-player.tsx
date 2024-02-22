import React, { useRef } from "react";
import "../index.css";


function MusicPlayer() {
    const playlist = [
        process.env.PUBLIC_URL + "/assets/tune/y2mate.com - BAD BUNNY x MORA  UNA VEZ  YHLQMDLG Visualizer_320kbps.mp3",
        process.env.PUBLIC_URL + "/assets/tune/y2mate.com - Yung Gravy  Betty Get Money Official Music Video_320kbps.mp3",
    ];

    const audioRef = useRef<HTMLAudioElement>(null);

    const playMusic = async () => {
        if (audioRef.current) {
            try {
                await audioRef.current.play();
            } catch (error) {
                console.error("Error playing song:", error);
            }
        }
    };

    const pauseMusic = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
    };


    return (
        <div className="w-full flex flex-col items-center">
            <div className="controls">
                <audio ref={audioRef} src={playlist[0]} />
                <button onClick={playMusic}>Play</button>
                <button onClick={pauseMusic}>Pause</button>
            </div>
        </div>
    );
}

export default MusicPlayer;
