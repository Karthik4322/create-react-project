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
import Profile from "../components/Profile";
import Reviews from "../components/Reviews";

const MainRouting = () => {
   return (
      <div>  
       <> 
       {/* <NavComp/> */}
   <Routes>
   <Route path="/" element={<NavComp/>}/>
     <Route path="Jewellery" element={<Jewellery/>}/>
     <Route path="About" element={<About/>}/>
     <Route path="Contact" element={<Contact/>}/>
     <Route path="Product" element={<Product/>}/>
     <Route path="Login" element={<Login/>}/>
     <Route path="Signup" element={<Signup/>}/>
     <Route path="Profile" element={<Profile/>}/>
     <Route path="Reviews" element={<Reviews/>}/>

     <Route path="*" element={<PageNotFound/>}/>
   </Routes>
      </>
      </div>
   )
}

export default MainRouting


 