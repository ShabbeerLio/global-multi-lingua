import React, { useEffect } from 'react'
import "./BlogDetails.css"
import { Link, useLocation, useParams } from 'react-router-dom'
import { FaSnowflake } from "react-icons/fa6";
import BlogData from '../Blog/BlogData';

const BlogDetails = () => {
    /* global dataLayer */
    const location = useLocation();
    const { pathName } = useParams();

    const formatPathname = (title) => {
        // Convert spaces to dashes and make it lowercase
        return title.toLowerCase().replace(/\s+/g, '-');
    };

    const blogDetail = BlogData.find(item => item.pathName === pathName);

    if (!blogDetail) {
        return <div>Item not found</div>;
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    return (
        <div className='HotelDetail' key="{subCategoryItem.id}">
            <div className="hotel-detail-box">
                <div className="blog-banner">
                    <img src={blogDetail.cover} alt={blogDetail.alttag} />
                </div>
            </div>
            <div className="blog-box2">
                <div className="blog-body">
                    <div className="blogdetail-head">
                        <h1>{blogDetail.title}</h1>
                        <div className="blogdetail-icon">
                            <span>
                                <div className="seperator">
                                    <FaSnowflake />
                                </div>
                            </span>
                        </div>
                        <h5>{blogDetail.date}</h5>
                    </div>
                    <div className="blog-overview">
                        <div className="blog-body-left">
                            <div className="blog-body-detail">
                                <p>{blogDetail.desc}</p>
                                <p>{blogDetail.desc1}</p>
                                {blogDetail.detail.map((item) => (
                                    <>
                                        {item.imag ? <img src={item.imag} alt={item.alttag} /> : null}
                                        {item.title ? <h5>{item.title}</h5> : null}
                                        {item.detailDesc.map((d) => (
                                            <>
                                                <div className="blog-detail-detail">
                                                    {d.title ? <span>{d.title}</span> : null}
                                                    <p key={d.id}>{d.desc}</p>
                                                </div>
                                            </>
                                        ))}
                                    </>
                                ))}
                            </div>
                        </div>
                        <div className="blog-body-right">
                            <div className="blog-right-items">
                                {BlogData.slice().reverse().map((item) => (
                                    <div className="blogs-items-card" key={item.pathName}>
                                        <Link to={{
                                            pathname: `/blogs/${formatPathname(item.pathName)}/`
                                        }} onClick={scrollToTop}>
                                            <img src={item.cover} alt={item.alttag} />
                                            <div className="blog-card-desc">
                                                <h6>{item.title}</h6>
                                                <p>{item.date}</p>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails
