import React from 'react'
import "./Blog.css"
import { Link, useLocation } from 'react-router-dom'
import BlogData from './BlogData';
import { FaArrowRightLong } from "react-icons/fa6";
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Blog = () => {

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
                                {BlogData.map((item) => (
                                    <div className="blog-box-item" key={""}>
                                        <Link to={"/"} onClick={scrollToTop}>
                                            <img src={item.cover} alt={""} />
                                            <div className="blog-card-desc">
                                                <p>{item.date}</p>
                                                <h4>{item.title}</h4>
                                                <p>{trimDescription(item.desc)}</p>
                                            </div>
                                        </Link>
                                        <div className="blog-box-button">
                                            <Link to={"/"} onClick={scrollToTop}>View More</Link>
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
