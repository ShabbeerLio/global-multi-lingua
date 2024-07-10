import React, { useEffect } from 'react'
import "./Clients.css"
import ClientData from './ClientsData'
import { useLocation } from 'react-router-dom';

const Clients = (props) => {

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
        <div className='Clients'>
            <div className="clients-banner">
                <img src="https://static.vecteezy.com/system/resources/previews/021/134/153/non_2x/businessman-shaking-hands-indicating-agreement-business-investment-loan-approval-buying-or-mortgaging-a-home-property-insurance-real-estate-business-home-insurance-and-investment-loan-free-photo.jpg" alt="" />
            </div>
            <div className='Clients-main'>
                <h1>Our Clients</h1>
                <p>As we have worked with numerous industry leaders which shines our expertise in language translations & interpretation. Here we have shown some of our prestigious clients.</p>
                <div className='Clients-box'>
                    {ClientData.map((item) => (
                        <div className='Clients-card' key={item.id}>
                            <img src={item.cover} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Clients
