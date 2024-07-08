import React, { useEffect, useState } from 'react';
import "./BForm.css";
import { FaArrowRightLong } from "react-icons/fa6";
import axios from 'axios';
import Host from '../../Pages/Host';

const BForm = () => {

    const [loading, setLoading] = useState(true);
    const [allSubcategories, setAllSubcategories] = useState([]);
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_number: '',
        message: '',
        translateFrom: '',
        translateTo: '',
        service: '',
        userNumber: ''
    });

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

                // Extract all subcategories
                const subcategories = data.reduce((acc, category) => {
                    return acc.concat(category.subcategories);
                }, []);
                setAllSubcategories(subcategories);

                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const [messageSent, setMessageSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessageSent(true);

        setTimeout(() => {
            setMessageSent(false);
        }, 2500);

        // emailjs.sendForm(
        //     'service_doayfq4',
        //     'template_vi0ghkl',
        //     form.current,
        //     'Iejd5R2PTV0wvsSiQ'
        // )
        //     .then((result) => {
        //         console.log(result.text);
        //         console.log("message sent")
        //     }, (error) => {
        //         console.log(error.text);
        //     });

        // Access the user's name, email, and message from the formData state
        const { user_name, user_number, user_email, message, translateFrom, translateTo, service, userNumber } = formData;

        console.log('Name:', user_name);
        console.log('Email:', user_email);
        console.log('Number:', user_number);
        console.log('Message:', message);
        console.log('translateFrom:', translateFrom);
        console.log('translateTo:', translateTo);
        console.log('service:', service);
        console.log('userNumber:', userNumber);

        setFormData({
            user_name: '',
            user_email: '',
            user_number: '',
            message: '',
            translateFrom: '',
            translateTo: '',
            service: '',
            userNumber: ''
        });
    };



    return (
        <>
            {messageSent ? (
                <div className='form-message'>
                    <p>Message sent successfully!</p>
                </div>
            ) : (
                <form className="formbox" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            value={formData.name}
                            name="user_name"
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            value={formData.number}
                            name="user_number"
                            type="number"
                            className="form-control"
                            placeholder="Phone No."
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            value={formData.email}
                            name="user_email"
                            type="text"
                            className="form-control"
                            placeholder="Email"
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <textarea
                            value={formData.message}
                            className="form-control"
                            name="message"
                            placeholder="Message"
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-3 translate-form">
                        <select
                            name="translateFrom"
                            id="form-field-name"
                            className="elementor-field-textual elementor-size-sm"
                            required="required"
                            aria-required="true"
                            value={formData.translateFrom}
                            onChange={handleInputChange}
                        >
                            <option value="Translate From">Translate From</option>
                            {allSubcategories.map(sub => (
                                <option value={sub.name} key={sub._id}>{sub.name}</option>
                            ))}
                        </select>
                        <select
                            name="translateTo"
                            id="form-field-field_624ebac"
                            className="elementor-field-textual elementor-size-sm"
                            required="required"
                            aria-required="true"
                            value={formData.translateTo}
                            onChange={handleInputChange}
                        >
                            <option value="Translate To">Translate To</option>
                            {allSubcategories.map(sub => (
                                <option value={sub.name} key={sub._id}>{sub.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3 translate-form">
                        <select
                            name="service"
                            id="form-field-field_688bef5"
                            className="elementor-field-textual elementor-size-sm"
                            required="required"
                            aria-required="true"
                            value={formData.service}
                            onChange={handleInputChange}
                        >
                            <option value="Select Service">Select Service</option>
                            <option value="Translation Service">Translation Service </option>
                            <option value="Interpretation Service">Interpretation Service</option>
                            <option value="Transcription Service">Transcription Service</option>
                            <option value="Apostille Service">Apostille Service</option>
                            <option value="Simultaneous Service">Simultaneous Service</option>
                        </select>
                        <input
                            name="userNumber"
                            type="number"
                            className="form-control"
                            placeholder="Number of Words"
                            required
                            value={formData.userNumber}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Get Started <FaArrowRightLong />
                    </button>
                </form>
            )}
        </>
    );
};

export default BForm;
