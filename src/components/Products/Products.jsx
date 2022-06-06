import React, { useEffect,useState } from "react";
import axios from 'axios';

const Products = () => {
  const [data, setdata] = useState([]);
  
  useEffect(()=>
  {
    axios.get("http://localhost:8080/products")
    .then((r)=>setdata(r.data))
  },[])
  console.log(data);
  return (

  <>
  {
 data.map((el)=>
 (
   <div key={el.id}>
     <h3>{el.name}</h3>
     <h3>{el.description}</h3>
   </div>
 ))
  }
  
  </>
       
 

  );
};

export default Products;
