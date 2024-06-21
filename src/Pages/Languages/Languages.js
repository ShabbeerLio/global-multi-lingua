import React, { useContext, useEffect, useState } from 'react';
import "./Languages.css";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Languages = (props) => {

    const [apiDAta, setApiDAta] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [categoryId, setCategoryId] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
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

    useEffect(() => {
        const selectedCategory = apiDAta?.find(category => category.category === props.heading);

        if (selectedCategory) {
            setData(selectedCategory.subcategories);
            setCategoryId(selectedCategory._id);
        } else {
            setData([]);
        }
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
                    <div class="spinner-grow" role="status">
                        <span class="visually-hidden">Loading...</span>
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
                                <Link to={{ pathname: `/gmls/${categoryId}/${formatPathname(item.name)}` }}
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
