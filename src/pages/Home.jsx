import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate=useNavigate();
  return <div>{navigate('/login')}</div>;
};

export default Home;
