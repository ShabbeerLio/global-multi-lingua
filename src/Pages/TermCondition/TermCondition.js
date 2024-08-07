import React, { useEffect } from 'react'
import "./TermCondition.css"
import { useLocation } from 'react-router-dom';

const TermCondition = (props) => {

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
        <div className='TermCondition'>
            <div className='TermCondition-main'>
                <h1>Terms And Conditions</h1>
                <p>These Terms and Conditions (“Terms and Conditions”) are an electronic record that are bound between the user of this website (“Applicant/You/Yours”) and M/s Global Multilingua Services or www.globalmultilingua.com (“Company”). The applicant acknowledges that he/she has read all portions of Terms and condition and agrees to be bound by these conditions respectively. </p>
                <p>We (www.globalmultilingua.com or Global MultilinguaServices) shall not be bound by any separate agreement which is in writing signed by our representative.</p>
                <p>Please read all the following Terms and condition including Damages, Lost Document, Delayed Document, Cancellation and Refund Policy, Privacy Policy etc. carefully before using this website and/or availing any service from us.</p>
            </div>
        </div>
    )
}

export default TermCondition
