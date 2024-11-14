import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getstoredcard } from '../utilities/Utilities';
import Product from '../Product/Product';


const Cart = () => {
    const [cardlist,setcardlist]=useState([]);
    const allproducts=useLoaderData();

    useEffect(()=>{
        const storedcard = getstoredcard();
        const storedcardint = storedcard.map(id=>parseInt(id));
        console.log(setcardlist,storedcardint,allproducts
        )
        const cardlist = allproducts.filter(product =>storedcardint.includes(product.product_id))
        setcardlist(cardlist)
    },[])
    return (
        <div className=' justify-center flex'>
            <h2>{
            cardlist.map(product=><Product key={product.product_id} product={product}></Product>)
            }</h2>
    
        </div>
    );
};

export default Cart;