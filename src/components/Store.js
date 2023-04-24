import React,{useContext} from 'react';
//context
import { ProductsContext } from '../context/ProductsContextProvider';
//components
import Product from './shared/Product';

//style
import styled from "./Store.module.css";

const Store = () => {

     const products = useContext(ProductsContext);

     return (
          <div className={styled.container}>
                {products.map(product => 
                    <Product key={product.id} productData={product}/>
                )} 
          </div>
     );
}

export default Store;
