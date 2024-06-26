import React, { useEffect, useState } from 'react'
import "./HService.css"
import HServicesData from './HServicesData'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { FaArrowRightLong } from "react-icons/fa6";

const HService = () => {
    
    const scroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }
    
    const host ="https://gmls-backend.onrender.com"
    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${host}/api/service/fetchallservice`, {
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
        <div className='HService'>
            <div className='HService-main'>
                <div className="hService-heading">
                    <h2>Our Services</h2>
                    <p>We are expert in language translation & interpretation services in  major languages. We deliver our propmt services in following ares  to our clients in order to make the communication more effective.</p>
                </div>
                <div className="hService-box">
                    {apiData?.map((item) => (
                        <div className="hservice-card" key={item._id}>
                            <div className="hsrevices-image">
                                <img src={`${host}${item.imageUrl}`} alt="" />
                            </div>
                            <h4>{item.title}</h4>
                        </div>
                    ))}
                </div>
                <div className="hServices-button">
                    <Link to={"/gmls/services"} onClick={scroll}>View More</Link>
                </div>
            </div>
        </div>
    )
}

export default HService
