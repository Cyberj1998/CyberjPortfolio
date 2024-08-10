import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
//----------------import Tech
import ReactLogo from './Assets/React.png'
import TailwindcssLogo from './Assets/Tailwindcss.png'
import AnimejsLogo from './Assets/Anime.png'
import GithubLogo from './Assets/github.svg'
import ViteLogo from './Assets/Vite.png'
import ThreeJS from './Assets/ThreeJS.png'
import NodeLogo from './Assets/Node.png'
import NextLogo from './Assets/Next.png'
import FramerMotionLogo from './Assets/motion.svg'
import ReduxLogo from './Assets/Redux.png'

function Proyectos () {

    const headPhonesProject = () => {
        window.location.href = "https://headphones-2e81.onrender.com"
    }

    const headPhonesRepo = () => {
        window.location.href = "https://github.com/Cyberj1998/Headphones"
    }

    const ThreeProject = () => {
        window.location.href = "https://threedworld.onrender.com"
    }

    const ThreeRepo = () => {
        window.location.href = "https://github.com/Cyberj1998/3DWorld"
    }

    const AnimeProject = () => {
        window.location.href = "https://animescroll.onrender.com"
    }

    const AnimeRepo = () => {
        window.location.href = "https://github.com/Cyberj1998/AnimeScroll"
    }
    
    const ChairsProject = () => {
        window.location.href = "https://gamingchairslandingpage.onrender.com/"
    }

    const ChairsRepo = () => {
        window.location.href = "https://github.com/Cyberj1998/GamingChairsLandingPage"
    }

    return(
        <div className="h-fit bg-[#212121] p-[10px]">
            <VerticalTimeline>
                <VerticalTimelineElement>
                    <div>
                        <h3 className="font-sans font-semibold text-[20px] bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Headphones Page</h3>
                        <p className="text-[#757575]">modern landing page for a headphones company featuring sleek design elements and smooth animations using <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Tailwind CSS</span>, <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Anime.js</span> and <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Framer Motion</span>. 'add to cart' functionality using <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Redux</span> to handle complex states.</p>
                        <div className="border border-grey-500 h-[50px] flex justify-left items-center rounded-[5px]">
                            <img src={ReactLogo} className="w-[40px] h-[40px] m-[5px]" alt="react" />
                            <img src={TailwindcssLogo} className="w-[40px] h-[30px] m-[5px]" alt="react" />
                            <img src={AnimejsLogo} className="w-[40px] h-[30px] rounded-[5px] m-[5px]" alt="react" />
                            <img src={FramerMotionLogo} className="w-[40px] h-[30px] rounded-[5px] m-[5px]" alt="react" />
                            <img src={ReduxLogo} className="w-[40px] h-[40px] rounded-[5px] m-[5px]" alt="react" />
                        </div>
                        <div className="flex flex-row">
                            <button className="bg-[#e8e8e8] p-[5px] rounded-[5px] mt-[5px] font-sans font-semibold cursor-pointer hover:bg-[#c1c1c1]" onClick={headPhonesProject}>Go to Project</button>
                            <button className="bg-[#e8e8e8] p-[5px] rounded-[5px] mt-[5px] font-sans font-semibold cursor-pointer hover:bg-[#c1c1c1] ml-5 flex" onClick={headPhonesRepo}>See Source Code <img src={GithubLogo} className="h-[20px]" alt="logo" /></button>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement>
                    <div>
                        <h3 className="font-sans font-semibold text-[20px] bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">3D Interactive Website</h3>
                        <p className="text-[#757575]">This React project showcases a stunning <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">3D model</span> of a floating island using <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Three.js</span> and <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">React-Three-Fiber</span>. The user can interact with the 3D model by rotating it using drag-and-drop gestures</p>
                        <div className="border border-grey-500 h-[50px] flex justify-left items-center rounded-[5px]">
                            <img src={ViteLogo} className="w-[40px] h-[40px] m-[5px]" alt="react" />
                            <img src={ThreeJS} className="w-[40px] h-[40px] m-[5px]" alt="react" />
                            <img src={ReactLogo} className="w-[40px] h-[40px] m-[5px]" alt="react" />
                            <img src={TailwindcssLogo} className="w-[40px] h-[30px] m-[5px]" alt="react" />
                        </div>
                        <div className="flex flex-row">
                            <button className="bg-[#e8e8e8] p-[5px] rounded-[5px] mt-[5px] font-sans font-semibold cursor-pointer hover:bg-[#c1c1c1]" onClick={ThreeProject}>Go to Project</button>
                            <button className="bg-[#e8e8e8] p-[5px] rounded-[5px] mt-[5px] font-sans font-semibold cursor-pointer hover:bg-[#c1c1c1] ml-5 flex" onClick={ThreeRepo}>See Source Code <img src={GithubLogo} className="h-[20px]" alt="logo" /></button>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement>
                    <div>
                        <h3 className="font-sans font-semibold text-[20px] bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Anime Infinite Scroll</h3>
                        <p className="text-[#757575]"><span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Next.js</span> project to showcase the <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">server-side</span> actions, we also use the <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Framer Motion</span> library to create nice and smooth scroll animations</p>
                        <div className="border border-grey-500 h-[50px] flex justify-left items-center rounded-[5px]">
                            <img src={NextLogo} className="w-[40px] h-[40px] m-[5px]" alt="react" />
                            <img src={TailwindcssLogo} className="w-[40px] h-[30px] m-[5px]" alt="react" />
                            <img src={FramerMotionLogo} className="w-[40px] h-[30px] rounded-[5px] m-[5px]" alt="react" />
                        </div>
                        <div className="flex flex-row">
                            <button className="bg-[#e8e8e8] p-[5px] rounded-[5px] mt-[5px] font-sans font-semibold cursor-pointer hover:bg-[#c1c1c1]" onClick={AnimeProject}>Go to Project</button>
                            <button className="bg-[#e8e8e8] p-[5px] rounded-[5px] mt-[5px] font-sans font-semibold cursor-pointer hover:bg-[#c1c1c1] ml-5 flex" onClick={AnimeRepo}>See Source Code <img src={GithubLogo} className="h-[20px]" alt="logo" /></button>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement>
                    <div>
                        <h3 className="font-sans font-semibold text-[20px] bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Node.js API/Landing Page</h3>
                        <p className="text-[#757575]"><span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Node.js</span> API that everyone can use to build amazing projects. Alongside that, I built this attractive landing page with <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Three.js</span> and Redux to showcase what you can do with this <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">API</span>.</p>
                        <div className="border border-grey-500 h-[50px] flex justify-left items-center rounded-[5px]">
                            <img src={ViteLogo} className="w-[40px] h-[40px] m-[5px]" alt="react" />
                            <img src={ReactLogo} className="w-[40px] h-[40px] m-[5px]" alt="react" />
                            <img src={TailwindcssLogo} className="w-[40px] h-[30px] rounded-[5px] m-[5px]" alt="react" />
                            <img src={FramerMotionLogo} className="w-[40px] h-[30px] rounded-[5px] m-[5px]" alt="react" />
                            <img src={ThreeJS} className="w-[40px] h-[40px] rounded-[5px] m-[5px]" alt="react" />
                            <img src={NodeLogo} className="w-[40px] h-[40px] rounded-[5px] m-[5px]" alt="react" />
                            <img src={ReduxLogo} className="w-[40px] h-[40px] rounded-[5px] m-[5px]" alt="react" />
                        </div>
                        <div className="flex flex-row">
                            <button className="bg-[#e8e8e8] p-[5px] rounded-[5px] mt-[5px] font-sans font-semibold cursor-pointer hover:bg-[#c1c1c1]" onClick={ChairsProject}>Go to Project</button>
                            <button className="bg-[#e8e8e8] p-[5px] rounded-[5px] mt-[5px] font-sans font-semibold cursor-pointer hover:bg-[#c1c1c1] ml-5 flex" onClick={ChairsRepo}>See Source Code <img src={GithubLogo} className="h-[20px]" alt="logo" /></button>
                        </div>
                    </div>
                </VerticalTimelineElement>
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