import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";


const Header = () => {
  return (
    <header className={styles.header}>
      <img src="../assets/images/GRT_Logo.png"/>
      <nav>
        <Link to="/"><button type="button" className="btn btn-dark">Home</button></Link>
        <Link to="/about"><button type="button" className="btn btn-dark">About</button></Link>
        <Link to="/products"><button type="button" className="btn btn-dark">Products</button></Link>
        <Link to="/contact"><button type="button" className="btn btn-dark">Contact</button></Link>
        <Link to="/"></Link>
      </nav>
    </header>

  );
};

export default Header;
