import './App.css';
//react-router-dom V5
// import {Route,Switch,Redirect} from "react-router-dom";

//react-router-dom V6
import {Route,Routes,Navigate} from "react-router-dom";
//components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/shopCart';

//cotext
import ProductsContextProvider from './context/ProductsContextProvider';
import CartContextProvider from './context/CartContextProvider';



function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
          <Navbar/>
          {/* <Switch>
            <Route path="/products/:id" component={ProductDetails}/>
            <Route path="/products" component={Store}/>
            <Route path="/shopcart" component={ShopCart}/>
            <Redirect  to="/products"/>
          </Switch> */}
          <Routes>
            <Route path="/products/:id" element={<ProductDetails/>}/>
            <Route path="/products" element={<Store/>}/>
            <Route path="/shopcart" element={<ShopCart/>}/>
            <Route path="/*" element={<Navigate  to="/products"/>}/>
          </Routes>
      </CartContextProvider>
    </ProductsContextProvider>
  )
}

export default App;
