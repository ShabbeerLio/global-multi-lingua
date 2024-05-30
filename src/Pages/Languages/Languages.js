import React, { useEffect, useState } from 'react'
import "./Languages.css"
import { Link } from 'react-router-dom'
import LanguageData from './LanguageData'

const Languages = (props) => {
    const [data, setData] = useState([]);
    console.log(data)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    const formatPathname = (title) => {
        // Convert spaces to dashes and make it lowercase
        return title.toLowerCase().replace(/\s+/g, '-');
    };

    console.log(props.heading)

    useEffect(() => {
        const selectedCategory = LanguageData.find(category => category.category === props.heading);
        if (selectedCategory) {
            setData(selectedCategory.subcategories);
        } else {
            setData([]);
        }
    }, [props.heading]);

    return (
        <div className='Languages'>
        <img src="https://static.vecteezy.com/system/resources/previews/036/790/343/non_2x/ai-generated-world-map-in-an-image-of-gold-digital-circuits-and-circuits-on-earth-free-photo.jpg" alt="" />
        <div className='Languages-main'>
            <div className="language-title">
                <h1>{props.heading}</h1>
            </div>
            <div className="languages-box">
                {data.map((item) => (
                    <Link to={{
                        pathname: `/gmls/${formatPathname(item.name)}/`
                    }}
                        onClick={scrollToTop}
                        key={item.id} >
                        <div className="languages-card" >
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
