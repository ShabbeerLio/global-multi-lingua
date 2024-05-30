import React from 'react'
import "./Services.css"
import ServicesRight from './ServicesRight'
import languages from './ServiceData'

const Simultaneous = () => {
    return (
        <div className='Services'>
                        <img src="https://static.vecteezy.com/system/resources/previews/009/311/650/non_2x/business-people-and-lawyers-discussing-contract-papers-legal-planning-concepts-of-law-advice-legal-services-free-photo.jpg" alt="" />
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
