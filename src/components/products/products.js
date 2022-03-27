import React from "react";
import ProductCard from "../ProductCard";

export default function Products(props) {
    function renderProductsList() {
        const products = props.data.map((item) => (
            <ProductCard
                key = {item.title}
                title = {item.title}
                image = {item.image}
                price = {item.price}
                quantity = {item.quantity}
                addToBag = {props.addToBag}
            />
        ));
        return products;
    };
    return (
        <div className="text-3xl flex flex-col items-center">{renderProductsList()}</div>
    )
}