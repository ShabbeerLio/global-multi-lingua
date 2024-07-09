import React, { useEffect } from 'react'
import "./About.css"
import aboutimg from "../../Assets/about/person.png"
import { useLocation } from 'react-router-dom';

const About = (props) => {

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
    <div className='about'>
          <img src="https://static.vecteezy.com/system/resources/previews/027/187/311/large_2x/arab-man-confidently-points-towards-copy-space-on-yellow-background-for-designers-to-add-text-or-logos-free-photo.jpg" alt="" />
      <div className='about-main'>
        <div className="about-left">
        </div>
        <div className="about-right">
          <h1>About Us</h1>
          <p>Global  Multilingua Services (GMLS) has been rendering various services to Japanese Companies  & renowned Indian corporate since January 2010.  GMLS is a provider of  various services to corporate under one umbrella as well as industrial  relocation services. GMLS is committed to provide quick and reliable services to  clients with excellence, objectivity and integrity. GMLS is serving big  international companies as valuable clients.</p>
          <p>You want to sell your products and services to the world.  You need  to communicate in a variety of languages and cultures.GMLS can help you bridge the cultural and language gap. GMLS will extend your reach with translation services and  guidance in navigating international social customs.</p>
          <p>Based in New Delhi, India, GMLS is a well-established, client-focused Translation and Interpretation company. We have extensive resources and an excellent  track record – not to mention a worldwide network of qualified Translators and Interpreters. Thanks to our  vast experience as project managers, we are able to advise you on the best approach  for your project. Whether over the telephone or in person, we are always  available to handle your project.  GMLS works to the highest standards of professionalism and  quality in the Translation, Interpretation and Localization industry. This means that our clients can  rely on our outstanding results.</p>
          <p>In the race to compete in today’s global business environment, translation mistakes can be costly on many levels – loss of productivity, time, money, and even business. This is especially true of Japan and China where first impressions are critical for any business relationship to succeed and where the unique characteristics of the Japanese and Chinese languages require a well-trained professional translator to provide a fully transliterated, grammatically correct and culturally sensitive translation. Even a single bad impression is blunder for any business relationship to succeed in global business. Japanese and Chinese languages require a well-trained professional translator to provide a fully transliterated, grammatically correct and culturally sensitive translation.</p>
        </div>
      </div>
    </div>
  )
}

export default About
