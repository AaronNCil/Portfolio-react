import React from 'react'
import Project from './Project'
import projectItems from '../projectItems.json'



const Projects = () => {
    return (
        <div id='projects'>
        <div className="container">
        <h1 className='heading shadow' data-aos="fade-up">Projects</h1>
        </div>
            <div className='project-container' data-aos="fade-up">
              
                {projectItems.map((data, key) => {
                    return <Project key={key} image={data.image} name={data.name} technologies={data.technologies} link={data.link} />
                })}






            </div>
        </div>
    )
}

export default Projects