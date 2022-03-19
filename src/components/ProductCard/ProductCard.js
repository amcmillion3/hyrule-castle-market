import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
    return (
        <div key={props.title} className="product-card">
            <Link to={`/products/${props.title}`}>
                <img src={`${props.image}`} alt={`${props.title}`} />
            </Link>
            <h3>{props.title}</h3>
            <p>{props.price}</p>
            <button className="add-to-bag-button" onClick={() => props.addToBag(props)}>Add to Bag</button>
        </div>
    )
}