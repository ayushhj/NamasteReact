import { useState } from "react"
import { LOGO_URL } from "../utils/constant"
import { Link } from "react-router-dom";

//Header Component
const Header= ()=>{

    const[loginBtn,setloginBtn] = useState("Login");
    return(
        <div className="header">
         <img className="logo" src= {LOGO_URL} />
         <div className="nav-items">
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/About" >About Us</Link></li>
                <li><Link to="/contact" >Contact Us</Link></li>
                
                <li>Cart</li>
                <button className="loginbtn" onClick={()=>{
                    loginBtn==="Login"?setloginBtn("Logout"):setloginBtn("Login")
                    
                }} >{loginBtn}</button>
                
            </ul>
         </div>

        </div>

       

    )
}

export default Header