import './App.css';
//components
import Store from './components/Store';
//cotext
import ProductsContextProvider from './context/ProductsContextProvider';


function App() {

  return (
    <ProductsContextProvider>
      <Store/>
    </ProductsContextProvider>
  );
}

export default App;
