import React from 'react'
import "./HService.css"
import HServicesData from './HServicesData'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const HService = () => {

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
        <div className='HService'>
            <div className='HService-main'>
                <div className="hService-heading">
                    <h2>Our Services</h2>
                    <p>We are expert in language translation & interpretation services in  major languages. We deliver our propmt services in following ares  to our clients in order to make the communication more effective.</p>
                </div>
                <div className="hService-box">
                    <ReactOwlCarousel
                        items={6}
                        nav={false}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        dots={false}
                        responsive={responsiveOptions}
                    >
                        {HServicesData.map((item) => (
                            <div className="hservice-card">

                                <div className="hsrevices-image">
                                    <img src="https://static.vecteezy.com/system/resources/previews/040/073/375/non_2x/confident-female-interpreter-translate-document-from-foreign-language-to-english-use-pc-app-make-notes-in-paper-copy-professional-young-woman-editor-correct-errors-mistakes-in-printed-article-text-free-photo.jpg" alt="" />
                                </div>
                                <h4>{item.title}</h4>
                                <div className="hservice-button">
                                    <Link>Read More <FaArrowRightLong /></Link>
                                </div>
                            </div>

                        ))}
                    </ReactOwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default HService
