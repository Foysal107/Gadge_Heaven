import React from 'react';
import ("./Product.css")
import { Link } from 'react-router-dom';

const Product = ({ product}) => {
    const { product_image, product_title, category, price, description, rating, product_id } = product
    return (
        <div className="card card-compact img-container bg-base-100 w-96 shadow-xl p-5  rounded-xl">
           
          <figure >
                <img className='rounded-2xl  szie'
                    src={product_image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">

                <h2 className="card-title font-bold">{product_title}</h2>
                <p>Price : {price}</p>
                <div className="card-actions justify-end">
           
                <Link to={`Products/${product_id}`}> <button>View Details</button>
                </Link>
               
        
                </div>
            </div>
        </div>
    );
};

export default Product;