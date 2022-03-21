import React from "react";
import BagCard from "../BagCard";

export default function Bag(props) {
    function renderBagItems() {
        const bagItems = props.items.map((item) => (
            <BagCard 
                key = {item.title}
                title = {item.title}
                image = {item.image}
                quantity = {item.quantity}
                price = {item.price}
                deleteItem = {props.deleteItem}
                quantityUpdater = {props.quantityUpdater}
            />
        ));
        return bagItems;
    }

    function calculateTotalPrice() {
        let total = 0;
        for (let i = 0; i < props.items.length; i++) {
            total += props.items[i].price * props.items[i].quantity;
        }
        return total;
    }

    return (
        <div className="bag-container">
            <div className="bag-items-container">{renderBagItems()}</div>
            <div className="total-price">Total: {calculateTotalPrice()} Rupees</div>
        </div>
    )
}