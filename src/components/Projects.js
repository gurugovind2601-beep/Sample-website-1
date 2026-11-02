import React from 'react';
import '../data/Projectdata';
import '../style/Project.css'

const Projects =({Projects})=>{
    console.log(Projects)
    return(
        <div className='Projects'>
            <h2 className='Pro-title'>Projects</h2>

            <div className='project-container'>
                {Projects.map((project,index)=>(
                <div className='card' key={index}>
                    <h3>{project.title}</h3>
                    <p>{project.tech}</p>
                </div>
                ))}
            </div>
        </div>
    )
}
export default Projects