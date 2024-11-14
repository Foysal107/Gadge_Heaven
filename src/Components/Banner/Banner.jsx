import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto text-center'>
        <h1 className='text-5xl font-bold m-5'>Dashboard</h1>
        <p className=''>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
 <div className='px-5 py-5 '>
<NavLink to="/Cart">  <button className='border px-5 m-5 '>Cart</button></NavLink>
<NavLink to="/Wishlist">   <button className='border px-5'>Wishlist</button></NavLink>
 </div>
  </div>
    );
};

export default Banner;