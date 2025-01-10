import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
//---------------------import Tech-------------------------------
import { projects } from "./ProjectsInfo";
import ProjectCard from "./ProjectCard";


function Proyectos () {

    return(
        <div id="projects" className="h-fit bg-[#212121] p-[10px]">
            <VerticalTimeline>
                {projects.map((project,index)=>(
                  <VerticalTimelineElement>
                    <ProjectCard
                      key={index} 
                      data={project}
                    />
                  </VerticalTimelineElement>
                ))}
                <VerticalTimelineElement>
                    <div>
                        <h3 className="font-sans font-semibold text-[20px] bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Be Patient</h3>
                        <p className="text-[#757575]">More <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Awesome</span> Projects Coming <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Soon</span>....</p>
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}




export default Proyectos