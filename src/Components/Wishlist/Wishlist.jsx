import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Product from '../Product/Product';
const Wishlist = () => {
    const [wishlist,setwishlistlist]=useState([]);
    const allproducts=useLoaderData();

    useEffect(()=>{
        const storedwishlist = getstoredwishlist();
        const storedwishlistint = storedwishlist.map(id=>parseInt(id));
       
        const wishlist = allproducts.filter(product =>storedwishlistint.includes(product.product_id))
        setwishlistlist(wishlist)
    },[])
    return (
        <div>
            <NavLink></NavLink>
           
            <h2>{
            wishlist.map(product=><Product key={product.product_id} product={product}></Product>)
            }</h2>
    
           <Footer></Footer>
        </div>
    );
};

export default Wishlist;