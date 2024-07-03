import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Host from '../Host';

const Services = () => {
    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${Host}/api/service/fetchallservice`, {
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
    return (
        <div className='Services'>
            {loading ? (
                <div className="loader">
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <>
                    <img src="https://static.vecteezy.com/system/resources/previews/009/311/650/non_2x/business-people-and-lawyers-discussing-contract-papers-legal-planning-concepts-of-law-advice-legal-services-free-photo.jpg" alt="" />
                    <div className='Services-main'>
                        <h1>Our Services</h1>
                        <div className="hService-box">
                            {apiData?.map((item) => (
                                <div className="hservice-card" key={item._id}>
                                    <div className="hsrevices-image">
                                        <img src={item.imageUrl} alt="" />
                                    </div>
                                    <h4>{item.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </>)}
        </div>
    )
}

export default Services
