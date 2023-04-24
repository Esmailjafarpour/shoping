import React,{useContext} from 'react';
import {Link} from "react-router-dom";

//componenets
import Cart from "../components/shared/Cart";

//context
import {CartContext} from '../context/CartContextProvider';

//style
import styled from "./ShopCart.module.css";


const ShopCart = () => {

     const {state , dispatch} = useContext(CartContext)
     return (
          <div className={styled.container}>
               <h2>shop Carts</h2>
               <div>
                    {state.selectedItem.map(item => <Cart key={item.id} data={item}/>)}
               </div>

               {state.itemCounter > 0 && 
                        
                    <div>
                         <p><span>Total Items :</span>{state.itemCounter}</p>
                         <p><span>Total Payments :</span>{state.total}</p>
                         <div>
                              <button onClick={() => dispatch({type : "CHECKOUT"})}>Check Out</button>
                              <button onClick={() => dispatch({type : "CLEAR"})}>Clear</button>
                         </div>
                    </div>
                }

                {
                    state.checkout && 
                    <div>
                         <h3>Check Out SuccsessFully</h3>
                         <Link to="/products">Buy More</Link>
                    </div>
                }

                {
                    !state.checkout && state.itemCounter === 0 &&
                    <div>
                         <h3>Want To Buy</h3>
                         <Link to="/products">Go To Shop</Link>
                    </div>
                }

                    
               

          </div>
     );
}

export default ShopCart;
