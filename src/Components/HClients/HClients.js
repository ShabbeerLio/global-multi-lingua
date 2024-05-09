import React from 'react'
import "./HClients.css"
import ReactOwlCarousel from 'react-owl-carousel'
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const HClients = () => {

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

    return (
        <div className='HClients'>
            <div className='HClients-main'>
                <div className="hClient-heading">
                    <div className="hClient-head">
                        <h2>What Our Customers say</h2>
                        <p>We are expert in language translation & interpretation services in  major languages. We deliver our propmt services in following ares  to our clients in order to make the communication more effective.</p>
                    </div>
                    <div className="hClient-button">
                        <Link>Start Translating Now <FaArrowRightLong /></Link>
                    </div>

                </div>
                <div className="hclients-box">
                    <div className="hclients-right">
                        <ReactOwlCarousel
                            items={3}
                            nav={false}
                            // loop={true}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            dots={false}
                            responsive={responsiveOptions}
                        >
                            <div className="hclients-card">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cum corrupti magnam? Porro doloribus praesentium earum, deleniti quod illum saepe similique blanditiis alias laboriosam ratione nobis repellendus enim eligendi magnam animi hic. Voluptate quaerat velit ab, odio vitae magni laborum illo laudantium excepturi. Qui, facilis! Magni cumque neque ut assumenda.</p>
                                <div className="hclients-head">
                                    <img src="https://static.vecteezy.com/system/resources/previews/003/152/807/large_2x/portrait-of-young-man-with-glasses-on-a-black-background-free-photo.jpg" alt="" />
                                    <div className="hclient-head-profile">
                                        <h4>name</h4>
                                        <p>Position</p>
                                    </div>
                                </div>
                            </div>
                            <div className="hclients-card">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cum corrupti magnam? Porro doloribus praesentium earum, deleniti quod illum saepe similique blanditiis alias laboriosam ratione nobis repellendus enim eligendi magnam animi hic. Voluptate quaerat velit ab, odio vitae magni laborum illo laudantium excepturi. Qui, facilis! Magni cumque neque ut assumenda.</p>
                                <div className="hclients-head">
                                    <img src="https://static.vecteezy.com/system/resources/previews/003/152/807/large_2x/portrait-of-young-man-with-glasses-on-a-black-background-free-photo.jpg" alt="" />
                                    <div className="hclient-head-profile">
                                        <h4>name</h4>
                                        <p>Position</p>
                                    </div>
                                </div>
                            </div>
                            <div className="hclients-card">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cum corrupti magnam? Porro doloribus praesentium earum, deleniti quod illum saepe similique blanditiis alias laboriosam ratione nobis repellendus enim eligendi magnam animi hic. Voluptate quaerat velit ab, odio vitae magni laborum illo laudantium excepturi. Qui, facilis! Magni cumque neque ut assumenda.</p>
                                <div className="hclients-head">
                                    <img src="https://static.vecteezy.com/system/resources/previews/003/152/807/large_2x/portrait-of-young-man-with-glasses-on-a-black-background-free-photo.jpg" alt="" />
                                    <div className="hclient-head-profile">
                                        <h4>name</h4>
                                        <p>Position</p>
                                    </div>
                                </div>
                            </div>
                        </ReactOwlCarousel>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HClients
