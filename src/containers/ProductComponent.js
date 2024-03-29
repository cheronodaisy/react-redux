import React from "react";
import { Link } from "react-router-dom";
import { useSelector  } from "react-redux";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    // eslint-disable-next-line
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return(
            <div className="four column wide" key={id}>
            <Link to={`/product/${id}`}>
            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <div className="image">
                            <img src= { image } alt={title}></img>
                        </div>
                        <div className="content">
                            <div className="header">{title}</div>
                            <div className="meta-price">$ {price}</div>
                            <div className="meta">{category}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
        </div>
        );
        });
        return <>{renderList}</>;
    };

export default ProductComponent;