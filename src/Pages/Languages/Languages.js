import React, { useEffect, useState } from 'react';
import "./Languages.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Host from '../Host';

const Languages = (props) => {

    const [apiDAta, setApiDAta] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    // const [categoryId, setCategoryId] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${Host}/api/clients/fetchallclients`, {
                    headers: {
                        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3NmEzNDQ1NzQyZjM1NjgyZTNlMWNjIn0sImlhdCI6MTcxOTA1MTA4NH0.OsZKI_I3GuMyljUYJmdqTCSxFWy_BPaNhDb2gfnXb6Q',
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
        const selectedCategory = apiDAta?.find(category => category.category === props.heading);
        // console.log(selectedCategory,"selectedCategory")

        if (selectedCategory) {
            setData(selectedCategory.subcategories);
            // setCategoryId(selectedCategory.category);
        } else {
            setData([]);
        }
        fetchData();
    }, [apiDAta, props.heading]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    const formatPathname = (pathname) => {
        return pathname.toLowerCase().replace(/\s+/g, '-');
    };

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
                    <img src="https://static.vecteezy.com/system/resources/previews/036/790/343/non_2x/ai-generated-world-map-in-an-image-of-gold-digital-circuits-and-circuits-on-earth-free-photo.jpg" alt="" />
                    <div className='Languages-main'>
                        <div className="language-title">
                            <h1>{props.heading} Language</h1>
                        </div>
                        <div className="languages-box">
                            {data.map((item) => (
                                <Link to={{
                                    pathname: `/${formatPathname(item.name)}-translation-services`
                                }}
                                    key={item._id}
                                    onClick={scrollToTop}>
                                    <div className="languages-card">
                                        <h5>{item.name}</h5>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Languages;
