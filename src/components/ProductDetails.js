import React ,{useContext} from 'react';
import {Link} from "react-router-dom";
//context
import { ProductsContext } from '../context/ProductsContextProvider';

const ProductDetails = (props) => {
     const id = props.match.params.id;
     const data = useContext(ProductsContext);
     const product = data[id - 1];
     console.log(product)
     const {image,title,description,price,category} = product;
     
     return (
          <div>
               <img src={image}/>
               <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p>{category}</p>
               </div>
               <div>
                    <span>{price}</span>
                    <Link to="/products">Back to shop</Link>
               </div>
          </div>
     );
};

export default ProductDetails;