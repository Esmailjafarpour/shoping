import React , {useState,useEffect,createContext} from 'react';
//Api
import {getProducts} from '../services/api';

export const ProductsContext = createContext();

const ProductsContextProvider = ({children}) => {

     const [products , setProducts] = useState([]);

     useEffect(() => {
         
          const fetchAPI = async () => {
               setProducts(await getProducts())
          }

          fetchAPI();

     }, []);

     console.log(products)
     return(
          <ProductsContext.Provider value={products}>
               {children}
          </ProductsContext.Provider>
     );
};

export default ProductsContextProvider;