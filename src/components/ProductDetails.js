import React ,{useContext,useEffect,useState} from 'react';
import {Link , useParams} from "react-router-dom";
import axios from 'axios';
//context
import { ProductsContext } from '../context/ProductsContextProvider';

//style
import styles from "./ProductDetails.module.css";

const ProductDetails = (props) => {
     //react-router-dom V5
     // const id = props.match.params.id;
     const [state ,setState] = useState({
          image:"",
          title:"",
          description:"",
          price:"",
          category:""
     });
     const params = useParams();
     const id = params.id;

     // useEffect(async() => {
     //      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
     //      setState({
     //           image:response.data.image,
     //           title:response.data.title,
     //           description:response.data.description,
     //           price:response.data.price,
     //           category:response.data.category 
     //      })
     // }, []);

     const data = useContext(ProductsContext);
     const product = data[id - 1];
     const {image,title,description,price,category} = product;

     
     return (
          <div className={styles.container}>
               <img className={styles.image} src={image} alt="product"/>
               <div className={styles.textContainer} >
                    <h3>{title}</h3>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.category}>{category}</p> 
                    <div className={styles.buttonContainer}>
                         <span className={styles.price}>{price} $</span>
                         <Link to="/products">Back to shop</Link>
                    </div>
               </div>
              
          </div>
     );
};

export default ProductDetails;