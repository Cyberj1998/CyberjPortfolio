import CyberjLogo from './Assets/Cyber.J-Logo.png'
import Canvas from './Canvas/Canvas'

function Hero ({ lenguage }) {

    const object = [
      {
        titleEnglish: (<><span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Hi</span> {'\u{1F44B}'} im Jay <br /> Wellcome to my <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Portfolio</span></>),
        textEnglish: (<>Front End Web Developer in React <br />Explore the projects bellow and let's build something amazing together! </>)  
      },
      {
        titleSpanish: (<><span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Hola</span> {'\u{1F44B}'} mi nombre es Jose <br /> Bienvenido a i <span className="bg-gradient-to-r from-[#3d74ff] to-[#3dd8ff] text-transparent bg-clip-text">Portafolio</span></>),
        textSpanish: (<>Desarrollador Full Stack con React <br />Explora los proyectos a continuación y creemos algo increíble juntos! </>)  
      }
    ]
    
    return(
      <div id="hero_section" className="hero h-[60vh] max-sm:h-[300px] w-full flex flex-col justify-start items-center bg-[#323232] relative">
        <img src={CyberjLogo} className="h-[150px] w-[250px] mt-[50px] z-10 pointer-events-none border-red-400 rounded-full" alt="profile picture" />
        <h1 className="md:text-[20px] text-[15px] font-heading font-semibold z-10 pointer-events-none text-[#898989] text-center">
          {
            lenguage === 'english' ? (
              object[0].titleEnglish
            ) : (
              object[1].titleSpanish
            )
          }
        </h1>
        <p className="md:text-[15px] text-[12px] text-[#757575] font-body font-semibold text-center">
          {
            lenguage === 'english' ? (
              object[0].textEnglish
            ) : (
              object[1].textSpanish
            )
          }
        </p>
        <Canvas className="absolute top-0 left-0 h-full w-full" />
      </div>
    )
}

export default Hero  