import React, { useEffect, useState } from 'react'
import "./BlogDetails.css"
import { Link, useLocation, useParams } from 'react-router-dom'
import axios from 'axios';
import Host from '../../Pages/Host';

const BlogDetails = (props) => {

    /* global dataLayer */
    const location = useLocation();
    const { pathName } = useParams();
    const meta = props.getMeta(`blogs/${pathName}`);

    useEffect(() => {
        document.title = meta.title;

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

        const description = meta.descriptions;
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
    }, [meta.title, meta.descriptions, location.pathname]);

    // Api
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


    const formatPathname = (title) => {
        // Convert spaces to dashes and make it lowercase
        return title.toLowerCase().replace(/\s+/g, '-');
    };

    const blogDetail = apiData?.find(item => item.tag === pathName);
    // console.log(blogDetail, "data")

    // if (!blogDetail) {
    //     return <div>Item not found</div>;
    // }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    return (
        <div className='HotelDetail' key="{subCategoryItem.id}">
            {loading ? (
                <div className="loader">
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <>
                    <div className="hotel-detail-box">
                        <div className="blog-banner">
                            <img src={blogDetail.catimageUrl} alt={blogDetail.category} />
                        </div>
                    </div>
                    <div className="blog-box2">
                        <div className="blog-body">
                            <div className="blogdetail-head">
                                <h1>{blogDetail.category}</h1>
                                <h5>{new Date(blogDetail.date).toLocaleDateString()}</h5>
                            </div>
                            <div className="blog-overview">
                                <div className="blog-body-left">
                                    <div className="blog-body-detail">
                                        <p>{blogDetail.categorydesc}</p>
                                        {blogDetail.subcategories?.map((item) => (
                                            <div key={item._id}>
                                                {item.imageUrl ? <img src={item.imageUrl} alt={blogDetail.name} /> : null}
                                                {item.name ? <h5>{item.name}</h5> : null}
                                                {item.description ? <p>{item.description}</p> : null}
                                            </div>
                                        ))}
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
                </>)}
        </div>
    )
}

export default BlogDetails
