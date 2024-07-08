import React, { useEffect, useState } from 'react';
import './LanguageCard.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Form from '../Form/Form';
import Host from '../../Pages/Host';

const LanguageCard = () => {
    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { pathName } = useParams();
    // Extract the actual name from the pathname
    const actualName = pathName.replace('-translation-services', '');

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${Host}/api/clients/fetchallclients`, {
                    headers: {
                        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3NmEzNDQ1NzQyZjM1NjgyZTNlMWNjIn0sImlhdCI6MTcxOTA1MTA4NH0.OsZKI_I3GuMyljUYJmdqTCSxFWy_BPaNhDb2gfnXb6Q',
                        'Content-Type': 'application/json',
                    },
                });

                const data = response.data;
                // Extract all subcategories
                const subcategories = data.reduce((acc, category) => {
                    return acc.concat(category.subcategories);
                }, []);
                setApiData(subcategories);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const formatPathname = (actualName) => {
        return actualName.toLowerCase().replace(/\s+/g, '-');
    };

    // const category = apiData?.find(category => category.category === categoryId);
    const subcategory = apiData?.find(sub => formatPathname(sub.name) === actualName);

    const formattedDescription = subcategory?.description.replace(/\n/g, '<br /><span class="br-padding"></span>');

    return (
        <div className='Languages'>
            {loading ? (
                <div className="loader">
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <>
                    <div className='LanguageCard-main'>
                        <div className='LanguageCard-box-left'>
                            <h1>{subcategory.name} Translation Services</h1>
                            <p dangerouslySetInnerHTML={{ __html: formattedDescription }}></p>
                        </div>
                        <div className="LanguageCard-box-right">
                            <Form />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default LanguageCard;
