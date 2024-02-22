import React from "react";
import first from "../assets/img/1.jpg";
import second from "../assets/img/2.jpg";
import third from "../assets/img/3.jpg";
import "../index.css";

export default function Cards() {
    return (
        <div className="w-full lg:flex justify-center my-3 px-10">
            <div className="w-full lg:w-60 bg-white border border-gray-200 rounded-lg shadow my-3 lg:mx-3">
                <img className="rounded-t-lg h-80 w-full object-cover" src={first} alt="" />
                <div className="p-5 text-center">

                    <p className="mb-1 font-normal text-gray-700 ">Porque una vida contigo no es suficiente </p>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Mejor que sea una eternidad</h5>
                </div>
            </div>

            <div className="w-full lg:w-60 bg-white border border-gray-200 rounded-lg shadow my-3 lg:mx-3">
                <img className="rounded-t-lg h-80 w-full object-cover" src={second} alt="" />
                <div className="p-5 text-center">
                    <p className="mb-1 font-normal text-gray-700 ">Que sean muchísimos años más juntos</p>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Hasta llegar a viejos y ver a nuestros nietos.</h5>
                </div>
            </div>

            <div className="w-full lg:w-60 bg-white border border-gray-200 rounded-lg shadow my-3 lg:mx-3">
                <img className="rounded-t-lg h-80 w-full object-cover" src={third} alt="" />
                <div className="p-5 text-center">
                    <p className="mb-1 font-normal text-gray-700 ">¡Gracias por siempre estar a mi lado y cuidarme!</p>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Prometo seguir a tu lado pase lo que pase.</h5>
                </div>
            </div>
        </div>
    )
}