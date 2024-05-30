import React from 'react'
import HServicesData from '../../Components/HService/HServicesData'

const Services = () => {
    return (
        <div className='Services'>
                        <img src="https://static.vecteezy.com/system/resources/previews/009/311/650/non_2x/business-people-and-lawyers-discussing-contract-papers-legal-planning-concepts-of-law-advice-legal-services-free-photo.jpg" alt="" />
            <div className='Services-main'>
                <h1>Our Services</h1>
                <div className="hService-box">
                    {HServicesData.map((item) => (
                        <div className="hservice-card" key={item.id}>
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
