import React from "react";
import image from "../../assets/Market Exterior.jpeg";

export default function Home() {
    return (
        <div className="home-page text-4xl text-center">
            <h2 className="m-10">Welcome to Hyrule Castle Market!</h2>
            <img src={image} className="h-fit" alt="Market Exterior" />
        </div>
    )
}