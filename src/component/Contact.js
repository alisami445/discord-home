import React from 'react'
import "./contact.css"
import "./NavbarA"
import NavbarA from "./NavbarA"
const Contact = () => {
    return (
        <div className="cont">
            <NavbarA/>
             <form>     
    <input name="name" type="text" class="ainput" placeholder="Name" required/>   
    <input name="email" type="text" class="ainput" placeholder="Email" required/>
    <textarea name="text" class="ainput" placeholder="Comment" required></textarea>
    <input type="submit" value="SUBMIT"/>
  </form>
        </div>
    )
}

export default Contact
