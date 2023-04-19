import React from 'react';
import {Link} from 'react-router-dom';
import {shorten} from '../helper/function';

const Product = ({productData}) => {
    
     return (
          <div>
               <img src={productData.image} alt="product" style={{width : "200px"}}/>
               <h3>{shorten(productData.title)}</h3>
               <p>{productData.price}</p>
               <div>
                    <a href="#">details</a>
                    <button>Add To Card</button>
               </div>
          </div>
     );
}

export default Product;
