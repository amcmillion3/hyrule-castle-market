import React from "react";

export default function ProductDetailCard(props) {
    return (
        <div key={props.title} className="focus-container">
            <img src={`${props.image}`} alt={`${props.title}`} />
            <h3>{props.title}</h3>
            <p>{props.price}</p>
            <p>{props.description}</p>
            <button className="add-to-bag-button" onClick={() => props.addToBag(props)}>Add to Bag</button>
        </div>
    )
}