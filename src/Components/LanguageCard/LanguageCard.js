import React, { useContext, useEffect, useState } from 'react';
import './LanguageCard.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const LanguageCard = () => {
    const { pathName, categoryId } = useParams();


    const [apiDAta, setApiDAta] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://gmls-backend.onrender.com/api/clients/fetchallclients', {
                    headers: {
                        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3NTEzZGNkMDQxNTA3NDY2MzZlZGRjIn0sImlhdCI6MTcxODk2NjYxMX0.s1bAckwPC4PpcEBYLw0ZX0h_ZiPFsWfRMpED6TEGFIU',
                        'Content-Type': 'application/json',
                    },
                });
                setApiDAta(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);



    const formatPathname = (pathname) => {
        return pathname.toLowerCase().replace(/\s+/g, '-');
    };

    const category = apiDAta?.find(category => category._id === categoryId);
    const subcategory = category?.subcategories.find(sub => formatPathname(sub.name) === pathName);


    // if (!subcategory) {
    //     return <div>Subcategory not found</div>;
    // }

    return (
        <div className='LanguageCard'>
            {loading ? (
                <div className="loader">
                    <div class="spinner-grow" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <>
                <div className='LanguageCard-main'>
                    <div className='LanguageCard-box'>
                        <h1>{subcategory.name} Translation Services</h1>
                        <p>{subcategory.description}</p>
                    </div>
                </div>
                </>
            )}
        </div>
    );
}

export default LanguageCard;
