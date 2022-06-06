import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Products from "../src/components/Products/Products"
import Product from "./components/Products/Product/Product";
function App() {
  return (
    <div className="App">
      {<>
         <Navbar/>
         <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path={'/login'} element={<Login/>}></Route>
         <Route path={'/products'} element={<Products/>}></Route>
         <Route path={'/product'} element={<Product/>}></Route>
         </Routes>
      </>
       
      }
    </div>
  );
}

export default App;
