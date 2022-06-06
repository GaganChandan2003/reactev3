import React,{useContext, useEffect} from "react";
import axios from 'axios'
// import { CartContext } from "../../../context/CartContext";


const Product = () => {
    // const {count,setcount}=useContext(CartContext)
  const product = { id: 1 };
  // useEffect(()=>
  // {
  //         axios.get("http://localhost:8080/products")
  //         .then((r)=>setcount(r.data.length));
  // },[])
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name"></h3>
      <h6 data-cy="product-description"></h6>
      <button data-cy="product-add-item-to-cart-button"></button>
      <div>
        <button data-cy="product-increment-cart-item-count-button"></button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button"></button>
        <button data-cy="product-remove-cart-item-button"></button>
      </div>
    </div>
  );
};

export default Product;
