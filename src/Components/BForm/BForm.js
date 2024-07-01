import React, { useEffect, useState } from 'react';
import "./BForm.css";
import { FaArrowRightLong } from "react-icons/fa6";
import axios from 'axios';

const BForm = () => {

    const [loading, setLoading] = useState(true);
    const [allSubcategories, setAllSubcategories] = useState([]);
    const [formData, setFormData] = useState({
        translateFrom: '',
        translateTo: '',
        service: '',
        userNumber: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://gmls-backend.onrender.com/api/clients/fetchallclients', {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); 
    };

    return (
        <form className="formbox" onSubmit={handleSubmit}>
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
            <button type="submit" className="btn btn-primary">
                Get Started <FaArrowRightLong />
            </button>
        </form>
    );
};

export default BForm;
