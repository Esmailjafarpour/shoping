import React,{useContext} from 'react';

//context
import {CartContext} from "../../context/CartContextProvider";

//function
import {shorten} from '../../helper/function';

//Icons
import trashIcon from "../../assets/icons/trash.svg";

//style
import styled from "./Cart.module.css";

const Cart = (props) => {

     const{dispatch} = useContext(CartContext);
     const {image , title , price , quantity} = props.data

     return (
          <div>
              <img src={image} alt="product" style={{width : "50px"}}/>
              <div>
                    <h3>{shorten(title)}</h3>
                    <p>{price}</p>
              </div>
              <div>
                    <span>{quantity}</span>
              </div>
               <div>

                    {
                         quantity > 1 ? 
                              <button onClick={() => dispatch({type : "DECREASE", payload : props.data})}>-</button>
                         :
                              <button onClick={() => dispatch({type : "REMOVE_ITEM", payload : props.data})}>
                                   <img src={trashIcon} alt="trashIcon" style={{width : "20px"}}/>
                              </button>

                    }

                    <button onClick={() => dispatch({type : "INCREASE", payload : props.data})}>+</button>

                    
               </div>
          </div>
     );
}

export default Cart;
