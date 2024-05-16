import React from 'react'
import "./FormFloat.css"
// import Form from '../Form/Form'
import { IoMdClose } from "react-icons/io";
import BForm from '../BForm/BForm';

const FormFloat = (props) => {
    return (
        <div className='formfloat'>
            <div className='formfloat-main'>
                <div className="floatform-card">
                    <div className="formfloat-button">
                        <IoMdClose onClick={props.formIsClose} />
                    </div>
                    <BForm />
                </div>
            </div>
        </div>
    )
}

export default FormFloat
