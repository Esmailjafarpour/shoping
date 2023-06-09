import React , { useContext } from 'react';
import {Link} from "react-router-dom";

//context
import {CartContext} from '../../context/CartContextProvider';

//icons
import shopIcons from "../../assets/icons/shop.svg";

//style
import styled from "./Navbar.module.css";

const Navbar = () => {

     const {state} = useContext(CartContext);

     return (
          <div className={styled.mainContainer}>
               <div className={styled.container}>
                    <Link className={styled.productLink} to="/products">Products</Link>
                     <div className={styled.iconContainer}>
                         <Link to="/shopcart"><img src={shopIcons} alt="shopIcons"/></Link>
                         <span>{state.itemCounter}</span>
                    </div>
               </div>
              
          </div>
     );
}

export default Navbar;
