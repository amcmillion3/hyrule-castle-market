import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
    return (
        <div key={props.title} className="w-1/2 m-8 flex flex-col bg-slate-100 rounded shadow-lg hover:shadow-inner hover:shadow-xl transition ease-in-out">
            <Link to={`/products/${props.title}`}>
                <img className="m-4" src={`${props.image}`} alt={`${props.title}`} />
            </Link>
            <h3 className="m-4">{props.title}</h3>
            <p className="m-4">{props.price} Rupees</p>
            <button className="m-4 border-4 border-solid border-black rounded-lg hover:bg-slate-200 transition ease-in-out" onClick={() => props.addToBag(props)}>Add to Bag</button>
        </div>
    )
}