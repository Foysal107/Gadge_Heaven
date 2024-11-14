import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaOpencart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { addToStoredCard, addToStoredWishlist } from '../Components/utilities/Utilities';

const ProductDetails = () => {
    const handleAddToCard=(id)=>{

addToStoredCard(id);
 const handleAddToWishlist=(id)=>{
  addToStoredWishlist=(id);
 }

    }
    const {Product_Id} = useParams();
    const data = useLoaderData();
    const id =parseInt(Product_Id);
   const product = data.find(product => product.product_id === id);
console.log(product)
const {product_title,price,product_image,rating,specification,description,product_id}=product;
    return (
      <div>
         <h1 className='text-center p-5 font-bold md:text-5xl'>Product Details</h1>
         <p className='text-center p-5'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
<div className="hero bg-base-200 min-h-screen">
    
  <div className="hero-content flex-col lg:flex-row">
   
    <img
      src={product_image}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{product_title}</h1>
      <p className="py-6 font-bold ">
      Price: $ {price}
      </p>
      <p className='border w-20 px-2 border-green-500 rounded-full'> in Stock</p>
      <p className='pt-3'>{description}</p>
     <p className='rating p-3'>
        Rating <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
     </p>
     <br />
     <div className=''>
     <button className="btn btn-primary mr-5 rounded-3xl  "  onClick={()=>handleAddToCard(product_id)}>Add To Card<FaOpencart /></button>
     <button className='border rounded-full btn py-3 bg-gray-400' onClick={()=>handleAddToWishlist()}><FiHeart /></button>
     </div>
      
    </div>
  </div>
</div>
    
      </div>
    );
};

export default ProductDetails;