import React from 'react'

import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { GrMail } from "react-icons/gr";
import { IoDocumentTextSharp } from "react-icons/io5";




const Social = () => {
    return (
        <div>
            <ul className='social'>
                <li ><a className='shadow' href='https://github.com/AaronNCil' target="_blank" rel="noreferrer"><FaGithub /><p>Github</p></a></li>
                <li><a className='shadow' href='https://www.linkedin.com/in/acil/' target="_blank" rel="noreferrer"><FaLinkedin /><p>LinkedIn</p></a></li>
                <li><a className='shadow' href='mailto:cilaaron27@gmail.com' target="_blank" rel="noreferrer"><GrMail /><p>Email</p></a></li>
                <li><a className='shadow' href='https://drive.google.com/file/d/1Mg5mwNC8x5mzPWSzrPHmHtFVoZb21sLC/view?usp=sharing' target="_blank" rel="noreferrer"><IoDocumentTextSharp /><p>Resume</p></a></li>

            </ul>
        </div>
    )
}

export default Social