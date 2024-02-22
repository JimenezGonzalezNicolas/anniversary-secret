import React, { useState } from 'react';
import { Fade } from "react-awesome-reveal";
import Confetti from 'react-confetti';
import '../index.css';

export default function Navbar() {
    const [confetiActive, setConfetiActive] = useState(false);

    const toggleConfeti = () => {
        setConfetiActive(!confetiActive);
    };



    const customColors = ['#A200FF', '#FF0000', '#D687FD', '#B52C70', '#F399F6'];

    return (
        <>

            <div className="w-full">
                {confetiActive && <Confetti colors={customColors} />}
                <nav className="flex justify-center items-center w-full bg-white h-20">
                    <div className="">
                        <Fade direction="down">
                            <span onClick={toggleConfeti} className="font-serif text-black px-4 font-bold cursor-pointer text-2xl">
                                ¡Happy Anniversary Pochicky!
                            </span>
                        </Fade>

                    </div>
                </nav>
            </div>



        </>
    );
}
