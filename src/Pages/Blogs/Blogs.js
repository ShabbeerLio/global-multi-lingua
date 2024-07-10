import React, { useEffect, useState } from 'react'
import "./Blogs.css"
import { Link, useLocation } from 'react-router-dom';
import BlogData from '../../Components/Blog/BlogData';
import axios from 'axios';
import Host from '../Host';

const Blogs = (props) => {

     /* global dataLayer */
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

    // Ensure dataLayer is initialized before the GA script loads
    // window.dataLayer = window.dataLayer || [];
    // function gtag() {
    //   dataLayer.push(arguments);
    // }

    // Load the Google Analytics script only once
    // const gaScriptId = 'ga-gtag';
    // if (!document.getElementById(gaScriptId)) {
    //   const script = document.createElement('script');
    //   script.id = gaScriptId;
    //   script.async = true;
    //   script.src = 'https://www.googletagmanager.com/gtag/js?id=G-3BK9F87D6E';
    //   document.head.appendChild(script);

    //   script.onload = () => {
    //     gtag('js', new Date());
    //     gtag('config', 'G-3BK9F87D6E');
    //   };
    // }
  }, [props.title, props.descriptions, location.pathname]);


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
                                            pathname: `/blogs/${formatPathname(apiData[apiData?.length - 1].tag)}/`
                                        }} onClick={scrollToTop} >
                                            <img src={apiData[apiData?.length - 1].catimageUrl} alt="" />
                                            {/* <img src={apiData[apiData?.length - 1].catimageUrl} alt={apiData[apiData?.length - 1].category} /> */}
                                        </Link>
                                    </div>
                                    <div className="blog-body-detail">
                                        <h3>{apiData[apiData?.length - 1].category}</h3>
                                        <h6>{new Date(apiData[apiData?.length - 1].date).toLocaleDateString()}</h6>
                                        <p>{apiData[apiData?.length - 1].categorydesc}</p>
                                        <div className="body-left-button">
                                            <Link to={{
                                                pathname: `/blogs/${formatPathname(BlogData[BlogData.length - 1].pathName)}/`
                                            }} onClick={scrollToTop}>View More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-body-right">
                                    <div className="blog-right-items">
                                        {apiData.slice().reverse().map((item) => (
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

export default Blogs
