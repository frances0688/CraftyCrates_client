import React, {useContext, useEffect} from 'react'
import {ProductContext} from '../../context/ProductContext/ProductState';

const Product = () => {
    const {products, getProducts} = useContext(ProductContext);
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            {products.map((product) => {
                return (
                    <div key={product.id}>
                        <h2>{product.product_name}</h2>
                        <p>{product.description}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default Product