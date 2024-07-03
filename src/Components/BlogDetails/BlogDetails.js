import React, { useEffect, useState } from 'react'
import "./BlogDetails.css"
import { Link, useLocation, useParams } from 'react-router-dom'
import axios from 'axios';
import Host from '../../Pages/Host';

const BlogDetails = () => {

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
    /* global dataLayer */
    const location = useLocation();
    const { pathName } = useParams();

    const formatPathname = (title) => {
        // Convert spaces to dashes and make it lowercase
        return title.toLowerCase().replace(/\s+/g, '-');
    };

    const blogDetail = apiData?.find(item => item.tag === pathName);
    console.log(blogDetail, "data")

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
                                            <>
                                                <div key={item._id}>
                                                    {item.imageUrl ? <img src={item.imageUrl} alt={blogDetail.name} /> : null}
                                                    {item.name ? <h5>{item.name}</h5> : null}
                                                    {item.description ? <p>{item.description}</p> : null}
                                                </div>
                                            </>
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
