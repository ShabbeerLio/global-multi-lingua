import React, { useEffect, useState } from 'react'
import "./Blogs.css"
import { Link } from 'react-router-dom';
import BlogData from '../../Components/Blog/BlogData';
import axios from 'axios';
import Host from '../Host';

const Blogs = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    // api calling

    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${Host}/api/blog/fetchallblog`, {
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
        return pathname.toLowerCase().replace(/\s+/g, '-');
    };

    return (
        <div className='blog'>
            {loading ? (
                <div className="loader">
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <>
                    <div className="blog-box">
                        <div className="blog-body">
                            <div className="blog-head">
                                <h1>Blogs</h1>
                            </div>
                        </div>
                    </div>
                    <div className="blog-box2">
                        <div className="blog-body">
                            <h4>Recent Publishes</h4>
                            <div className="blog-overview">
                                <div className="blog-body-left">
                                    <div className="blog-body-image">
                                        <Link to={{
                                            pathname: `/gmls/blogs/${formatPathname(apiData[apiData?.length - 1].tag)}/`
                                        }} onClick={scrollToTop} >
                                            <img src={`${Host}${apiData[apiData?.length - 1].catimageUrl}`} alt="" />
                                            {/* <img src={apiData[apiData?.length - 1].catimageUrl} alt={apiData[apiData?.length - 1].category} /> */}
                                        </Link>
                                    </div>
                                    <div className="blog-body-detail">
                                        <h3>{apiData[apiData?.length - 1].category}</h3>
                                        <h6>{new Date(apiData[apiData?.length - 1].date).toLocaleDateString()}</h6>
                                        <p>{apiData[apiData?.length - 1].categorydesc}</p>
                                        <div className="body-left-button">
                                            <Link to={{
                                                pathname: `/gmls/blogs/${formatPathname(BlogData[BlogData.length - 1].pathName)}/`
                                            }} onClick={scrollToTop}>View More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-body-right">
                                    <div className="blog-right-items">
                                        {apiData.slice().reverse().map((item) => (
                                            <div className="blogs-items-card" key={item.tag}>
                                                <Link to={{
                                                    pathname: `/gmls/blogs/${formatPathname(item.tag)}/`
                                                }} onClick={scrollToTop}>
                                                    <img src={`${Host}${item.catimageUrl}`} alt={item.category} />
                                                    <div className="blog-card-desc">
                                                        <h6>{item.category}</h6>
                                                        <p>{new Date(item.date).toLocaleDateString()}</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Blogs
