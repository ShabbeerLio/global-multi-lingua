import React from 'react'
import HServicesData from '../../Components/HService/HServicesData'

const Services = () => {
    return (
        <div className='Services'>
            <div className='Services-main'>
                <h1>Our Services</h1>
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

export default Services
