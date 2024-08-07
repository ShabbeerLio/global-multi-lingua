import React from 'react'
import "./Banner.css"
import banner1 from "../../Assets/Banner/banner-new.avif"
import banner2 from "../../Assets/Banner/banner2.jpg"
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import BForm from '../BForm/BForm';

const Banner = () => {

    return (
        // <ReactOwlCarousel
        //     loop={Infinity}
        //     items={1}
        //     nav={true}
        //     dots={false}
        //     autoplay={true}
        //     autoplayTimeout={3000}
        //     autoplaySpeed={1000}
        //     smartSpeed={1000}
        // >
        <div className="banner">

            <div className="banner-image">
                <img src={banner1} alt="" />
            </div>

            <div className="banner-main-box">
                <div className="banner-main">
                    <div className="banner-box">
                        <div className="banner-left">

                            <div className="banner-left-2">
                                <h1>We provide experienced & professional Translators</h1>
                                <p>You need to communicate in various languages & cultures , We can assist you in bridging language gap.</p>
                                <div className="banner-button">
                                    <Link to={"/services"}>Our Services <FaArrowRightLong /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="banner-right">
                            <div className="banner-right-box">
                                <div className="form-heading">
                                    <h2>Get Your Translation Now</h2>
                                    <p>Start the conversation by filling out our inquiry form today.</p>
                                </div>
                                <BForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </ReactOwlCarousel>
    )
}

export default Banner
