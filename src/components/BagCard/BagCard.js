import React from "react";

export default function BagCard(props) {
    return (
        <div key={props.title} className="w-1/2 m-8 flex flex-col bg-slate-100 rounded shadow-lg hover:shadow-inner hover:shadow-xl transition ease-in-out">
            <img src={`${props.image}`} alt={`${props.title}`} />
            <h3>{props.title}</h3>
            <p>{props.price} Rupees</p>
            <div>
                <button className="m-4 p-2 border-4 border-solid border-black rounded-lg hover:bg-slate-200 transition ease-in-out" onClick={() => props.deleteItem(props)}>Delete Item</button>
                <input 
                    type="number"
                    value={props.quantity}
                    onChange={(e) => props.quantityUpdater(props, e)}
                />
            </div>
        </div>
    )
}