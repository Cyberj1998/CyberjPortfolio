import React from "react";
import profilePic from './Assets/ProfilePic.jpg'
import Canvas from './Canvas/Canvas'

function Hero () {
    return(
        <div id="hero_section" className="h-[60vh] max-sm:h-[300px] w-full flex flex-col justify-start items-center bg-[#323232] relative">
            <img src={profilePic} className="md:h-[200px] h-[100px] md:w-[200px] w-[100px] rounded-full mt-[10px] z-10" alt="profile picture" />
            <h1 className="md:text-[20px] text-[15px] font-sans font-semibold text-[#898989] text-center"><span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Hi</span> {'\u{1F44B}'} im Jose <br /> Wellcome to my <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Portfolio</span></h1>
            <p className="md:text-[15px] text-[12px] text-[#757575] font-sans font-semibold text-center">Front End Web Developer in React <br />Explore the projects bellow and let's build something amazing together! </p>
            <Canvas className="absolute top-0 left-0 h-full w-full" />
        </div>
    )
}

export default Hero  