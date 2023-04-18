import React from 'react'
import './Projects.css'
import ProjectsItem from '../components/ProjectsItem/ProjectsItem'
import { ActionButton } from '../components/ActionButton/ActionButton'

const Projects = () => {

    const [moreProjects, setMoreProjects] = React.useState(false)
    
    const handleMoreProjects = () => {
        setMoreProjects((prevState) => {
            return (
                !prevState
            )
        })
    }

    return (
        <main>
            <section>
                <div className="projects-tabs d-f">
                    <button className='projects-tabs-btn'>Architecture</button>
                    <button className='projects-tabs-btn'>3D design</button>
                    <button className='projects-tabs-btn tabs-btn__active'>Renovation</button>
                    <button className='projects-tabs-btn'>Construction</button>
                </div>
            </section>
            <section>
                <div className="projects-info">
                    <div className="projects-info-box d-f">
                        <ProjectsItem image='images/projects1.png' title='Apartment on Academical str.' style='Style - Loft' size={130} />
                        <ProjectsItem image='images/projects2.png' title='Apartment on Karazin str.' style='Style - Scandinavian' size={94} />
                        <ProjectsItem image='images/projects3.png' title='Apartment on Academical str.' style='Style - Loft' size={130} />
                        <ProjectsItem image='images/projects4.png' title='Apartment on Academical str.' style='Style - Loft' size={130} />
                        <ProjectsItem image='images/projects5.png' title='Apartment on Karazin str.' style='Style - Scandinavian' size={94} />
                        <ProjectsItem image='images/projects6.png' title='Apartment on Academical str.' style='Style - Loft' size={130} />
                        <ProjectsItem image='images/projects1.png' title='Apartment on Academical str.' style='Style - Loft' size={130} />
                        <ProjectsItem image='images/projects2.png' title='Apartment on Karazin str.' style='Style - Scandinavian' size={94} />
                        <ProjectsItem image='images/projects3.png' title='Apartment on Academical str.' style='Style - Loft' size={130} />
                        <ProjectsItem image='images/projects4.png' title='Apartment on Academical str.' style='Style - Loft' size={130} />
                        <ProjectsItem image='images/projects5.png' title='Apartment on Karazin str.' style='Style - Scandinavian' size={94} />
                        <ProjectsItem image='images/projects6.png' title='Apartment on Academical str.' style='Style - Loft' size={130} />
                        <ProjectsItem image='images/projects1.png' title='Apartment on Academical str.' style='Style - Loft' size={130} />
                        <ProjectsItem image='images/projects2.png' title='Apartment on Karazin str.' style='Style - Scandinavian' size={94} />
                        <ProjectsItem image='images/projects3.png' title='Apartment on Academical str.' style='Style - Loft' size={130} />
                    </div>
                    <div className= {moreProjects ? "projects-info-box d-f" : "d-n" }>
                        <ProjectsItem image='images/projects1.png' title='Apartment on Academical str.' style='Style - Loft' size={130} />
                        <ProjectsItem image='images/projects2.png' title='Apartment on Karazin str.' style='Style - Scandinavian' size={94} />
                        <ProjectsItem image='images/projects3.png' title='Apartment on Academical str.' style='Style - Loft' size={130} />
                        <ProjectsItem image='images/projects4.png' title='Apartment on Academical str.' style='Style - Loft' size={130} />
                        <ProjectsItem image='images/projects5.png' title='Apartment on Karazin str.' style='Style - Scandinavian' size={94} />
                        <ProjectsItem image='images/projects6.png' title='Apartment on Academical str.' style='Style - Loft' size={130} />
                        <ProjectsItem image='images/projects1.png' title='Apartment on Academical str.' style='Style - Loft' size={130} />
                        <ProjectsItem image='images/projects2.png' title='Apartment on Karazin str.' style='Style - Scandinavian' size={94} />
                        <ProjectsItem image='images/projects3.png' title='Apartment on Academical str.' style='Style - Loft' size={130} />
                        <ProjectsItem image='images/projects4.png' title='Apartment on Academical str.' style='Style - Loft' size={130} />
                        <ProjectsItem image='images/projects5.png' title='Apartment on Karazin str.' style='Style - Scandinavian' size={94} />
                        <ProjectsItem image='images/projects6.png' title='Apartment on Academical str.' style='Style - Loft' size={130} />
                        <ProjectsItem image='images/projects1.png' title='Apartment on Academical str.' style='Style - Loft' size={130} />
                        <ProjectsItem image='images/projects2.png' title='Apartment on Karazin str.' style='Style - Scandinavian' size={94} />
                        <ProjectsItem image='images/projects3.png' title='Apartment on Academical str.' style='Style - Loft' size={130} />
                    </div>
                    <button className='more-btn' onClick={()=>handleMoreProjects()}>
                        {moreProjects ? "Less projects" : "More projects"}  
                    </button>
                </div>
            </section>
            <section>
                <div className="projects-contact-wr">
                    <div className="design-submit d-f jc-sa">
                        <div className="design-submit-title">Leave a request and we will help you with the project</div>
                        <ActionButton title='Submit application' bgColor='#000000' txtColor='#F2F2F2' />
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Projects