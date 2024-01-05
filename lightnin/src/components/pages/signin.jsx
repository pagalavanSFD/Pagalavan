import React,{useState} from "react";
import './CSS/signin.css'
import { Link } from "react-router-dom";
const Signup=()=>
{
  const[menu,setMenu] = useState("shop");
    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>SIGN UP</h1>
                <div className="logindignup-fields">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Email Address"/>
                    <input type="password" placeholder="Password"/>
                    
                </div>
                <button>Continue</button><br></br>
                <p className="loginsignup-login">Already have an account? <span> <Link to='./LoginSignUp'>Click here</Link></span></p>
                <div className="loginsignup-agree">
                {/* <Link to='/signup'><button onMouseOver={()=>{setMenu("signup")}}>SignUp</button></Link> */}
                <input type="checkbox" name='' id=''/>
                <p>By Clicking, i agree to the terms of use & privacy policy.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Signup;