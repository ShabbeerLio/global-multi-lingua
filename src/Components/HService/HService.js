import React from 'react'
import "./HService.css"
import HServicesData from './HServicesData'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";

const HService = () => {

    return (
        <div className='HService'>
            <div className='HService-main'>
                <div className="hService-heading">
                    <h2>Our Services</h2>
                    <p>We are expert in language translation & interpretation services in  major languages. We deliver our propmt services in following ares  to our clients in order to make the communication more effective.</p>
                </div>
                <div className="hService-box">
                        {HServicesData.map((item) => (
                            <div className="hservice-card">
                                <div className="hsrevices-image">
                                    <img src={item.cover} alt="" />
                                </div>
                                <h4>{item.title}</h4>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default HService
