import React from 'react'
import "./Services.css"
import ServicesRight from './ServicesRight'
import languages from './ServiceData'
import timg from "../../Assets/Services/apostille.jpg"

const Apostille = () => {
    return (
        <div className='Services'>
            <img src={timg} alt="" />
            <div className='Services-main'>
                <div className='Services-box'>
                    <div className='Services-left'>
                        <h1>Apostille Services</h1>
                        <p>We have been assiating corporate customers for a long time through our apostille services in Delhi. On behalf of our quality work, we have got an remarkable image in industry. we generally welcomes documents from representatives on behalf of MEA and Embassy of US to offer quite and fair apostille service.</p>
                    </div>
                    <div className='Services-right'>
                        <ServicesRight title={"Translators"} languages={languages} display={"grid"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apostille
