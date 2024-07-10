import React, { useEffect } from 'react'
import "./Industry.css"
import IndustryData from './IndustryData'
import { useLocation } from 'react-router-dom';

const Industry = (props) => {

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
        <div className='Industry'>
            <img src="https://static.vecteezy.com/system/resources/previews/038/502/788/non_2x/ai-generated-businessman-looking-at-machinery-in-an-industry-factory-free-photo.jpg" alt="" />
            <div className='Industry-main'>
                <h1>Industry</h1>
                <p>A brief explanation why customers from different industries have hired us for Translations and Interpretation.</p>
                <div className='Industry-box'>
                    <p>Global Multilingua Services provides Translation and Interpretation Industries solutions to the leading firms for increase the productivity with fast, dependable and correct Translation and Interpretation over 200 languages for all industries in India and across the world. Every project is individually assessed and only the qualified project manager and groups of language professionals in the respective field and native to the target language are selected to fulfil the respective project. Our clients consider our ability to assign the precise technical and professional expert to respected project which will assist you in your case work.</p>
                    <ul>
                        <li>Alomot Every Industry & segment we have covered.</li>
                        <li>We have experienced manpower for project execution.</li>
                        <li>We have good repution among our existing customers. </li>
                        <li>Timr delivery with perfection is our prime concern.</li>
                    </ul>
                    <h3>Industry We Served</h3>
                    <p>We offered the top quality  Translations and Interpretation services to following Industry segment.</p>
                    <div className="industry-serve">
                        {IndustryData.map((industry, index) => (
                            <div className="industry-serve-card" key={index}>
                                <p>{industry.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Industry
