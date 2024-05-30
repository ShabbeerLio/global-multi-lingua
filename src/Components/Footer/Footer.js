import React from 'react'
import "./Footer.css"
import logo from "../../Assets/logo2.jpg"
import Form from '../Form/Form';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaGooglePlusG } from "react-icons/fa";

const Footer = (props) => {
    return (
        <div className='Footer'>
            <div className="footer-main">
                <div className="footer-box">
                    <div className="footer-menu">
                        <h3>About</h3>
                        <ul>
                            <li>
                                <a href="/about">About Us</a>
                            </li>
                            <li>
                                <a href="/careers">Careers</a>
                            </li>
                            <li>
                                <a href="/services">CSR</a>
                            </li>
                            <li>
                                <a href="/partners">Partners</a>
                            </li>
                            <li>
                                <a href="/">Become a freelancer</a>
                            </li>
                            <li>
                                <a href="/">Whistleblower</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-menu">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>
                                <a href="/platform">Platform</a>
                            </li>
                            <li>
                                <a href="/smart-editor">Smart Editor</a>
                            </li>
                            <li>
                                <a href="/integration">Integration</a>
                            </li>
                            <li>
                                <a href="/inlayout-editor">InLayout Editor</a>
                            </li>
                            <li>
                                <a href="/advanced-ai">Advanced AI</a>
                            </li>
                            <li>
                                <a href="/expert-service">Expert Service</a>
                            </li>
                            <li>
                                <a href="/information-security">Information security</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-menu">
                        <h3>Inportant Links</h3>
                        <ul>
                            <li>
                                <a href="/blog">Blog</a>
                            </li>
                            <li>
                                <a href="/developer-portal">Developer portal</a>
                            </li>
                            <li>
                                <a href="/customer-stories">Customer Stories</a>
                            </li>
                            <li>
                                <a href="/customer-videos">Customer Videos</a>
                            </li>
                            <li>
                                <a href="/recorded-webinars">Recorded webinars</a>
                            </li>
                            <li>
                                <a href="/">Sign up for our newsletter</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-menu">
                        <h3>Our Services</h3>
                        <ul>
                            <li>
                                <a href="/contact-us">Contact Us</a>
                            </li>
                            <li>
                                <a href="/locations">Locations</a>
                            </li>
                            <li>
                                <a href="/request-a-quote">Request a quote</a>
                            </li>
                            <li>
                                <a href="/watch-a-demo">Watch a demo</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-box2">
                    <p>Founded in 2020, <span>Global Multilingua Services</span> offers a language management ecosystem enabling enterprises to engage and communicate with any audience across the globe through bespoke AI technology and human expertise. Pursuing its vision of making global communications smarter and more efficient, LanguageWire adapts solutions to customer needs, automates workflows, and delivers multilingual communication services within a secure infrastructure</p>
                    <p> F-205/2, Ist Floor, Behind Bank of Baroda, Munirka, New Delhi, Delhi 110067 | Tel: +91-9968410010 , Office: +91 - 11-65165100 |  E-mail: info@globalmultilingua.com | enquiry@globalmultilingua.com</p>
                </div>
                <div className="footer-social">
                    <Link><FaTwitter /></Link>
                    <Link><FaLinkedinIn /></Link>
                    <Link><FaFacebookF /></Link>
                    <Link><FaGooglePlusG /></Link>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="footer-box3">
                    <ul>
                        <li><a href="/">Term & Conditions</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Email preferences</a></li>
                        <li><a href="/">Cookies</a></li>
                    </ul>
                </div>
                <p>© 2024 Global Multilingua Services </p>
                <p>Designed by :<a href="https://globalitsources.com/">&#160; Global IT Sources</a></p>
            </div>
        </div>
    )
}

export default Footer
