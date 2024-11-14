import React from 'react';
import ('./HomePage.css')
import bannerimg from'../../assets/banner.jpg'
import Products from '../Products/Products';
const HomePage = () => {
    return (
        <div > 
            <div className='container mx-auto text-center bg-purple-400 rounded-3xl
            ' >
         
         <h1 className='md:text-8xl'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
         <p className='text-white mt-5'>
         Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!  
         </p>
         <div className='  border h-553 w-5/6 flex justify-center p-5 rounded-3xl  mx-auto container'>

<img className=' rounded-2xl 
resized-image   shadow-xl ' src={bannerimg} alt="" />
</div>
            
    </div>
    <Products ></Products>
    </div>
    );
};

export default HomePage;