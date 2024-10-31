import React from 'react';
import { assets } from '../../assets/assets';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer" id="footer">
                <div className="footer-content">
                    <div className="footer-content-left">
                        <img src={assets.logo} alt="" />
                        <p>Discover essential tech knowledge at TechBook, your go-to source for books on all the latest technologies. Empower your learning journey with expert insights and
                             tools tailored for every tech enthusiast. Explore, grow, and master new skills today.</p>
                        <div className="footer-social-icon">
                            <img src={assets.facebook_icon} alt="" />
                            <img src={assets.twitter_icon} alt="" />
                            <img src={assets.linkedin_icon} alt="" />
                        </div>

                    </div>
                    <div className="footer-content-right">
                        <h2>COMPANY</h2>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Delivery</li>
                            <li>Privacy policy</li>
                        </ul>
                    </div>
                    <div className="footer-content-center">
                        <h2>GET IN TOUCH</h2>
                        <ul>
                            <li>+91-8102183709</li>
                            <li>contact@Techbook.com</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="footer-copyright">Copyright 2024 © Techbook.com-All Right Reserved </p>
            </div>
        </div>
    )
}

export default Footer