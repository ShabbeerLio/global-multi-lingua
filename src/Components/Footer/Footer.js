import React from 'react'
import "./Footer.css"
import logo from "../../Assets/logo2.jpg"
import Form from '../Form/Form';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedinIn,FaFacebookF ,FaGooglePlusG  } from "react-icons/fa";

const Footer = (props) => {
    return (
        <div className='Footer'>
            <div className="footer-main">
                <div className="footer-logo">
                    <img src={logo} alt="" />
                    <p>We are well-established, client-focused Translation & Interpretation Services Company, based in New Delhi, India. All our translation, interpretation & transcription services are well known in Industry and deliver the flawless communication to complete the project accurately.</p>
                    <div className="footer-social">
                        <Link><FaTwitter /></Link>
                        <Link><FaLinkedinIn /></Link>
                        <Link><FaFacebookF  /></Link>
                        <Link><FaGooglePlusG  /></Link>
                    </div>
                </div>
                <div className="footer-menu">
                    <h3>Useful Links</h3>
                    <ul>
                        <li>
                            <a href="/about">About Us</a>
                        </li>
                        <li>
                            <a href="/our-clients">Our Clients</a>
                        </li>
                        <li>
                            <a href="/testimonials">Testimonials</a>
                        </li>
                        <li>
                            <a href="/our-team">Our Team</a>
                        </li>
                        <li>
                            <a href="/advantages">Advantages</a>
                        </li>
                        <li>
                            <a href="/brochure">Brochure</a>
                        </li>
                        <li>
                            <a href="/contactUs">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-menu">
                    <h3>Our Services</h3>
                    <ul>
                        <li>
                            <a href="/translation-services">Translative Services</a>
                        </li>
                        <li>
                            <a href="/interpretation-services">Interpretation Services</a>
                        </li>
                        <li>
                            <a href="/transcription-services">Transcription Services</a>
                        </li>
                        <li>
                            <a href="/simultaneous-equipment">Simultaneous Equipment</a>
                        </li>
                        <li>
                            <a href="/placement-&-consulting">Placement & Consulting</a>
                        </li>
                        <li>
                            <a href="/corporate-training">Corporate Training</a>
                        </li>
                        <li>
                            <a href="/apostille-services">Apostille Services</a>
                        </li>
                        <li>
                            <a href="/market-research">Market Research</a>
                        </li>
                    </ul>
                </div>
                {/* <div className="footer-menu">
                    <div className="footer-form">
                        <Form />
                    </div>
                </div> */}
            </div>
            <div className="footer-copyright">
                <p>© 2024 Global Multilingua Services </p>
                <p>Designed by :<a href="https://globalitsources.com/">&#160; Global IT Sources</a></p>
            </div>
        </div>
    )
}

export default Footer
