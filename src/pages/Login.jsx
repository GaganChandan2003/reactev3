import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
 const [email, setemail] = useState('');
 const [password, setpassword] = useState('');
 const {auth,setauth}=useContext(AuthContext)
 const nav=useNavigate();
 const handleonclick=()=>
 {
  axios.post("https://reqres.in/api/login",{email,password})
  .then((r)=>{
        nav("/products");
        setauth(true);
  })
  .catch((e)=>{alert("404")})
 }
  return (
    <div>
      <input data-cy="login-email" onChange={(e)=>setemail(e.target.value)}/>
      <input data-cy="login-password"  onChange={(e)=>setpassword(e.target.value)} />
      <button data-cy="login-submit" onClick={handleonclick}>Login</button>
    </div>
  );
};

export default Login;
