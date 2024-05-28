import React from 'react'
import "./Services.css"
import ServicesRight from './ServicesRight'
import languages from './ServiceData'

const Interpretation = () => {
    return (
        <div className='Services'>
            <div className='Services-main'>
                <div className='Services-box'>
                    <div className='Services-left'>
                        <h1>Interpretation Services</h1>
                        <p>Global Multilingua Services is an emerging company in interpretation  service. We provide experienced interpreters of major languages. Our  interpreters are professional linguists with great fluency in many languages.  And they are not only experienced but also reliable and are pleasant to work  with. </p>
                        <p>we are able to advise you on the best approach  for your project.   Whether over the telephone or in person, we are always  available to   handle your project.  Global  Multilingua Services works to the highest   standards of professionalism and  quality in the Translation,   Interpretation and Localization industry. This means, our clients can    rely on our outstanding results. </p>
                        <h5>Our qualified interpreters provide you with: </h5>
                        <ul>
                            <li>Telephonic  interpretation Service.</li>
                            <li>Escort interpretation</li>
                            <li>Consecutive  interpretation</li>
                            <li>Simultaneous  interpretation</li>
                        </ul>
                        <h5>Our  professional and experienced interpreters facilitate sharp communication  between two parties in:</h5>
                        <ul>
                            <li>International  conferences</li>
                            <li>Court proceedings</li>
                            <li>Legal, political or  Technical meetings</li>
                        </ul>
                        <p>Generally the role of an interpreter  is to interpret the speaker's language  into the listener's language. Our expert linguists offer the exact  interpretation that is accurate and preserve the meaning of the spoken and  written word</p>
                        <p>We are always ready to deliver on-site and off-site services. Our core  competency is to offer the best quality as well as the competitive rate in the  industry. We provide experienced language interpreters for Japanese, Korean, German, French, Italian,  Spanish, English and other major languages.</p>
                        <h5>Japanese Interpreter in Delhi</h5>
                        <p>All of  our professional Japanese Interpreters in Delhi are well qualified and have strong  grip on the domain of Japanese interpretation services. They all have been well  trained of Japanese-to-English and English-to-Japanese Translation.  All team members of Japanese interpretation services in  Delhi are recruited to meet the exact requirements of clients. </p>
                        <h5>Chinese Interpreter in Delhi</h5>
                        <p>All of  our professional Chinese Interpreters in Delhi are well qualified and have strong  grip on the domain of Chinese interpretation services. They all have been well trained  of Chinese -to-English and English-to- Chinese Translation.  All team members of Chinese interpretation services in  Delhi are recruited to meet the exact requirements of clients. </p>
                        <h5>Korean Interpreter in Delhi</h5>
                        <p>All of  our professional Korean Interpreters in Delhi are well qualified and have strong  grip on the domain of Korean interpretation services. They all have been well trained  of Korean -to-English and English-to- Korean Translation.  All team members of Korean interpretation services in  Delhi are recruited to meet the exact requirements of clients. </p>
                        <h5>German Interpreter in Delhi</h5>
                        <p>All of  our professional German Interpreters in Delhi are well qualified and have strong  grip on the domain of German interpretation services. They all have been well trained  of German -to-English and English-to- German Translation.  All team members of German interpretation services in  Delhi are recruited to meet the exact requirements of clients. </p>
                        <h5>French Interpreter in Delhi</h5>
                        <p>All of  our professional French Interpreters in Delhi are well qualified and have strong  grip on the domain of French interpretation services. They all have been well trained  of French -to-English and English-to- French Translation.  All team members of French interpretation services in  Delhi are recruited to meet the exact requirements of clients. </p>
                        <h5>Russian Interpreter in Delhi</h5>
                        <p>All of  our professional Russian Interpreters in Delhi are well qualified and have strong  grip on the domain of Russian interpretation services. They all have been well trained  of Russian -to-English and English-to- Russian Translation.  All team members of Russian interpretation services in  Delhi are recruited to meet the exact requirements of clients. </p>
                    </div>
                    <div className='Services-right'>
                    <ServicesRight title={"Interpreters"} display={"grid"} languages={languages}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Interpretation
