import React, { useEffect } from 'react'
import Banner from '../../Components/Banner/Banner'
import HService from '../../Components/HService/HService'
import HLanguages from '../../Components/HLanguages/HLanguages'
import HClients from '../../Components/HClients/HClients'
import ChooseUs from '../../Components/ChooseUs/ChooseUs'
import Needs from '../../Components/Needs/Needs'
import Wave from '../../Components/Wave/Wave'
import PresClients from '../../Components/PresClients/PresClients'
import Blog from '../../Components/Blog/Blog'
import { useLocation } from 'react-router-dom'

const Home = (props) => {

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
    <div className='Home'>
      <Banner />
      <ChooseUs />
      <HService />
      {/* <HLanguages/> */}
      <Needs />
      <PresClients />
      <HClients />
      <Blog />
      <Wave />
    </div>
  )
}

export default Home
