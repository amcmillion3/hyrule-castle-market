import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails({data}) {
    const { id } = useParams();

    return(
        <div className="product-focus">
            {data.filter(item => item.title === id).map((item, index) =>(
                <div key={index} className="focus-container">
                    <img src={`${item.image}`} alt={`${item.title}`} />
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    )
} 