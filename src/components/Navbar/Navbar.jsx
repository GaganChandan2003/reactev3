import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
// import { CartContext } from "../../context/CartContext";
// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const {auth,setauth}=useContext(AuthContext);
  // const {count}=useContext(CartContext);
  const nav=useNavigate();
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to={"/"} >Logo</Link>
      <span data-cy="navbar-cart-items-count">{0}</span>
      <button data-cy="navbar-login-logout-button" onClick={()=>{setauth(false);nav("/login")}}>{auth? "Logout" :"Login"}</button>
    </div>
  );
};

export default Navbar;
