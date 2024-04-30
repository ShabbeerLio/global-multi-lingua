import React from 'react'
import bannerimg from "../../Assets/Banner/banner1.jpg"
import banner2 from "../../Assets/Banner/banner2.jpg"
import "./Banner.css"
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Autoplay, EffectCreative } from 'swiper/modules';
import { GrUserExpert } from "react-icons/gr";
import { RiCustomerService2Line } from "react-icons/ri";
import { GiExecutionerHood } from "react-icons/gi";
import { MdOutlinePriceCheck } from "react-icons/md";

const Banner = () => {

    return (
        <>
            <Swiper
                grabCursor={true}
                effect={'creative'}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ['-120%', 0, -500],
                    },
                    next: {
                        shadow: true,
                        translate: ['120%', 0, -500],
                    },
                }}
                modules={[Autoplay, EffectCreative]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <div className="banner">
                        <div className="banner-heading">
                            <span>Language</span>
                            <h1>Interpreters</h1>
                            <p>We provide experienced interpreters of major languages. All our  interpreters are  professionally expert and having great fluency in various languages.</p>
                            <div className="banner-button">
                                <Link>Send Request</Link>
                            </div>
                        </div>
                        <div className="banner-image">
                            <img src={bannerimg} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner">
                        <div className="banner-heading">
                            <span>We provide experienced & professional</span>
                            <h1>Translators</h1>
                            <p>You need to communicate in various languages & cultures  We can assist you in bridging language gap.</p>
                            <div className="banner-button">
                                <Link>Send Request</Link>
                            </div>
                        </div>
                        <div className="banner-image">
                            <img src={banner2} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="banner-bottom">
                    <div className="banner-items">
                        <div className="banner-card">
                            <GrUserExpert />
                            <div className="banner-card-detail">
                                <h4>Our Expertise</h4>
                                <p>User strategic presence</p>
                            </div>
                        </div>
                        <div className="banner-card">
                            <RiCustomerService2Line />
                            <div className="banner-card-detail">
                                <h4>Prompt in Services</h4>
                                <p>Professionally productize</p>
                            </div>
                        </div>
                        <div className="banner-card">
                            <GiExecutionerHood />
                            <div className="banner-card-detail">
                                <h4>Efficient Execution</h4>
                                <p>Imperatives through competitive</p>
                            </div>
                        </div>
                        <div className="banner-card">
                            <MdOutlinePriceCheck />
                            <div className="banner-card-detail">
                                <h4>Competetive Rate</h4>
                                <p>Facilities for clients</p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Banner
