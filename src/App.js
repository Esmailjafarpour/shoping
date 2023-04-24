import './App.css';
import {Route,Switch,Redirect} from "react-router-dom";
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

          <Switch>
            <Route path="/products/:id" component={ProductDetails}/>
            <Route path="/products" component={Store}/>
            <Route path="/shopcart" component={ShopCart}/>
            <Redirect  to="/products"/>
          </Switch>

      </CartContextProvider>

    </ProductsContextProvider>

  )
  
}

export default App;
