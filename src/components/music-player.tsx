import React from "react";
import song from "../assets/tune/Magic - Coldplay .mp3";
import "../index.css";



export default function MusicPlayer() {
    return (

        <div className="">
            <audio controls autoPlay>
                <source src={song} type="audio/mp3" />
            </audio>
        </div>
    );
}


