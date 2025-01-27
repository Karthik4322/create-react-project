import { BrowserRouter } from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import React from 'react'
import About from "../components/About";
import Contact from "../components/Contact";
import PageNotFound from "../components/PageNotFound";
import Product from "../components/Product";
import NavComp from "./NavComp";
import Jewellery from "../components/Jewellery";

function routing(){
    return(
    <>
    <NavComp/>   
    <Routes>
    <Route path="Home" element={<Jewellery/>}/>
    <Route path="About" element={<About/>}/>
    <Route path="Contact" element={<Contact/>}/>
    <Route path="Product" element={<Product/>}/>
    <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    </>
    )
}
     
export default routing

