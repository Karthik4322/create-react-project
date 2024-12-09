import React from "react";
import "../styles/global.css";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div className="page">
      <div className="container mt-3">
                <div>
                    <div className="navbar bg-primary" data-bs-theme="dark">
                        <Header/>
                    <div class ="Welcomepage">
                    <h2>Welcome to Our Jewellery Shop</h2>
                    <p>Find the finest jewellery designed just for you.</p>
                    </div>
                    </div>
                    <div>
                        <Outlet/>
                        {/* // Outlet won't work in Fragment */}
                    </div>
                    <div>
                        {<Footer/>}
                    </div>
                </div>
            </div>
    </div>
  );
};

export default Home;
