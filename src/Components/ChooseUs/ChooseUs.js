import React from 'react'
import "./ChooseUs.css"
import { FaHeadphonesAlt ,FaShieldAlt ,FaTruck ,FaUserCheck  } from "react-icons/fa";

const ChooseUs = () => {
    return (
        <div className='ChooseUs'>
            <div className='ChooseUs-main'>
                <div className="ChooseUs-heading">
                    <h6> Welcome to</h6>
                    <h2>Global Multilingua Services</h2>
                    <h5>Language Translation & Interpretation Service Provider !!</h5>
                    <p>We are reputed language translation & interpretation service provider in Delhi under the name of Global Multilingua Services. We have been rendering various services to Japanese Companies & renowned Indian corporate since January 2010. Global Multilingua Services is a provider of various services to corporate under one umbrella as well as industrial relocation services.</p>
                </div>
                <div className="chooseus-box">
                    <div className="chooseus-left">
                        <div className="chooseusleft-card">
                            <FaHeadphonesAlt/>
                            <h3>Our Expertise</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, velit!</p>
                        </div>
                        <div className="chooseusleft-card">
                            <FaShieldAlt />
                            <h3>Prompt in Services</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, velit!</p>
                        </div>
                        <div className="chooseusleft-card">
                            <FaTruck />
                            <h3>Efficient Execution</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, velit!</p>
                        </div>
                        <div className="chooseusleft-card">
                            <FaUserCheck />
                            <h3>Competetive Rate</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, velit!</p>
                        </div>
                    </div>
                    <div className="chooseus-right">
                        <img src="https://static.vecteezy.com/system/resources/previews/012/439/926/large_2x/business-people-group-on-meeting-free-photo.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseUs
