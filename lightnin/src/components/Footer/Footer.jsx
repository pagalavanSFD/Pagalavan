import React from 'react'
import './Footer.css';
import insta from '../assests/insta.jpeg';
import fb from '../assests/fb.jpeg';
import wp from '../assests/wp.jpeg';


const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div>
                <ul className='footer-links'>
                    <li>Company</li>
                    <li>Products</li>
                    <li>Offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className='footer-social-icon'>
                <div className="footer-icons-container">
                    <img src={insta} alt="" style={{height:'70px',width:'70px'}}/>
                </div>
                <div className="footer-icons-container">
                    <img src={fb} alt="" style={{height:'70px',width:'70px'}}/>
                </div>
                <div className="footer-icons-container">
                    <img src={wp} alt="" style={{height:'70px',width:'70px'}}/>
                </div>
                </div>
                <div className="footer-copyright">
                    <hr/>
                    <p>copyright @ 2320-All Right Reserved.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer