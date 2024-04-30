import React from 'react'
import "./HAbout.css"
import aboutimag from "../../Assets/about/banner.png"
import { Link } from 'react-router-dom'

const HAbout = () => {
  return (
    <div className='HAbout'>
      <div className="Habout-box">
        <div className="habout-left">
            <h2>Language Translation & Interpretation Service Provider !!</h2>
            <p>We are reputed language translation & interpretation service provider in Delhi under the name of Global Multilingua Services.  We have been rendering various services to Japanese Companies & renowned Indian corporate since January 2010. Global Multilingua Services is a provider of various services to corporate under one umbrella as well as industrial relocation services. </p>
            <div className="habout-button">
                <Link>About Us</Link>
            </div>
        </div>
        <div className="habout-right">
            <img src={aboutimag} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HAbout
