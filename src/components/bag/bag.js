import React from "react";

export default function Bag(props) {
    return (
        <div className="bag-container">
            {props.data.map((item, index) => (
                <div key={index} className="bag-item">
                    <img src={`${item.image}`} alt={`${item.title}`} />
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>
    )
}