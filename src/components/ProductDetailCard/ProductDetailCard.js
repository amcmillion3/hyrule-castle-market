import React from "react";

export default function ProductDetailCard(props) {
    return (
        <div key={props.title} className="w-1/2 m-8 flex flex-col bg-violet-100 rounded shadow-lg hover:shadow-inner hover:shadow-xl transition ease-in-out xl:items-center xl:w-1/4">
            <img className="m-4 xl:w-auto" src={`${props.image}`} alt={`${props.title}`} />
            <h3 className="m-4">{props.title}</h3>
            <p className="m-4">{props.price} Rupees</p>
            <p className="m-4">{props.description}</p>
            <button className="m-4 border-4 border-solid border-black rounded-lg hover:bg-violet-200 transition ease-in-out" onClick={() => props.addToBag(props)}>Add to Bag</button>
        </div>
    )
}