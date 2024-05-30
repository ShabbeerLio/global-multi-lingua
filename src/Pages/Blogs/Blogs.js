import React, { useEffect } from 'react'
import "./Blogs.css"
import { Link } from 'react-router-dom';
import BlogData from '../../Components/Blog/BlogData';
import blogDetail from "../../Assets/Banner/banner-new.avif"
import BForm from '../../Components/BForm/BForm';

const Blogs = ({ title, descriptions }) => {

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
        <div className='blog'>
            {/* <div className="hotel-detail-box">
                <div className="blog-banner">
                    <img src={blogDetail} alt="" />
                </div>
                <div className="blog-banner-right-box">
                    <div className="banner-right-box">
                        <div className="form-heading">
                            <h2>Get Your Translation Now</h2>
                            <p>Start the conversation by filling out our inquiry form today.</p>
                        </div>
                        <BForm />
                    </div>
                </div>
            </div> */}
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
                                    pathname: `/gmls/blogs/${formatPathname(BlogData[BlogData.length - 1].pathName)}/`
                                }} onClick={scrollToTop} >
                                    <img src={BlogData[BlogData.length - 1].cover} alt={BlogData[BlogData.length - 1].alt} />
                                </Link>
                            </div>
                            <div className="blog-body-detail">
                                <h3>{BlogData[BlogData.length - 1].title}</h3>
                                <h6>{BlogData[BlogData.length - 1].date}</h6>
                                <p>{BlogData[BlogData.length - 1].desc}</p>
                                <div className="body-left-button">
                                    <Link to={{
                                        pathname: `/gmls/blogs/${formatPathname(BlogData[BlogData.length - 1].pathName)}/`
                                    }} onClick={scrollToTop}>View More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="blog-body-right">
                            <div className="blog-right-items">
                                {BlogData.slice().reverse().map((item) => (
                                    <div className="blogs-items-card" key={item.pathName}>
                                        <Link to={{
                                            pathname: `/gmls/blogs/${formatPathname(item.pathName)}/`
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

export default Blogs
