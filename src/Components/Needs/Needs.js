import React from 'react'
import "./Needs.css"
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const Needs = () => {
    return (
        <div className='Needs'>
            <div className='Needs-main'>
                <div className="need-box">
                    <div className="needs-left">
                        <img src="https://static.vecteezy.com/system/resources/previews/039/011/062/large_2x/confident-female-interpreter-translate-document-from-foreign-language-to-english-use-pc-app-make-notes-in-paper-copy-professional-young-woman-editor-correct-errors-mistakes-in-printed-article-text-free-photo.jpg" alt="" />
                    </div>
                    <div className="needs-right">
                        <h2>Need a Certified Translator?</h2>
                        <p>Quis egestas felis eu fermentum adarcu suscipit quis ut gravida dolor amet justo In purus integer dui enim vitae vitae congue volutpat tincidunt sed ac non tempor massa ultricies eget.</p>
                        <div className="need-right-box">
                            <ul>
                                <li><FaCheck />Access a team of highly skilled linguists fluent in multiple languages</li>
                                <li><FaCheck />Tailored translation solutions to suit your specific needs</li>
                                <li><FaCheck />Your data and documents are handled with the utmost confidentiality</li>
                            </ul>
                            <div className="need-right-button">
                                <Link>Let's Talk Now <FaArrowRightLong/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Needs
