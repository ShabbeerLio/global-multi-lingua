import React from 'react'
import "./HClients.css"
import ReactOwlCarousel from 'react-owl-carousel'
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import client1 from "../../Assets/Clients/client1.jpg"
import client2 from "../../Assets/Clients/client2.jpg"
import client3 from "../../Assets/Clients/client3.jpg"

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
                            loop={true}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            dots={false}
                            responsive={responsiveOptions}
                        >
                            <div className="hclients-card">
                                <p> " I strongly recommend Global Multilingua Services as they are talented and diligent people to work with. I found them to be very driven, results -oriented, and professional."</p>
                                <div className="hclients-head">
                                    <img src={client1} alt="" />
                                    <div className="hclient-head-profile">
                                        <h4>Neeru Kaushik</h4>
                                        <p>Sr. Mgr, Maruti Suzuki</p>
                                    </div>
                                </div>
                            </div>
                            <div className="hclients-card">
                                <p> I do feel like you strive for a good fit for employer and  employee. Many firms just place someone, anyone, collect a fee and move on. You  put more thought into the big picture than most.</p>
                                <div className="hclients-head">
                                    <img src={client2} alt="" />
                                    <div className="hclient-head-profile">
                                        <h4>MP Nagrath</h4>
                                        <p>CMD, JBM Group</p>
                                    </div>
                                </div>
                            </div>
                            <div className="hclients-card">
                                <p> My experience in working with Global Multilingua Services  has been nothing shy of professional. They are attentive to all clients’ needs  and wants. I would recommend GMLS and its team to anyone in search of a new  position.</p>
                                <div className="hclients-head">
                                    <img src={client3} alt="" />
                                    <div className="hclient-head-profile">
                                        <h4>Takashi Shinto</h4>
                                        <p>GM, Denso</p>
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
