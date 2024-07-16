import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const Privacy = (props) => {

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
                <h1>Privacy Policy</h1>
                <p>All information including Name, Contact Number, Email id, requirement provided by the applicant/you on his website are secured and are used only for providing services to applicant/you. We neither disclose your information nor circulate it to third parties in accordance with the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011. Cookies may use to improve feature and our range of services for your better experience of using the Website.</p>
                
            </div>
        </div>
    )
}

export default Privacy
