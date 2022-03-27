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
        <div className="text-3xl flex flex-col ">
            <div className="text-3xl flex flex-col items-center md:grid md:grid-cols-2 md:justify-items-center xl:grid xl:grid-cols-4 xl:justify-items-center">{renderBagItems()}</div>
            <div className="self-center">Total: {calculateTotalPrice()} Rupees</div>
        </div>
    )
}