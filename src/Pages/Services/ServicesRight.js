import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Form from '../../Components/Form/Form';

const ServicesRight = () => {

    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://gmls-backend.onrender.com/api/clients/fetchallclients', {
                    headers: {
                        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3NmEzNDQ1NzQyZjM1NjgyZTNlMWNjIn0sImlhdCI6MTcxOTA1MTA4NH0.OsZKI_I3GuMyljUYJmdqTCSxFWy_BPaNhDb2gfnXb6Q',
                        'Content-Type': 'application/json',
                    },
                });
                setApiData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const formatPathname = (pathname) => {
        return pathname?.toLowerCase().replace(/\s+/g, '-');
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    return (
        <div className='ServicesRight' >
            {/* <h4>{props.title}</h4>
            <img src="" alt="" />
            <span>Related Languages </span> */}
            <h4>Translation & Interpretation</h4>
            <div className="serviceright-box">
                <ul >
                    {apiData?.map((item) => (
                        <li key={item._id} >
                            <h5>{item.category}</h5>
                            <div className="serviceright-box-card">
                                {item.subcategories.slice(0, 6).map((j) => (
                                    <Link to={{ pathname: `/gmls/${item._id}/${formatPathname(j.name)}` }}
                                        key={j._id}
                                        onClick={scrollToTop}>
                                        {j.name}
                                    </Link>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="serviceright-form">
                <Form/>
            </div>
        </div>
    )
}

export default ServicesRight
