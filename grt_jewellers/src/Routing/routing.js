import React from 'react';
import { createBrowserRouter } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import Contact from '../pages/Contact';
import Footer from '../components/Footer';
import bootstrap from "../../node_modules/bootstrap/dist/js/bootstrap.min";

const routing = createBrowserRouter([
      
    {path:"", element:<Home/>,children:[
    {path:"about", element:<About/>},
    {path:"products", element:<Products/>},
    {path:"contact", element:<Contact/>},
    {path:"foot", element:<Footer/>},
]},
    
    
]);
export default routing;