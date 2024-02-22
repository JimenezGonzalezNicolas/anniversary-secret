import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import first from "../assets/img/1.jpg";
import second from "../assets/img/2.jpg";
import third from "../assets/img/3.jpg";
import '../index.css';

export default function Carousel() {
    const images = [
        {
            original: first,
            thumbnail: first,
        },
        {
            original: second,
            thumbnail: second,
        },
        {
            original: third,
            thumbnail: third,
        },
        {
            original: first,
            thumbnail: first,
        },
        {
            original: second,
            thumbnail: second,
        },
        {
            original: third,
            thumbnail: third,
        },
        {
            original: first,
            thumbnail: first,
        },
        {
            original: second,
            thumbnail: second,
        },
        {
            original: third,
            thumbnail: third,
        },
        {
            original: first,
            thumbnail: first,
        },
        {
            original: second,
            thumbnail: second,
        },
        {
            original: third,
            thumbnail: third,
        },
    ];


    return (
        <>
            <div className="w-full flex justify-center">
                <div className="w-1/2">
                    <ImageGallery
                        items={images}
                        showPlayButton={false} />
                </div>

            </div>
        </>

    )
}