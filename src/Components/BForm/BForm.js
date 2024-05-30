import React from 'react'
import "./BForm.css"
import { FaArrowRightLong } from "react-icons/fa6";

const BForm = () => {
    return (
        <form className="formbox" action="">
            <select name="form_fields[name]" id="form-field-name" className="elementor-field-textual elementor-size-sm" required="required" aria-required="true">
                <option value="Translate From">Translate From</option>
                <option value="Indonesian">Indonesian</option>
                <option value="English">English</option>
            </select>
            <select name="form_fields[field_624ebac]" id="form-field-field_624ebac" className="elementor-field-textual elementor-size-sm" required="required" aria-required="true">
                <option value="Translate To">Translate To</option>
                <option value="Indonesian">Indonesian</option>
                <option value="English">English</option>
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
