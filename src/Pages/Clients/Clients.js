import React from 'react'
import "./Clients.css"
import ClientData from './ClientsData'

const Clients = () => {
    return (
        <div className='Clients'>
            <div className="clients-banner">
                <img src="https://static.vecteezy.com/system/resources/previews/021/134/153/non_2x/businessman-shaking-hands-indicating-agreement-business-investment-loan-approval-buying-or-mortgaging-a-home-property-insurance-real-estate-business-home-insurance-and-investment-loan-free-photo.jpg" alt="" />
            </div>
            <div className='Clients-main'>
                <h1>Our Clients</h1>
                <p>As we have worked with numerous industry leaders which shines our expertise in language translations & interpretation. Here we have shown some of our prestigious clients.</p>
                <div className='Clients-box'>
                    {ClientData.map((item) => (
                        <div className='Clients-card' key={item.id}>
                            <img src={item.cover} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Clients
