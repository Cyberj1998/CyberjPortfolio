import React from "react";
import what from './Assets/What.png'
import gmail from './Assets/Gmail.png'
import youtube from './Assets/Youtube2.svg'


function Contact () {

    const goToYoutube = () => {
       window.location.href = "https://youtube.com/@josealfonso-wn5mx?si=nCAttZvT-3KyXXN1"
    }

    return(
        <div id="footer" className="bg-[#121212] h-[40vh] w-full flex flex-col justify-center items-center">
            <h1 className="font-sans font-semibold text-[20px] text-[#898989]">Let's Build something  <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Amazing</span>{'\u{1F680}'} Together</h1>
            <div className="flex flex-row h-full w-full">
                <div id="left_side" className="h-full w-full flex justify-center items-left flex-col">
                    <h3 id="Contacts" className="font-sans font-semibold text-[20px] text-[#898989] m-[10px]">Contact Me</h3>
                    <div className="flex flex-row h-fit w-full">
                        <div id="whatsapp_container" className="flex flex-row justify-center items-center w-fit m-[10px]">
                            <img src={what} alt="whatsapp" className="h-[20px] w-[20px]" />
                            <p id="number" className="font-sans text-[15px] text-[#898989]">+53 50219524</p>
                        </div>
                        <div id="gmail_container" className="flex flex-row justify-center items-center w-fit m-[10px]">
                            <img src={gmail} alt="whatsapp" className="h-[20px] w-[20px]" />
                            <p id="number" className="font-sans text-[15px] text-[#898989]">cyberjay826@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact 