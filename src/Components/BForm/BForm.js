import React, { useEffect, useState } from 'react'
import "./BForm.css"
import { FaArrowRightLong } from "react-icons/fa6";
import axios from 'axios';

const BForm = () => {

    const [loading, setLoading] = useState(true);
    console.log(loading)
    const [allSubcategories, setAllSubcategories] = useState([]);

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

    return (
        <form className="formbox" action="">
            <select name="form_fields[name]" id="form-field-name" className="elementor-field-textual elementor-size-sm" required="required" aria-required="true">
                <option value="Translate From">Translate From</option>
                {allSubcategories.map(sub => (
                    <option value={sub.name} key={sub._id}>{sub.name}</option>
                ))}
            </select>
            <select name="form_fields[field_624ebac]" id="form-field-field_624ebac" className="elementor-field-textual elementor-size-sm" required="required" aria-required="true">
                <option value="Translate To">Translate To</option>
                {allSubcategories.map(sub => (
                    <option value={sub.name} key={sub._id}>{sub.name}</option>
                ))}
            </select>
            <select name="form_fields[field_688bef5]" id="form-field-field_688bef5" className="elementor-field-textual elementor-size-sm" required="required" aria-required="true">
                <option value="Select Service">Select Service</option>
                <option value="Service 1">Service 1</option>
                <option value="Service 2">Service 2</option>
                <option value="Service 3">Service 3</option>
            </select>
            <input
                name="user_number"
                type="number"
                className="form-control"
                placeholder="Number of Words"
                required
            />
            <button type="submit" className="btn btn-primary">
                Get Started <FaArrowRightLong />
            </button>
        </form>
    )
}

export default BForm
