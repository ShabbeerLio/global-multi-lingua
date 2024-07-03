import React, { useEffect, useState } from 'react'
import "./Blog.css"
import { Link, useLocation } from 'react-router-dom'
import BlogData from './BlogData';
import { FaArrowRightLong } from "react-icons/fa6";
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import Host from '../../Pages/Host';


const Blog = () => {

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

    const responsiveOptions = {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    };

    const formatPathname = (pathname) => {
        return pathname.toLowerCase().replace(/\s+/g, '-');
    };

    const trimDescription = (desc) => {
        const wordLimit = 30;
        const words = desc.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return desc;
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    return (
        <div className='Blog'>
            <div className='Blog-main'>
                <div className="home-blogs">
                    <div className="home-boxes">
                        <div className="hClient-heading">
                            <div className="hClient-head">
                                <h2>Blogs</h2>
                                {/* <p>We are expert in language translation & interpretation services in  major languages. We deliver our propmt services in following ares  to our clients in order to make the communication more effective.</p> */}
                            </div>
                            <div className="hClient-button">
                                <Link to={"/blogs"} onClick={scrollToTop}>View More <FaArrowRightLong /></Link>
                            </div>
                        </div>
                        <div className="home-blog-box">
                            <ReactOwlCarousel
                                loop={Infinity}
                                items={3}
                                nav={false}
                                dots={false}
                                autoplay={true}
                                autoplayTimeout={3000}
                                autoplaySpeed={1000}
                                smartSpeed={1000}
                                responsive={responsiveOptions}
                            >
                                {/* {BlogData.slice(1).reverse().slice(0, 3).map((item) => ( */}
                                {apiData?.map((item) => (
                                    <div className="blog-box-item" key={item._id}>
                                        <Link to={{
                                            pathname: `/blogs/${formatPathname(item.tag)}/`
                                        }} onClick={scrollToTop}>
                                            <img src={item.catimageUrl} alt={item.category} />
                                            <div className="blog-card-desc">
                                                <p>{new Date(item.date).toLocaleDateString()}</p>
                                                <h6>{item.category}</h6>
                                                <p>{trimDescription(item.categorydesc)}</p>
                                            </div>
                                        </Link>
                                        <div className="blog-box-button">
                                            <Link to={{
                                                pathname: `/blogs/${formatPathname(item.tag)}/`
                                            }} onClick={scrollToTop}>View More</Link>
                                        </div>
                                    </div>
                                ))}

                            </ReactOwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
