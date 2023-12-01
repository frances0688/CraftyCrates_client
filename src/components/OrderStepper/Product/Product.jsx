import React, {useContext, useEffect} from 'react';
import {ProductContext} from '../../../context/ProductContext/ProductState';

const ThemeId = JSON.parse(localStorage.getItem("selectedThemeId"));
const BoxId = JSON.parse(localStorage.getItem("selectedBoxId"));

const Product = () => {
    const {products, getProductsInBox} = useContext(ProductContext);

    useEffect(() => {
        getProductsInBox(ThemeId, BoxId);
    }, []);

    return (
        <React.Fragment>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.product_name}</h2>
                    <p>{product.description}</p>
                </div>
            ))}
        </React.Fragment>
    );
};

export default Product;