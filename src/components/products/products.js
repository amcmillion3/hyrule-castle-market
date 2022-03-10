import React from "react";
import { Link } from "react-router-dom";

export default function Products({data}) {
    return(
        <div className="products">
            {data.map((item, index) => (
                <div key={index}>
                    <Link to={`/products/${item.title}`}>
                        <img src={`${item.image}`} alt={`${item.title}`} />
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}