import React from 'react'
import { NavLink } from 'react-router-dom'
import ImageComp from '../assets/images/ImageComp';
import "../styles/dropdown.css"
function NavComp() {
    return (
<>
    <header>
        <div class="d-flex justify-content-around" style ={{padding:"20px",width:"100%",position: "fixed",boxshadow: "3px 3px 13px black"}}> 
        <NavLink to ="Jewellery">Jewellery</NavLink>{" "}
        <NavLink to ="Product">Products</NavLink>{" "}
        <img src ={ImageComp.grtlogo} alt ="grtlogo" height="50px" width="50px" style={{"border-radius": "50%"}}/>
        <NavLink to ="About">About us</NavLink>{" "}
        <NavLink to ="Contact">Contact us</NavLink>{" "}
    <div className="dropdown">
            <button className="dropbtn">Account</button>
            <div className="dropdown-content">
                <NavLink to="Login" className="dropdown-item">Login</NavLink>
                <NavLink to="Signup" className="dropdown-item">Signup</NavLink>
                {/* <NavLink to="/link3" className="dropdown-item">Link 3</NavLink> */}
            </div>
    </div>
        </div>
    </header>  

<main>
        
</main>     
</>
     
    )
}

export default NavComp
