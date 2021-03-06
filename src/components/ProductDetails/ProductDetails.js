import React from "react";
import { useParams } from "react-router-dom";
import ProductDetailCard from "../ProductDetailCard";

export default function ProductDetails(props) {
    const { id } = useParams();
    function renderProductDetails() {
        const productDetails = props.data.filter(item => item.title === id).map((item) => (
            <ProductDetailCard
            key = {item.title} 
            image = {item.image}
            title = {item.title}
            price = {item.price}
            quantity = {item.quantity}
            description = {item.description}
            addToBag = {props.addToBag}
            />
        ))
        return productDetails;
    }

    return(
        <div className="text-3xl flex flex-col items-center">{renderProductDetails()}</div>
    )
} 