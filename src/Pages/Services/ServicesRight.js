import React from 'react'

const ServicesRight = (props) => {
    return (
        <div className='ServicesRight'>
            {/* <h4>{props.title}</h4>
            <img src="" alt="" />
            <span>Related Languages </span> */}
            <h4>Translation & Interpretation</h4>
            <div className="serviceright-box">
                <ul style={{display:`${props.display}`}}>
                    {props.languages.map((item) => (
                        <li><a href={item.url}>{item.name}</a></li>
                    ))}
                </ul>
            </div>
            <div className="serviceright-button">
                <a href="">View All Languages</a>
            </div>
        </div>
    )
}

export default ServicesRight
