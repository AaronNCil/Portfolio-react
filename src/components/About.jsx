import React from 'react'
import img from '../images/Aaron_Cil.jpg'

const About = () => {
    return (
        <div id='about' className='container about-container shadow' data-aos="fade-up">
            <div className='about'>
                <img src={img} className='profile-picture'alt={img}></img>
                <h1>About Me</h1>
                <p>A Full Stack Coding Apprentice at Road2hire</p>
            </div>

        </div>
    )
}

export default About;