import React from 'react'
import { NavLink } from 'react-router-dom'
import ImageComp from '../assets/images/ImageComp';
function NavComp() {
    return (
<>
<header>
<div class="d-flex justify-content-around" style ={{padding:"20px",width:"100%",position: "fixed",boxshadow: "3px 3px 13px black"}}>     
    <NavLink to ="/">Jewellery</NavLink>{" "}
    <NavLink to ="Product">Products</NavLink>{" "}
    <img src ={ImageComp.grtlogo} alt ="grtlogo" height="50px" width="50px" style={{"border-radius": "50%"}}/>
    <NavLink to ="About">About us</NavLink>{" "}
    <NavLink to ="Contact">Contact us</NavLink>{" "}
    <NavLink to ="Signup">Login</NavLink>{" "}
    
    </div>  
</header>    
</>
     
    )
}

export default NavComp
