import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import '../index.css';

export default function Navbar() {
    const [confetiActive, setConfetiActive] = useState(false);

    const toggleConfeti = () => {
        setConfetiActive(!confetiActive);
    };

    // Esta es la parte actualizada donde TypingEffect está definido dentro de Navbar
    const TypingEffect = () => {
        const fullText = "¡Happy Anniversary Pochicky!";
        const [text, setText] = useState('');
        const [index, setIndex] = useState(0);

        useEffect(() => {
            if (index < fullText.length) {
                const timerId = setTimeout(() => {
                    setText((prev) => prev + fullText.charAt(index));
                    setIndex((prev) => prev + 1);
                }, 100);
                return () => clearTimeout(timerId);
            }
        }, [index, fullText]);

        return (
            <span onClick={toggleConfeti} className=" text-black px-4 font-bold cursor-pointer text-2xl">
                {text}
            </span>
        );
    };

    const customColors = ['#A200FF', '#FF0000', '#D687FD', '#B52C70', '#F399F6'];

    return (
        <>
            <div className="w-full">
                {confetiActive && <Confetti colors={customColors} />}
                <nav className="flex justify-center items-center w-full bg-white h-20">

                    <TypingEffect />

                </nav>
            </div>
        </>
    );
}
