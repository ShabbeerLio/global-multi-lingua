import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const Disclaimer = (props) => {

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
                <h1>Disclaimer</h1>
                <p>We receive the application for attestation from the applicant and charge the applicable fees for further process. We do hereby declare that we have no role whatsoever in the assessment of an attested document, which is sole right of concerned authorities/Departments. </p>
                <p>So, once the documents have been delivered to the Applicants, we are not in any means or responsible for any contents of attested certificate or documents.</p>
                <p><span>Damages:</span> The document is handled by various persons during attestation process. We will take responsibility for a damaged document, if occurred during the attestation. Though, we are not responsible for the damages stated below. </p>
                <ul>
                    <li>Damage occurred due to the negligence of any Government authorities other than www.globalmultilingua.com or Global Multilingua Services.</li>
                    <li>Damage occurred due to Stapling: stapling is a common practice in attestation office. We will not be responsible for any stapling that may occur throughout the process of attestation. </li>
                    <li>Damage occurred due to removing the Lamination document of back side:  attestation is done on the reverse side of the document and the unavoidable damage may occur during removing the lamination before attestation, but this is rare. We will not be responsible for such damages. </li>
                </ul>
                <p><span>Lost Document:</span> if the document has lost in the unlikely incident, we will bear the cost involved in obtaining the duplicate copies only. The supporting documents will be provided by the applicant to us. We shall not be responsible for the issuance of new certificate, in case applicant fails to produce any required supporting document(s) to us. We shall not be responsible for any indirect loss arising from this situation and we shall not indemnify the consequential damages of any nature.</p>
                <p><span>Delayed Document:</span> The attestation of document is fully dependent on the concerning authority of government and all the rules and regulations and time frames are directed on the basis of shared experience. Timeframes, rules and regulations may be changed from time to time by the concerning authority. Due to delay, there will be no reduction in the Service Charge, as our Services is not responsible for such circumstances. Because of delay in processing of the documents, we also cannot be responsible for any loss arising due to delaying.</p>
                <h5>Cancellation and Refund Policy:</h5>
                <p>A.	The Company reserves the right to cancel your service request if:</p>
                <ul>
                    <li>The www.globalmultilingua.com or Global Multilingua Services has the opinion that any documents submitted by You are discrepant, erroneous, misleading / incomplete in information; and</li>
                    <li>The concerned Authority/ Consulate/Embassy/ Ministry/ for approval is has the opinion that documents submitted by the applicant cannot be attested and/or authorized for any reason whatsoever.</li>
                    <li>The cancellation of Your Application is Subject to the above circumstances that lead to cessation of the services provided by the Company to applicant, and applicant agree that applicant shall not be eligible for any reimbursements/ refunds/ claims thereof.</li>
                </ul>
                <p>B.Cancellation</p>
                <p>No cancellation or refund shall be entertained, once the request for services, has been initiated by the applicant. The www.globalmultilingua.com or Global Multilingua Services reserves the exclusive right to refuse any refunds for the service fees charged by us for any cancelled services, for any whatsoever reasons. However, if there are any errors occurred in the attestation process which are proved to be our negligence and different to the Services provided by the applicant, a full refund will be issued to the applicant. All refunds will be limited to the amount paid by the applicant.</p>
                <p><span>Damage /delay by courier company:</span> If the applicant availing the courier services for document transportation from the applicant end or our end, the applicant confirms and he is aware that the courier transporting services has been performed by the third party and we do not assure liability or responsibility for any deficiency in case of losing or damaging of documents in transportation. We shall not be responsible for such issues like lost /damage /delay of documents by courier company.</p>
                <p><span>Fakes Document:</span> Any rejection due to submission of bogus/ fictitious/doctored documents by the applicant, it shall be the responsibility of the applicant and We shall not be responsible for that. if any document is deemed to be doubtful, we have the exclusive right not to process the attestation of such documents. We shall not return such documents and shall not refund any amount collected including taxes, in case the concerned authority declares the document as fake. We do not provide pre-authentication of documents services to the applicant(s). In such event, we disclaim all rights, liabilities in the event of facilitating pre-authentication services to the applicant(s).</p>
                <p><span>Beyond the reasonable control:</span>In case we are restricted, prevented or affected because of strikes and lockouts, fire, labour disputes or other casualty or accident, hostility or terrorist action, explosion,  war, acts of public enemy, sabotage, flood, civil commotion, natural calamities, quarantine restriction, epidemic, Act of God or any act, any law or regulation of any Government, or condition whatsoever beyond our reasonable control.</p>
                <p><span>Intellectual Property:</span> All Contents including Designs/ copyright/ Geographical Indication/ Patents/ trademark of the Company published on the Website, including graphics, logos, text, icons, images, video clips, sound clips, data compilations, underlying code, software and page layout are the property of the Company, except your own individual information, such material is protected by applicable laws. You cannot copy, reproduce, store, distribute in any other means of re-use material from the Website without our consent.</p>
                <p><span>Limited Liability:</span> The www.globalmultilingua.com or Global Multilingua Services has no liability for any direct or indirect loss or damage, consequential, special or exemplary foreseeable or otherwise, including any indirect damages arising from the use of the Website or therein any information contained, to the maximum extent permitted by law. </p>
                <p><span>Changes:</span> The www.globalmultilingua.com or Global Multilingua Services reserves the right, at its sole discretion, to change, add or alter, modify, remove any portion of these Terms and conditions in whole or in portion, at any time, without serving any prior notice to applicant or you. It shall be deemed as Your or applicant’s acceptance of those changes, if the use of the website continues after any changes to these Terms and conditions by You or applicant.</p>
                <p>Further, the www.globalmultilingua.com or Global Multilingua Services, may terminate, suspend or change, discontinue any aspect of the website including the availability of any features of the website, at any time and we also impose limits on certain services and features or restrict your/applicant access to parts or the entire website without any prior notice or liability.</p>
                <p><span>Communications/ Correspondence:</span>All the communications are to be served by us, if service request is sent to the respective address specified below as contemplated by these Terms and Conditions shall be deemed to have been duly served: </p>
                <div className="term-add">
                    <p>To,</p>
                    <p>M/s GLOBAL MULTILINGUA SERVICES</p>
                    <p>F-205/2, IST FLOOR</p>
                    <p>MUNIRKA, NEAR BANK OF BRODA</p>
                    <p>NEW DELHI- 110067 INDIA</p>
                    <p>Mobile: +91-9013418980 (WhatsApp)
                    </p>
                </div>
                <p><span>Jurisdiction:</span> The Court in Delhi shall have alone and exclusive jurisdiction over any dispute arising out of tender upon or in relation to these terms and conditions.</p>
                <p>Further the www.globalmultilingua.com or Global Multilingua Services, may suspend, terminate, change or discontinue any aspect of these Terms and Conditions. </p>
                <p>The terms and conditions are an electronic record in terms of Information Technology Act, 2000 and published in accordance with the provisions of Rule 3 of the Information Technology (Intermediaries Guidelines) Rules, 2011 that requires publishing the rules and regulations, privacy policy, disclaimer policy and Terms and Conditions.</p>
            </div>
        </div>
    )
}

export default Disclaimer
