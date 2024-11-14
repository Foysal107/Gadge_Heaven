import React from 'react';
import {  NavLink } from 'react-router-dom';
const Dashboard = () => {
    return (
      <div>
        <div className='container mx-auto text-center'>
            <h1 className='text-5xl font-bold m-5'>Dashboard</h1>
            <p className=''>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
     <div className='px-5 py-5 '>
   <NavLink to="/Cart">  <button className='border px-5 m-5 '>Cart</button></NavLink>
  <NavLink to="/Wishlist">   <button className='border px-5'>Wishlist</button></NavLink>
     </div>
      <div className='flex container mx-auto justify-between'>
        <div className='font-bold text-xl'>Cart</div>

        <div className='flex gap-10'>
        <div className='font-bold text-xl'>Total cost:</div>
        <div><button className='border rounded-xl '>Sort by price</button></div>
        <div>Purchase</div>
        </div>
       
      </div>
        </div>




        
        </div>
    );
};

export default Dashboard;