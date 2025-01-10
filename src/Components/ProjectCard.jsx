import React from 'react'
import GithubLogo from './Assets/github.svg'

const ProjectCard = (props) => {

    const goToProject = (url) => {
        window.location.href = `${url}`
    }

    const goToRepo = (url) => {
        window.location.href = `${url}`
    }


  return (
    <div>
        <h3 className="font-sans font-semibold text-[20px] bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">{props.data.name}</h3>
        <p className="text-[#757575]">{props.data.description}</p>
        <div className="border border-grey-500 h-fit flex flex-wrap justify-left items-center rounded-[5px]">
            {props.data.techStack.map((tech,i)=>(
                <img src={tech} key={i} className="w-[40px] h-[40px] m-[5px]" alt="react" />
            ))}
        </div>
        <div className="flex flex-row">
            <button className="bg-[#e8e8e8] p-[5px] rounded-[5px] mt-[5px] font-sans font-semibold cursor-pointer hover:bg-[#c1c1c1]" onClick={()=>goToProject(props.data.projectUrl)}>Go to Project</button>
            <button className="bg-[#e8e8e8] p-[5px] rounded-[5px] mt-[5px] font-sans font-semibold cursor-pointer hover:bg-[#c1c1c1] ml-5 flex" onClick={()=>goToRepo(props.data.repoUrl)}>See Source Code <img src={GithubLogo} className="h-[20px]" alt="logo" /></button>
        </div>
    </div>
  )
}

export default ProjectCard
