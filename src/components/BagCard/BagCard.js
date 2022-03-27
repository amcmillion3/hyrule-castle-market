import React from "react";

export default function BagCard(props) {
    return (
        <div key={props.title} className="w-1/2 m-8 flex flex-col bg-violet-100 rounded shadow-lg hover:shadow-inner hover:shadow-xl transition ease-in-out xl:items-center xl:w-3/4">
            <img src={`${props.image}`} alt={`${props.title}`} />
            <h3>{props.title}</h3>
            <p>{props.price} Rupees</p>
            <div className="xl:flex xl:flex-col xl:items-center">
                <button className="m-4 p-2 border-4 border-solid border-black rounded-lg hover:bg-violet-200 transition ease-in-out xl:w-1/2 xl:text-lg xl:font-bold" onClick={() => props.deleteItem(props)}>Delete Item</button>
                <input 
                    type="number"
                    className="xl:w-1/4"
                    value={props.quantity}
                    onChange={(e) => props.quantityUpdater(props, e)}
                />
            </div>
        </div>
    )
}