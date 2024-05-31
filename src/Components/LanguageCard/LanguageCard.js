import React from 'react';
import './LanguageCard.css';
import { useParams } from 'react-router-dom';
import LanguageData from '../../Pages/Languages/LanguageData';

const LanguageCard = () => {
    const { pathName, categoryId } = useParams();

    const formatPathname = (pathname) => {
        return pathname.toLowerCase().replace(/\s+/g, '-');
    };

    const category = LanguageData.find(cat => cat.id === parseInt(categoryId));
    const subcategory = category?.subcategories.find(sub => formatPathname(sub.name) === pathName);

    if (!subcategory) {
        return <div>Subcategory not found</div>;
    }

    return (
        <div className='LanguageCard'>
            <div className='LanguageCard-main'>
                <div className='LanguageCard-box'>
                    <h1>{subcategory.name}</h1>
                    <p>{subcategory.description}</p>
                </div>
            </div>
        </div>
    );
}

export default LanguageCard;
