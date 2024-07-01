import React from 'react'
import "./Footer.css"
import logo from "../../Assets/logo2.jpg"
import Form from '../Form/Form';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaGooglePlusG } from "react-icons/fa";

const Footer = (props) => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    return (
        <div className='Footer'>
            <div className="footer-main">
                <div className="footer-box">
                    <div className="footer-menu">
                        <h3>About</h3>
                        <ul>
                            <li>
                                <Link onClick={scrollToTop} to="/gmls/about">About Us</Link>
                            </li>
                            <li>
                                <Link onClick={scrollToTop} to="/gmls/careers">Careers</Link>
                            </li>
                            <li>
                                <Link onClick={scrollToTop} to="/gmls/services">CSR</Link>
                            </li>
                            <li>
                                <Link onClick={scrollToTop} to="/gmls/partners">Partners</Link>
                            </li>
                            <li>
                                <Link onClick={scrollToTop} to="/gmls/">Become a freelancer</Link>
                            </li>
                            <li>
                                <Link onClick={scrollToTop} to="/gmls/">Whistleblower</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-menu">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>
                                <Link onClick={scrollToTop} to="/gmls/platform">Platform</Link>
                            </li>
                            <li>
                                <Link onClick={scrollToTop} to="/gmls/smart-editor">Smart Editor</Link>
                            </li>
                            <li>
                                <Link onClick={scrollToTop} to="/gmls/integration">Integration</Link>
                            </li>
                            <li>
                                <Link onClick={scrollToTop} to="/gmls/inlayout-editor">InLayout Editor</Link>
                            </li>
                            <li>
                                <Link onClick={scrollToTop} to="/gmls/advanced-ai">Advanced AI</Link>
                            </li>
                            <li>
                                <Link onClick={scrollToTop} to="/gmls/expert-service">Expert Service</Link>
                            </li>
                            <li>
                                <Link onClick={scrollToTop} to="/gmls/information-security">Information security</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-menu">
                        <h3>Inportant Links</h3>
                        <ul>
                            <li>
                                <Link onClick={scrollToTop} href="/gmls/blogs">Blog</Link>
                            </li>
                            <li>
                                <Link onClick={scrollToTop} href="/gmls/developer-portal">Developer portal</Link>
                            </li>
                            <li>
                                <Link onClick={scrollToTop} href="/gmls/customer-stories">Customer Stories</Link>
                            </li>
                            <li>
                                <Link onClick={scrollToTop} href="/gmls/customer-videos">Customer Videos</Link>
                            </li>
                            <li>
                                <Link onClick={scrollToTop} href="/gmls/recorded-webinars">Recorded webinars</Link>
                            </li>
                            <li>
                                <Link onClick={scrollToTop} href="/gmls/">Sign up for our newsletter</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-menu">
                        <h3>Our Services</h3>
                        <ul>
                            <li>
                                <Link onClick={scrollToTop} to="/gmls/translation-services">Translation Services</Link>
                            </li>
                            <li>
                                <Link onClick={scrollToTop} to="/gmls/interpretation-services">Interpretation Services</Link>
                            </li>
                            <li>
                                <Link onClick={scrollToTop} to="/gmls/transcription-services">Transcription Services</Link>
                            </li>
                            <li>
                                <Link onClick={scrollToTop} to="/gmls/apostille-services">Apostille Services</Link>
                            </li>
                            <li>
                                <Link onClick={scrollToTop} to="/gmls/simultaneous-equipment">Simultaneous Equipment</Link>
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
                        <li><Link onClick={scrollToTop} to="/gmls/">Term & Conditions</Link></li>
                        <li><Link onClick={scrollToTop} to="/gmls/">Privacy Policy</Link></li>
                        <li><Link onClick={scrollToTop} to="/gmls/">Email preferences</Link></li>
                        <li><Link onClick={scrollToTop} to="/gmls/">Cookies</Link></li>
                    </ul>
                </div>
                <p>© 2024 Global Multilingua Services </p>
                <p>Designed by :<a href="https://globalitsources.com/">&#160; Global IT Sources</a></p>
            </div>
        </div>
    )
}

export default Footer
