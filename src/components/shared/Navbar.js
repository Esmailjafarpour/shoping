import React , { useContext } from 'react';
import {Link} from "react-router-dom";

//context
import {CartContext} from '../../context/CartContextProvider';

//icons
import shopIcons from "../../assets/icons/shop.svg";

const Navbar = () => {

     const {state} = useContext(CartContext);

     return (
          <div>
               <div>
                    <Link to="/products">Products</Link>
                     <div>
                         <Link to="/shopcart"><img src={shopIcons} alt="shopIcons"/></Link>
                         <span>{state.itemCounter}</span>
                    </div>
               </div>
              
          </div>
     );
}

export default Navbar;
