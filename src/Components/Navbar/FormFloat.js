import React from 'react'
import "./FormFloat.css"
// import Form from '../Form/Form'
import { IoMdClose } from "react-icons/io";

const FormFloat = (props) => {
    return (
        <div className='formfloat'>
            <div className='formfloat-main'>
                <div className="floatform-card">
                    <div className="formfloat-button">
                        <IoMdClose onClick={props.formIsClose} />
                    </div>
                    {/* <Form /> */}
                </div>
            </div>
        </div>
    )
}

export default FormFloat
