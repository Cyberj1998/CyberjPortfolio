import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
//---------------------import Tech-------------------------------
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
import ZustandLogo from './Assets/zustand.png'
import GsapLogo from './Assets/gsap.png'

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
    
    const tShirtProject = () => {
        window.location.href = "https://t-shirt-customizer-e4c4.onrender.com"
    }

    const tShirtRepo = () => {
        window.location.href = "https://github.com/Cyberj1998/T-Shirt-Customizer"
    }
    const BurgersProject = () => {
        window.location.href = "https://primeburgers.onrender.com/"
    }

    const BurgersRepo = () => {
        window.location.href = "https://github.com/Cyberj1998/primeburgers"
    }
    const ScooterProject = () => {
        window.location.href = "https://e-scooter.onrender.com/"
    }

    const ScooterRepo = () => {
        window.location.href = "https://github.com/Cyberj1998/e-scooter"
    }

    const GamingProject = () => {
        window.location.href = "https://gaming-website-ih46.onrender.com/"
    }

    const GamingRepo = () => {
        window.location.href = "https://github.com/Cyberj1998/gaming_website"
    }

    const FizziProject = () => {
        window.location.href = "https://fizzi.onrender.com"
    }

    const FizziRepo = () => {
        window.location.href = "https://github.com/Cyberj1998/fizzi"
    }

    return(
        <div id="projects" className="h-fit bg-[#212121] p-[10px]">
            <VerticalTimeline>
                <VerticalTimelineElement>
                    <div>
                        <h3 className="font-sans font-semibold text-[20px] bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Headphones Page</h3>
                        <p className="text-[#757575]">modern landing page for a headphones company featuring sleek design elements and smooth animations using <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Tailwind CSS</span>, <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Anime.js</span> and <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Framer Motion</span>. 'add to cart' functionality using <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Redux</span> to handle complex states.</p>
                        <div className="border border-grey-500 h-fit flex flex-wrap justify-left items-center rounded-[5px]">
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
                        <div className="border border-grey-500 h-fit flex flex-wrap justify-left items-center rounded-[5px]">
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
                        <div className="border border-grey-500 h-fit flex flex-wrap justify-left items-center rounded-[5px]">
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
                        <div className="border border-grey-500 h-fit flex flex-wrap justify-left items-center rounded-[5px]">
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
                        <h3 className="font-sans font-semibold text-[20px] bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">T-Shirt Customization</h3>
                        <p className="text-[#757575]">Modern T-shirt customization page with <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">3D interactive model</span> thanks to the power of <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Three.js</span>, and modern style using <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Tailwind CSS</span> and <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Framer Motion</span>.</p>
                        <div className="border border-grey-500 h-fit flex flex-wrap justify-left items-center rounded-[5px]">
                            <img src={ViteLogo} className="w-[40px] h-[40px] m-[5px]" alt="react" />
                            <img src={ReactLogo} className="w-[40px] h-[40px] m-[5px]" alt="react" />
                            <img src={TailwindcssLogo} className="w-[40px] h-[30px] rounded-[5px] m-[5px]" alt="react" />
                            <img src={ThreeJS} className="w-[40px] h-[40px] rounded-[5px] m-[5px]" alt="react" />
                            <img src={FramerMotionLogo} className="w-[40px] h-[30px] rounded-[5px] m-[5px]" alt="react" />
                        </div>
                        <div className="flex flex-row">
                            <button className="bg-[#e8e8e8] p-[5px] rounded-[5px] mt-[5px] font-sans font-semibold cursor-pointer hover:bg-[#c1c1c1]" onClick={FizziProject}>Go to Project</button>
                            <button className="bg-[#e8e8e8] p-[5px] rounded-[5px] mt-[5px] font-sans font-semibold cursor-pointer hover:bg-[#c1c1c1] ml-5 flex" onClick={FizziRepo}>See Source Code <img src={GithubLogo} className="h-[20px]" alt="logo" /></button>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement>
                    <div>
                        <h3 className="font-sans font-semibold text-[20px] bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">E-Commerce with Redux & Emailjs</h3>
                        <p className="text-[#757575]">Full E-Commerce website with <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">node.js</span> server to store and load the products, add to cart functions with <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Redux</span> 3d models with <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">ThreeJs</span> and modern animations using <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Framer Motion</span></p>
                        <div className="border border-grey-500 h-fit flex flex-wrap justify-left items-center rounded-[5px]">
                            <img src={ViteLogo} className="w-[40px] h-[40px] m-[5px]" alt="react" />
                            <img src={ReactLogo} className="w-[40px] h-[40px] m-[5px]" alt="react" />
                            <img src={TailwindcssLogo} className="w-[40px] h-[30px] rounded-[5px] m-[5px]" alt="react" />
                            <img src={FramerMotionLogo} className="w-[40px] h-[30px] rounded-[5px] m-[5px]" alt="react" />
                            <img src={ThreeJS} className="w-[40px] h-[40px] rounded-[5px] m-[5px]" alt="react" />
                            <img src={NodeLogo} className="w-[40px] h-[40px] rounded-[5px] m-[5px]" alt="react" />
                            <img src={ReduxLogo} className="w-[40px] h-[40px] rounded-[5px] m-[5px]" alt="react" />
                        </div> 
                        <div className="flex flex-row">
                            <button className="bg-[#e8e8e8] p-[5px] rounded-[5px] mt-[5px] font-sans font-semibold cursor-pointer hover:bg-[#c1c1c1]" onClick={BurgersProject}>Go to Project</button>
                            <button className="bg-[#e8e8e8] p-[5px] rounded-[5px] mt-[5px] font-sans font-semibold cursor-pointer hover:bg-[#c1c1c1] ml-5 flex" onClick={BurgersRepo}>See Source Code <img src={GithubLogo} className="h-[20px]" alt="logo" /></button>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement>
                    <div>
                        <h3 className="font-sans font-semibold text-[20px] bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Sleek Design Landing Page</h3>
                        <p className="text-[#757575]">
                        Sleek and modern design of a landing page dedicated to <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">E-scooters</span>, modern responsive design using <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Tailwind CSS</span> and <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Three.js</span> to add 3D models to our website. Finally, some smooth animations using the power of <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Framer Motion</span> to catch the eye of the user even more.</p>
                        <div className="border border-grey-500 h-fit flex flex-wrap justify-left items-center rounded-[5px]">
                            <img src={ViteLogo} className="w-[40px] h-[40px] m-[5px]" alt="react" />
                            <img src={ReactLogo} className="w-[40px] h-[40px] m-[5px]" alt="react" />
                            <img src={TailwindcssLogo} className="w-[40px] h-[30px] rounded-[5px] m-[5px]" alt="react" />
                            <img src={FramerMotionLogo} className="w-[40px] h-[30px] rounded-[5px] m-[5px]" alt="react" />
                            <img src={ThreeJS} className="w-[40px] h-[40px] rounded-[5px] m-[5px]" alt="react" />
                        </div>
                        <div className="flex flex-row">
                            <button className="bg-[#e8e8e8] p-[5px] rounded-[5px] mt-[5px] font-sans font-semibold cursor-pointer hover:bg-[#c1c1c1]" onClick={ScooterProject}>Go to Project</button>
                            <button className="bg-[#e8e8e8] p-[5px] rounded-[5px] mt-[5px] font-sans font-semibold cursor-pointer hover:bg-[#c1c1c1] ml-5 flex" onClick={ScooterRepo}>See Source Code <img src={GithubLogo} className="h-[20px]" alt="logo" /></button>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement>
                    <div>
                        <h3 className="font-sans font-semibold text-[20px] bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">A Modern Gaming Experience</h3>
                        <p className="text-[#757575]">
                          This modern website features a sleek, futuristic design that transforms the gaming experience. With captivating videos that draw users in and <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">GSAP</span> animations that flow smoothly, every interaction feels seamless. Built with <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Tailwind CSS</span>, the site ensures a responsive and aesthetically pleasing layout
                        </p>
                        <div className="border border-grey-500 h-fit flex flex-wrap justify-left items-center rounded-[5px]">
                            <img src={ViteLogo} className="w-[40px] h-[40px] m-[5px]" alt="react" />
                            <img src={ReactLogo} className="w-[40px] h-[40px] m-[5px]" alt="react" />
                            <img src={TailwindcssLogo} className="w-[40px] h-[30px] rounded-[5px] m-[5px]" alt="react" />
                            <img src={GsapLogo} className="w-[40px] h-[30px] rounded-[5px] m-[5px]" alt="react" />
                        </div>
                        <div className="flex flex-row">
                            <button className="bg-[#e8e8e8] p-[5px] rounded-[5px] mt-[5px] font-sans font-semibold cursor-pointer hover:bg-[#c1c1c1]" onClick={GamingProject}>Go to Project</button>
                            <button className="bg-[#e8e8e8] p-[5px] rounded-[5px] mt-[5px] font-sans font-semibold cursor-pointer hover:bg-[#c1c1c1] ml-5 flex" onClick={GamingRepo}>See Source Code <img src={GithubLogo} className="h-[20px]" alt="logo" /></button>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement>
                    <div>
                        <h3 className="font-sans font-semibold text-[20px] bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Eye Catching Landing Page</h3>
                        <p className="text-[#757575]">
                        Fizzi is a landing page for a fictional soda brand that is anything but ordinary. It features an eye-catching design that uses the power of <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Three.js</span> and <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">GSAP</span> combined to create amazing animations with 3D models to catch the user's attention. It also utilizes <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Tailwind CSS</span> for further styling
                        </p>
                        <div className="border border-grey-500 h-fit flex flex-wrap justify-left items-center rounded-[5px]">
                            <img src={ViteLogo} className="w-[40px] h-[40px] m-[5px]" alt="react" />
                            <img src={ReactLogo} className="w-[40px] h-[40px] m-[5px]" alt="react" />
                            <img src={TailwindcssLogo} className="w-[40px] h-[30px] rounded-[5px] m-[5px]" alt="react" />
                            <img src={GsapLogo} className="w-[40px] h-[30px] rounded-[5px] m-[5px]" alt="react" />
                        </div>
                        <div className="flex flex-row">
                            <button className="bg-[#e8e8e8] p-[5px] rounded-[5px] mt-[5px] font-sans font-semibold cursor-pointer hover:bg-[#c1c1c1]" onClick={GamingProject}>Go to Project</button>
                            <button className="bg-[#e8e8e8] p-[5px] rounded-[5px] mt-[5px] font-sans font-semibold cursor-pointer hover:bg-[#c1c1c1] ml-5 flex" onClick={GamingRepo}>See Source Code <img src={GithubLogo} className="h-[20px]" alt="logo" /></button>
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