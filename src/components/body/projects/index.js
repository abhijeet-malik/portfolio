import React from 'react'
import Separator from '../../common/separator';
import { ProjectData } from '../../data/project';
import ProjectCard from './project-card';
import ('./projects.css');
function Projects() {
  const data = ProjectData;
    return (
        <div className="projects">
          <Separator />
          <label className="section-title"><strong>Featured Projects</strong></label>  
          <div>
            {data.map((project)=>{
              return <ProjectCard project={project} />
            })}
          </div>
        </div>

        
    )
}

export default Projects
