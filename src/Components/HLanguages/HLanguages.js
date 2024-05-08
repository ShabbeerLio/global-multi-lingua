import React from 'react'
import "./HLanguages.css"
import HLanguageData from './HLanguagesData'
import moreimg from "../../Assets/Languages/languages-00.svg"

const HLanguages = () => {
    return (
        <div className='HLanguages'>
            <div className='HLanguages-main'>
                <div className="HLanguages-heading">
                    <h2>Languages </h2>
                    <p>We are expert in language translation & interpretation services in  major languages. We deliver our propmt services in following ares  to our clients in order to make the communication more effective.</p>
                </div>
                <div className="hlanguages-box">
                    {HLanguageData.map((item) => (
                        <div className="hlanguages-card">
                            <img src={item.cover} alt="" />
                            <h3>{item.title}</h3>
                        </div>
                    ))}
                    <div className="hlanguages-card2">
                        <img src="https://www.verbalcraft.com/wp-content/uploads/2024/02/languages-big.png" alt="" />
                        <div className="hlanguages-card">
                            <img src={moreimg} alt="" />
                            <h3>And over 90 more languages</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HLanguages
