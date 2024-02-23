import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
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

import '../index.css';

export default function Carousel() {
    const images = [
        {
            original: a1,
            thumbnail: a1,
        },
        {
            original: a2,
            thumbnail: a2,
        },
        {
            original: a3,
            thumbnail: a3,
        },
        {
            original: a4,
            thumbnail: a4,
        },
        {
            original: a5,
            thumbnail: a5,
        },
        {
            original: a6,
            thumbnail: a6,
        },
        {
            original: a7,
            thumbnail: a7,
        },
        {
            original: a8,
            thumbnail: a8,
        },
        {
            original: a9,
            thumbnail: a9,
        },
        {
            original: b1,
            thumbnail: b1,
        },
        {
            original: b2,
            thumbnail: b2,
        },
        {
            original: b3,
            thumbnail: b3,
        },
        {
            original: b4,
            thumbnail: b4,
        },
        {
            original: b5,
            thumbnail: b5,
        },
        {
            original: b6,
            thumbnail: b6,
        },
        {
            original: b7,
            thumbnail: b7,
        },
        {
            original: b8,
            thumbnail: b8,
        },
        {
            original: b9,
            thumbnail: b9,
        },
        {
            original: c1,
            thumbnail: c1,
        },
        {
            original: c2,
            thumbnail: c2,
        },
        {
            original: c3,
            thumbnail: c3,
        },
        {
            original: c4,
            thumbnail: c4,
        },
        {
            original: c5,
            thumbnail: c5,
        },
        {
            original: c6,
            thumbnail: c6,
        },
        {
            original: c7,
            thumbnail: c7,
        },
        {
            original: c8,
            thumbnail: c8,
        },
        {
            original: c9,
            thumbnail: c9,
        },
        {
            original: d1,
            thumbnail: d1,
        },
        {
            original: d2,
            thumbnail: d2,
        },
        {
            original: d3,
            thumbnail: d3,
        },
        {
            original: d4,
            thumbnail: d4,
        },
        {
            original: d5,
            thumbnail: d5,
        },
        {
            original: d6,
            thumbnail: d6,
        },
        {
            original: d7,
            thumbnail: d7,
        },
        {
            original: d8,
            thumbnail: d8,
        },
        {
            original: d9,
            thumbnail: d9,
        },

    ];


    return (
        <>
            <div className="w-full flex justify-center cielo-nocturno relative">
                <div className="w-1/2 z-10">
                    <ImageGallery items={images} showPlayButton={false} />
                </div>
            </div>
        </>


    )
}