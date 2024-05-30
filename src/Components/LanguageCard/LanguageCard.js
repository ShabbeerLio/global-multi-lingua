import React from 'react'
import "./LanguageCard.css"
import { useParams } from 'react-router-dom';
import EuropianData from '../../Pages/Languages/EuropianData';
import AsianData from '../../Pages/Languages/AsianData';
import IndianData from '../../Pages/Languages/IndianDAta';

const LanguageCard = () => {

    const { name } = useParams();

    const allData = [...EuropianData, ...AsianData, ...IndianData];
    const language = allData.find(item => item.name === name);
    console.log(allData,"data")
    console.log(language,"language")

    if (!language) {
        return <div>Language not found</div>;
    }
    return (
        <div className='LanguageCard'>
            <div className='LanguageCard-main'>
                <div className='LanguageCard-box'>
                    <h1>{language.name}</h1>
                    <p>{language.description}</p>
                </div>
            </div>
        </div>
    )
}

export default LanguageCard
