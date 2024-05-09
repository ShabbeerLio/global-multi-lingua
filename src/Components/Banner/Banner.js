import React from 'react'
import "./Banner.css"
import banner1 from "../../Assets/Banner/banner2.jpg"
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import Form from '../Form/Form';

const Banner = () => {

    return (
        <div className="banner">
            <div className="banner-main">
                <div className="banner-box">
                    <div className="banner-left">
                        <h1>Professional Translation at Your Finger Tip!</h1>
                        <p>Unlocking global communication with expert language translation in Delhi</p>
                        <div className="banner-button">
                            <Link>Our Services <FaArrowRightLong /></Link>
                        </div>
                    </div>
                    <div className="banner-right">
                        <div className="banner-right-box">
                            <div className="form-heading">
                                <h2>Get Your Translation Now</h2>
                                <p>Start the conversation by filling out our inquiry form today.</p>
                            </div>
                            <form action="">
                                <select name="form_fields[name]" id="form-field-name" class="elementor-field-textual elementor-size-sm" required="required" aria-required="true">
                                    <option value="Translate From">Translate From</option>
                                    <option value="Indonesian">Indonesian</option>
                                    <option value="English">English</option>
                                </select>
                                <select name="form_fields[field_624ebac]" id="form-field-field_624ebac" class="elementor-field-textual elementor-size-sm" required="required" aria-required="true">
                                    <option value="Translate To">Translate To</option>
                                    <option value="Indonesian">Indonesian</option>
                                    <option value="English">English</option>
                                </select>
                                <select name="form_fields[field_688bef5]" id="form-field-field_688bef5" class="elementor-field-textual elementor-size-sm" required="required" aria-required="true">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
