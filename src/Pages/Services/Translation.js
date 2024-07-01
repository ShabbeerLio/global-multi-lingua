import React from 'react'
import "./Services.css"
import ServicesRight from './ServicesRight'
import languages from './ServiceData'
import timg from "../../Assets/Services/translation-services.jpg"

const Translation = () => {
    return (
        <div className='Services'>
            <img src={timg} alt="" />
            <div className='Services-main'>
                <div className='Services-box'>
                    <div className='Services-left'>
                        <h1>Translation Services</h1>
                        <p>You need  to communicate in a variety of languages and cultures. Global   Multilingua  Services can help you bridge the cultural and language   gap. Global  Multilingua Services will extend your reach with   translation services and  guidance in navigating international social   customs.</p>
                        <p>Our language translation services are offered in over 20  different world languages. We have a specialized team of experienced professional  translators who translate only into their own mother tongues. Most of them have  degrees in a specialized domain of knowledge and in the translation profession. </p>
                        <p>At Global Multilingua Services we provide translation  services both to big corporate houses as well as small medium enterprises and  individuals. We strongly strive to maintain the  quality control  processes for all short of translation projects. So if you are looking for  outsourcing your company's language translation projects then you can consider  and rely on us as a profitable option as our work is based on accuracy and clients’  satisfaction.</p>
                        <h5>We are known for our  praiseworthy attributes that include: </h5>
                        <ul>
                            <li>Delivery of quality  & accurate work by trained and experienced native speakers.</li>
                            <li>Cost effective  pricing which includes proof reading without any hidden charge.</li>
                            <li>Customized and  comprehensive services are offered according to requirement.</li>
                            <li>Maintain the Confidentiality  of your documents.</li>
                            <li>Transparent cost  which does not include any hidden cost.</li>
                        </ul>
                        <p>Our language experts portfolio includes almost all major  Languages - Japanese, Chinese, Russian, French, Spanish, Portuguese, Italian, Polish, Persian, Arabic and Indian.</p>
                        <h5>Japanese Translators in Delhi</h5>
                        <p>Our translation  team has professional & experienced Japanese Translators.  All of our translators are experienced and capable enough to offer English to Japanese  or Japanese to English Translation Services.</p>
                        <h5>Chinese Translators in Delhi</h5>
                        <p> Our translation  team has professional & experienced Chinese Translators.  All of our translators are experienced and capable enough to offer English to Chinese  or Chinese to English Translation Services. </p>
                        <h5>Russian Translators in Delhi</h5>
                        <p>Our translation  team has professional & experienced Russian Translators.  All of our translators are experienced and capable enough to offer English to  Russian or Russian to English Translation  Services.</p>
                        <h5>German Translators in Delhi</h5>
                        <p>Our translation  team has professional & experienced German Translators.  All of our translators are experienced and capable enough to offer English to German  or German to English Translation Services.</p>
                        <h5>French Translators in Delhi</h5>
                        <p>Our translation  team has professional & experienced French Translators.  All of our translators are experienced and capable enough to offer English to French  or French to English Translation Services.</p>
                        <h5>Italian Translators in Delhi</h5>
                        <p>Our translation  team has professional & experienced Italian Translators.  All of our translators are experienced and capable enough to offer English to Italian  or Italian to English Translation Services.
                        </p>
                    </div>
                    <div className='Services-right'>
                        <ServicesRight title={"Translators"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Translation
