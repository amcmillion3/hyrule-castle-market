import React from "react";
import image from "../../assets/Market Exterior.jpeg";

export default function Home() {
    return (
        <div className="home-page text-4xl text-center flex flex-col">
            <h1 className='text-7xl flex justify-center my-12 text-center font-bold'>The Hyrule Castle Market</h1>
            <img src={image} className="w-auto" alt="Market Exterior" />
        </div>
    )
}