import React, { useEffect } from 'react'
import "./Services.css"
import ServicesRight from './ServicesRight'
import languages from './ServiceData'
import timg from "../../Assets/Services/apostille.jpg"
import { useLocation } from 'react-router-dom'

const Apostille = (props) => {

    /* global dataLayer */
  const location = useLocation();

  useEffect(() => {
    document.title = props.title;

    const canonicalUrl = `${window.location.origin}${location.pathname}`;
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (canonicalLink) {
      canonicalLink.setAttribute("href", canonicalUrl);
    } else {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      canonicalLink.setAttribute("href", canonicalUrl);
      document.head.appendChild(canonicalLink);
    }

    const description = props.descriptions;
    let metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", description);
      document.head.appendChild(metaDescription);
    }

    // Ensure dataLayer is initialized before the GA script loads
    // window.dataLayer = window.dataLayer || [];
    // function gtag() {
    //   dataLayer.push(arguments);
    // }

    // Load the Google Analytics script only once
    // const gaScriptId = 'ga-gtag';
    // if (!document.getElementById(gaScriptId)) {
    //   const script = document.createElement('script');
    //   script.id = gaScriptId;
    //   script.async = true;
    //   script.src = 'https://www.googletagmanager.com/gtag/js?id=G-3BK9F87D6E';
    //   document.head.appendChild(script);

    //   script.onload = () => {
    //     gtag('js', new Date());
    //     gtag('config', 'G-3BK9F87D6E');
    //   };
    // }
  }, [props.title, props.descriptions, location.pathname]);

    return (
        <div className='Services'>
            <img src={timg} alt="" />
            <div className='Services-main'>
                <div className='Services-box'>
                    <div className='Services-left'>
                        <h1>Apostille Services</h1>
                        <p>We have been assiating corporate customers for a long time through our apostille services in Delhi. On behalf of our quality work, we have got an remarkable image in industry. we generally welcomes documents from representatives on behalf of MEA and Embassy of US to offer quite and fair apostille service.</p>
                    </div>
                    <div className='Services-right'>
                        <ServicesRight title={"Translators"} languages={languages} display={"grid"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apostille
