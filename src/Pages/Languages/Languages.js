import React, { useEffect, useState } from 'react'
import "./Languages.css"
import EuropianData from './EuropianData'
import AsianData from './AsianData'
import IndianData from './IndianDAta'
import { Link } from 'react-router-dom'

const Languages = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        switch (props.heading) {
            case 'Asian Languages':
                setData(AsianData);
                break;
            case 'European Languages':
                setData(EuropianData);
                break;
            case 'Indian Languages':
                setData(IndianData);
                break;
            default:
                setData([]);
        }
    }, [props.heading]);

    return (
        <div className='Languages'>
            <div className='Languages-main'>
                <div className="language-title">
                    <h1>{props.heading}</h1>
                </div>
                <div className="languages-box">
                    {data.map((item) => (
                        <Link to={"/active"}>
                            <div className="languages-card">
                                <h5>{item.name}</h5>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Languages
