import React, { useEffect, useState } from 'react';
import './Blogs.css';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import Host from '../Host';

const Blogs = (props) => {
    const location = useLocation();

    useEffect(() => {
        document.title = props.title;

        const canonicalUrl = `${window.location.origin}${location.pathname}`;
        let canonicalLink = document.querySelector("link[rel='canonical']");
        if (canonicalLink) {
            canonicalLink.setAttribute("href", canonicalUrl);
        } else {
            canonicalLink = document.createElement("link");
            canonicalLink.setAttribute("rel", "canonical");
            canonicalLink.setAttribute("href", canonicalUrl);
            document.head.appendChild(canonicalLink);
        }

        const description = props.descriptions;
        let metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        } else {
            metaDescription = document.createElement("meta");
            metaDescription.setAttribute("name", "description");
            metaDescription.setAttribute("content", description);
            document.head.appendChild(metaDescription);
        }
    }, [props.title, props.descriptions, location.pathname]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

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

    // Filter blogs based on publishDate and status
    const filteredBlogs = apiData?.filter(blog => {
        const publishDate = new Date(blog.publishDate);
        const currentDate = new Date();
        const currentDateUTC = new Date(
            publishDate.getUTCFullYear(),
            publishDate.getUTCMonth(),
            publishDate.getUTCDate(),
            publishDate.getUTCHours(),
            publishDate.getUTCMinutes(),
            publishDate.getUTCSeconds()
        );
        return blog.status === true && blog.draft === false && currentDateUTC <= currentDate;
    });

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
                                            pathname: `/blogs/${formatPathname(filteredBlogs[filteredBlogs?.length - 1]?.tag)}/`
                                        }} onClick={scrollToTop}>
                                            <img src={filteredBlogs[filteredBlogs?.length - 1]?.catimageUrl} alt="" />
                                        </Link>
                                    </div>
                                    <div className="blog-body-detail">
                                        <h3>{filteredBlogs[filteredBlogs?.length - 1]?.category}</h3>
                                        <h6>{new Date(filteredBlogs[filteredBlogs?.length - 1]?.date).toLocaleDateString()}</h6>
                                        <p>{filteredBlogs[filteredBlogs?.length - 1]?.categorydesc}</p>
                                        <div className="body-left-button">
                                            <Link to={{
                                                pathname: `/blogs/${formatPathname(filteredBlogs[filteredBlogs?.length - 1]?.tag)}/`
                                            }} onClick={scrollToTop}>View More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-body-right">
                                    <div className="blog-right-items">
                                        {filteredBlogs.slice().reverse().map((item) => (
                                            <div className="blogs-items-card" key={item.tag}>
                                                <Link to={{
                                                    pathname: `/blogs/${formatPathname(item.tag)}/`
                                                }} onClick={scrollToTop}>
                                                    <img src={item.catimageUrl} alt={item.category} />
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

export default Blogs;
