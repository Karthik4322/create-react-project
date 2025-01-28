import { BrowserRouter } from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import React from 'react'
import About from "../components/About";
import Contact from "../components/Contact";
import PageNotFound from "../components/PageNotFound";
import Product from "../components/Product";
import NavComp from "./NavComp";
import Jewellery from "../components/Jewellery";
import Login from "../components/Login";
import Signup from "../components/Signup";
const MainRouting = () => {
   return (
      <div>  
       <> 
       <NavComp/>
   <Routes>
     <Route path="/" element={<Jewellery/>}/>
     <Route path="About" element={<About/>}/>
     <Route path="Contact" element={<Contact/>}/>
     <Route path="Product" element={<Product/>}/>
     <Route path="Login" element={<Login/>}/>
     <Route path="Signup" element={<Signup/>}/>

     <Route path="*" element={<PageNotFound/>}/>
   </Routes>
      </>
      </div>
   )
}

export default MainRouting


 