import React, { useEffect, useState } from 'react';
import './LanguageCard.css';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import Form from '../Form/Form';
import Host from '../../Pages/Host';
import NotFound from '../../Pages/NotFound/NotFound';

const LanguageCard = (props) => {
    const { pathName } = useParams();
    const meta = props.getMeta(`blogs/${pathName}`);

    const location = useLocation();

    useEffect(() => {
        document.title = meta.title;

        const canonicalUrl = `${window.location.origin}${location.pathname}`;
        let canonicalLink = document.querySelector("link[rel='canonical']");
        if (canonicalLink) {
            canonicalLink.setAttribute("href", canonicalUrl);
        } else {
            canonicalLink = document.createElement("link");
            canonicalLink.setAttribute("rel", "canonical");
            canonicalLink.setAttribute("href", canonicalUrl);
            document.head.appendChild(canonicalLink);
        }

        const description = meta.descriptions;
        let metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        } else {
            metaDescription = document.createElement("meta");
            metaDescription.setAttribute("name", "description");
            metaDescription.setAttribute("content", description);
            document.head.appendChild(metaDescription);
        }
    }, [meta.title, meta.descriptions, location.pathname]);

    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    const actualName = pathName.replace('-translation-services', '');

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${Host}/api/clients/fetchallclients`, {
                    headers: {
                        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3NmEzNDQ1NzQyZjM1NjgyZTNlMWNjIn0sImlhdCI6MTcxOTA1MTA4NH0.OsZKI_I3GuMyljUYJmdqTCSxFWy_BPaNhDb2gfnXb6Q',
                        'Content-Type': 'application/json',
                    },
                });

                const data = response.data;
                const subcategories = data.reduce((acc, category) => acc.concat(category.subcategories), []);
                setApiData(subcategories);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const formatPathname = (actualName) => {
        return actualName.toLowerCase().replace(/\s+/g, '-');
    };

    const subcategory = apiData?.find(sub => formatPathname(sub.name) === actualName);

    useEffect(() => {
        if (!loading && !subcategory) {
            setNotFound(true);
        }
    }, [loading, subcategory]);

    const formattedDescription = subcategory?.description.replace(/\n/g, '<br /><span class="br-padding"></span>');

    return (
        <div className='Languages'>
            {loading ? (
                <div className="loader">
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : notFound ? (
                <NotFound />
            ) : (
                subcategory && (
                    <div className='LanguageCard-main'>
                        <div className='LanguageCard-box-left'>
                            <h1>{subcategory.name} Translation Services</h1>
                            <p dangerouslySetInnerHTML={{ __html: formattedDescription }}></p>
                        </div>
                        <div className="LanguageCard-box-right">
                            <Form />
                        </div>
                    </div>
                )
            )}
        </div>
    );
}

export default LanguageCard;
