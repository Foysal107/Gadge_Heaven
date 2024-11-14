import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


const Products = () => {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./ProductsData.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div>
            <h3 className='text-center md:text-3xl font-extrabold'>Explore Cutting-Edge Gadgets</h3>
            <div className='container mx-auto  '>


           
                <div className=' grid  md:grid-cols-3 containers container mx-auto gap-6 '>
                    
                    {
                        Products.map(product => <Product  product={product} key={product.product_id}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;