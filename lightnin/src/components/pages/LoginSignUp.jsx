import React,{useState} from "react";
import './CSS/LoginSignup.css';
import { Link } from "react-router-dom";
const LoginSignup=()=>
{
  const[menu,setMenu] = useState("shop");
    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>LOGIN</h1>
                <div className="logindignup-fields">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Email Address"/>
                    <input type="password" placeholder="Password"/>
                    
                </div>
                <button>Continue</button><br></br>
                {/* <p className="loginsignup-login">Don't have an account? <span> Click here</span></p>
                 */}      <p className="loginsignup-login">Don't have an account? <span> <Link to='/signin'>Click here</Link></span></p>
                <div className="loginsignup-agree">
                {/* <Link to='/login'><button onMouseOver={()=>{setMenu("login")}}>Login</button></Link> */}
                <input type="checkbox" name='' id=''/>
                <p style={{color:'white'}}>By Clicking, i agree to the terms of use & privacy policy.</p>
                </div>
            </div>
            
        </div>
    )
}

export default LoginSignup;