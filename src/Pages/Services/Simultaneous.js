import React, { useEffect } from 'react'
import "./Services.css"
import ServicesRight from './ServicesRight'
import languages from './ServiceData'
import timg from "../../Assets/Services/Simultaneous.png"
import { useLocation } from 'react-router-dom'

const Simultaneous = (props) => {

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
                        <h1>Simultaneous Equipment</h1>
                        <p>Simultaneous interpretation is a quite simple thing where an expert group of Interpreters receives wording of speakers who is addressing a conference or meeting and Interpreters are responsible to transform these works or statement simultaneously in other language. This is generally organized to facilitate delegates who are supposed to invite for a meeting but hails from different geographic location, and comfortably understand their native language. </p>
                        <p> All our experienced Simultaneous Interpreters are quite good in like Japanese, Chinese, Korean, Russian, Spanish, Japanese, Chinese, Korean, Russian, Spanish, French, Portuguese, Hindi, English, Arabic, Turkish, Persian, Ukrainian, Polish, German, Vietnamese and Indonesian language Simultaneous interpretation Services in India. We are flexible enough to deliver our services worldwide and ready to accept the client requirement for any location. </p>
                        <p> When it comes to commitments and quality performance there are very few options to choose in market. Here at Global Multiligua Services your search will end as we are highly focused towards the customer satisfaction and delivery of quality services. We have done quite satisfied Simultaneous interpretation works for lots of reputable clients and many of them have given their good and strong feedback which makes us so confident in any language for Simultaneous interpretation.</p>
                        <p> If you are looking for language Simultaneous Interpreters in India, Please send us your requirement at our email or call us at our direct nos.</p>
                    </div>
                    <div className='Services-right'>
                        <ServicesRight title={"Simultaneous Interpreters"} display={"grid"} languages={languages} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Simultaneous
