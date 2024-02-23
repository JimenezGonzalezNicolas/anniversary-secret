import React from 'react';
import { Fade } from 'react-awesome-reveal';
import '../index.css';
import MusicPlayer from "./music-player.tsx";

export default function Footer() {

    return (
        <>
            <footer className="black w-full h-24">
                <div className="flex flex-col justify-center items-center h-full">
                    <div className="">
                        <MusicPlayer />
                    </div>
                    <Fade direction='up'>
                        <p className="cursor-pointer my-2">
                            <span className="text-black px-4 font-bold">
                                💕 Hecho con amor por tonejo 💕
                            </span>
                        </p>
                    </Fade>

                </div>
            </footer>
        </>

    )
}