import React, { useEffect, useState } from "react";
import "../assets/css/styles.css";
export default function Letter() {
    // Esta es la parte actualizada donde TypingEffect está definido dentro de Navbar
    const TypingEffect = () => {
        const fullText = `Amor mío, amor de mis amores, mi pequeño pollito, mi bebé...

        Felicidades por estos dos años juntos, donde hemos vivido altos y bajos, afrontando todo lo que se nos presenta sin miedo a perder. Sé que fue complejo al principio y doloroso, pero cada día que pasa me doy cuenta de que no quiero vivir una vida sin ti, sin oír tu voz, sin sentir tus manitas con las mías.
        
        Gracias por cuidarme cuando estoy enfermo, por hacerme dormir, por tus días y noches de compañía mientras juego o trabajo, por enseñarme, por guiarme, por darme apoyo cada vez que mi cabeza me decía que no podía lograr nada.
        
        Gracias por hacerme soñar otra vez, por permitirme perseguir ese hermoso sueño de una vida juntos, por luchar por nuestro futuro hogar, familia e hijos.
        
        Feliz aniversario amor mío, gracias por hacerme suspirar cada vez que te oigo reír durante estos dos años juntos, por ser mi cobijo, mi confidente, mi mejor amiga y mi amor.
        
        Jamás te dejaré sola, pase lo que pase. Me he prometido protegerte, amarte y cuidarte para siempre.
        
        Te ama, Nicolás.`;
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


            <p className="text-black font-bold text-xl w-full 
                text-center p-2 cursor-pointer">
                {text}
            </p>
        );
    };

    return (
        <div className="w-full flex justify-center bg-black">
            <div className="rounded-lg flex w-1/4 justify-center bg-white m-2">
                <TypingEffect />
            </div>

        </div>
    )
}