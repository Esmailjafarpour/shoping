import React , {useState,useContext} from 'react';
import {Link} from 'react-router-dom';
import {shorten,isInCart,quantityCount} from '../../helper/function';

//context
import {CartContext} from "../../context/CartContextProvider";

//Icons
import trashIcon from '../../assets/icons/trash.svg';

//style
import styled from "./Product.module.css";


const Product = ({productData}) => {

     const {state , dispatch} = useContext(CartContext);
    
     return (
          <div className={styled.container}>
               <img className={styled.cardImage} src={productData.image} alt="product" style={{width : "200px"}}/>
               <h3>{shorten(productData.title)}</h3>
               <p>{productData.price}</p>

               <div className={styled.linkContainer}>
                    <Link to={`/products/${productData.id}`}>details</Link>
                    <div className={styled.buttonContainer}>
                         {quantityCount(state,productData.id) === 1 && <button className={styled.smallButton} onClick={() => dispatch({type : "REMOVE_ITEM" , payload : productData})}><img src={trashIcon} alt="trashIcon" style={{width : "15px"}}/></button>}
                         <span>{quantityCount(state,productData.id)}</span>
                         {quantityCount(state,productData.id) > 1 && <button className={styled.smallButton} onClick={() => dispatch({type : "DECREASE" , payload : productData})}>-</button>}

                         {isInCart(state,productData.id)?
                              <button className={styled.smallButton} onClick={()=> dispatch({type:"INCREASE",payload : productData})}>+</button>
                         :
                              <button onClick={()=> dispatch({type:"ADD_ITEM",payload : productData})}>ADD TO CART</button>
                         }

                         
                    </div>
               </div>
               
          </div>
     ); 
}

export default Product;
