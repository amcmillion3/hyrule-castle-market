import React from "react";

export default function BagCard(props) {
    return (
        <div key={props.title} className="bag-item">
            <img src={`${props.image}`} alt={`${props.title}`} />
            <h3>{props.title}</h3>
            <p>{props.price}</p>
            <div>
                <button className="delete-button" onClick={() => props.deleteItem(props)}>Delete Item</button>
                <input 
                    type="number"
                    quantity={props.quantity}
                    onChange={(e) => props.quantityUpdater(props, e)}
                />
            </div>
        </div>
    )
}