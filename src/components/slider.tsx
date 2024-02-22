import React from "react";
import 'swiper/css';

import a1 from "../assets/img/1.jpg";
import a9 from "../assets/img/10.jpg";
import b1 from "../assets/img/11.jpg";
import b2 from "../assets/img/12.jpg";
import b3 from "../assets/img/13.jpg";
import b4 from "../assets/img/14.jpg";
import b5 from "../assets/img/15.jpg";
import b6 from "../assets/img/16.jpg";
import b7 from "../assets/img/17.jpg";
import b8 from "../assets/img/18.jpg";
import b9 from "../assets/img/19.jpg";
import a2 from "../assets/img/2.jpg";
import c2 from "../assets/img/21.jpg";
import c3 from "../assets/img/22.jpg";
import c4 from "../assets/img/23.jpg";
import c5 from "../assets/img/24.jpg";
import c6 from "../assets/img/25.jpg";
import c7 from "../assets/img/26.jpg";
import c9 from "../assets/img/27.jpg";
import c1 from "../assets/img/28.jpg";
import d1 from "../assets/img/29.jpg";
import a3 from "../assets/img/3.jpg";
import d2 from "../assets/img/30.jpg";
import d3 from "../assets/img/31.jpg";
import d4 from "../assets/img/32.jpg";
import d5 from "../assets/img/33.jpg";
import d6 from "../assets/img/34.jpg";
import d7 from "../assets/img/35.jpg";
import d8 from "../assets/img/36.jpg";
import d9 from "../assets/img/37.jpg";
import c8 from "../assets/img/4.jpg";
import a4 from "../assets/img/5.jpg";
import a5 from "../assets/img/6.jpg";
import a6 from "../assets/img/7.jpg";
import a7 from "../assets/img/8.jpg";
import a8 from "../assets/img/9.jpg";






interface Image {
    src: string;
    alt: string;
}

export default function Slider() {

    const columns: Image[][] = [
        [

            { src: a1, alt: 'image' },
            { src: a2, alt: 'image' },
            { src: a3, alt: 'image' },
            { src: a4, alt: 'image' },
            { src: a5, alt: 'image' },
            { src: a6, alt: 'image' },
            { src: a7, alt: 'image' },
            { src: a8, alt: 'image' },
            { src: a9, alt: 'image' },
        ],
        [
            { src: b1, alt: 'image' },
            { src: b2, alt: 'image' },
            { src: b3, alt: 'image' },
            { src: b4, alt: 'image' },
            { src: b5, alt: 'image' },
            { src: b6, alt: 'image' },
            { src: b7, alt: 'image' },
            { src: b8, alt: 'image' },
            { src: b9, alt: 'image' },
        ],
        [
            { src: c1, alt: 'image' },
            { src: c2, alt: 'image' },
            { src: c3, alt: 'image' },
            { src: c4, alt: 'image' },
            { src: c5, alt: 'image' },
            { src: c6, alt: 'image' },
            { src: c7, alt: 'image' },
            { src: c8, alt: 'image' },
            { src: c9, alt: 'image' },
        ],
        [
            { src: d1, alt: 'image' },
            { src: d2, alt: 'image' },
            { src: d3, alt: 'image' },
            { src: d4, alt: 'image' },
            { src: d5, alt: 'image' },
            { src: d6, alt: 'image' },
            { src: d7, alt: 'image' },
            { src: d8, alt: 'image' },
            { src: d9, alt: 'image' },
        ],
    ];
    return (

        <>
            <div className="w-full flex justify-center bg-black">
                <p className="font-bold font-serif text-white text-4xl p-5">
                    Un conjunto de recuerdos maravillosos llenos de alegría
                </p>
            </div>
            <div className="min-h-screen grid place-items-center font-serif">
                <header className="flex overflow-hidden h-[50vw] bg-black">
                    {columns.map((images, columnIndex) => {
                        const animationClass = columnIndex % 2 === 0 ? 'animate-slide-up' : 'animate-slide-down';
                        const columnClasses = `h-[200%] ${animationClass} ${columnIndex % 2 === 0 ? 'even:mb-auto' : 'odd:mt-auto'}`;

                        return (
                            <div
                                className={columnClasses}
                                key={columnIndex}
                                onMouseOver={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
                                onMouseOut={(e) => (e.currentTarget.style.animationPlayState = 'running')}
                            >
                                {images.concat(images).map((image, imageIndex) => (
                                    <a href="#" key={imageIndex}>
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="max-w-full object-cover align-middle border border-black box-border grayscale transition-opacity duration-200 hover:grayscale-0 hover:opacity-100"
                                        />
                                    </a>
                                ))}
                            </div>

                        );
                    })}
                </header>
            </div>
            <div className="w-full flex justify-center bg-black">
                <p className="w-1/2 font-serif text-white text-xl p-5 colors">
                    Debes preguntarte por qué las fotos están en blanco y negro, pero al elegir una
                    foto verás que toma color cada recuerdo contigo es eso para mi,
                    una vida llena de

                    <span className="red font-serif pl-1">c</span>
                    <span className="orange font-serif">o</span>
                    <span className="yellow font-serif">l</span>
                    <span className="green font-serif">o</span>
                    <span className="blue font-serif">r</span>
                    <span className="purple font-serif">e</span>
                    <span className="pink font-serif">s</span>

                </p>
            </div>





        </>




    )
}