import React,{useState} from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import logo from '../assests/logo.png';
import cart from '../assests/cart.png';
 
const Navbar = () =>{
    const[menu,setMenu] = useState("shop");
    return(
        <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" style={{height:'90px',width:'90px'}}/>
            <p>McQueen Services</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("services")}}><Link style={{textDecoration:'none'}} to='/Services'>Services</Link>{menu==="Services"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("faqs")}}><Link style={{textDecoration:'none'}} to='/FAQs'>FAQs</Link>{menu==="faqs"?<hr/>:<></>}</li>
            {/* <li onClick={()=>{setMenu("about")}}><Link style={{textDecoration:'none'}} to='/About'>About</Link>{menu==="about"?<hr/>:<></>}</li> */}
            {/* <li onClick={()=>{setMenu("faqs")}}>FAQs{menu==="faqs"?<hr/>:<></>}</li> */}
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button onMouseOver={()=>{setMenu("login")}}>Login</button></Link>
            <Link to='/signup'><button onMouseOver={()=>{setMenu("signup")}}>Signup</button></Link>
            
        <Link to='/cart'><img src={cart} alt="" style={{height:'40px',width:'40px'}}/></Link>
            <div className="nav-cart-count">0</div>
        </div>
        </div>
    )
}
export default Navbar;