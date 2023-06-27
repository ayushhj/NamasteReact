import { useState } from "react"
import { LOGO_URL } from "../utils/constant"

//Header Component
const Header= ()=>{

    const[loginBtn,setloginBtn] = useState("Login");
    return(
        <div className="header">
         <img className="logo" src= {LOGO_URL} />
         <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
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