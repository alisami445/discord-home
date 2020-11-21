import React from 'react'
import "./header.css"
import { Link } from "react-router-dom"
const NavbarB = () => {
    return (
        <div className="Navbar">
        <Link to="/"  style={{color:"white", textDecoration:"none" , border:"none"}}><h1><span style={{color:" #7ce4cc"}}>VOID</span>ER</h1></Link>
        <div className="Navbar-content">
            <Link to="/about" style={{color:"white", textDecoration:"none" , border:"none"}}><p>about</p></Link>
            <Link to="/contact" style={{color:"white", textDecoration:"none" , border:"none"}}><p>contact</p></Link>
            <Link to="/Signin" style={{color:"white", textDecoration:"none" , border:"none"}}><p className="loginC">sign in <br/> sign out</p></Link>
        </div>
    </div>
    )
}

export default NavbarB;
