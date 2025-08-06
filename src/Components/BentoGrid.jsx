import React from 'react'
import GridImage1 from './Assets/grid/grid1.png'
import GridImage2 from './Assets/grid/grid2.png'
import GridImage3 from './Assets/grid/grid3.png'
import GridImage4 from './Assets/grid/grid4.png'
import Globe from 'react-globe.gl'


const BentoGrid = ({ lenguage }) => {

  return (

    <section className="p-[20px] h-[100vh] max-sm:h-fit" id="about">
      <div className="grid grid-cols-10 grid-rows-5 gap-5 max-sm:flex max-sm:flex-col h-full">
          
          <div className="col-span-6 row-span-3 max-sm:h-[350px] max-sm:w-full object-contain border border-[#3d3d3d] bg-[#1b1b1b] rounded-lg flex flex-col">
            <div className='h-[70%] w-full'>
              <img 
                src={GridImage1} 
                alt="gridImage"
                className='h-full w-full object-cover' 
              />
            </div>
            <div className='h-[30%] w-full flex flex-col justify-center items-start'>
              <h3 className='text-white text-base max-md:text-[12px] font-heading font-semibold pl-3'>Hi i'm Jay</h3>
              <p className='text-white font-body text-sm max-md:text-[10px] p-3'>
                {lenguage === 'english' ? 'Lets create something useful and unique together' : 'Vamos a crear algo útil y único juntos'}
              </p>
            </div>
          </div>

          <div className="col-span-4 row-span-5 max-sm:h-[350px] max-sm:w-full border border-[#3d3d3d] bg-[#1b1b1b] rounded-lg">
            <div className='h-[70%] w-full'>
              <img 
                src={GridImage2} 
                alt="gridImage"
                className='h-full w-full object-cover' 
              />
            </div>
            <div className='h-[30%] w-full flex flex-col justify-center items-start'>
              <h3 className='text-white text-base max-md:text-[12px] font-heading font-semibold pl-3'>Tech Stack</h3>
              <p className='text-white font-body text-sm max-md:text-[10px] p-3'>
                {lenguage === 'english' ? 'I work with React, Next, and Tailwind CSS, and I love adding 3D models to websites with Three.js' : 'Trabajo con React, Next y Tailwind CSS, y me encanta agregar modelos 3D a sitios web con Three.js'}
              </p>
            </div>
          </div>

          <div className="col-span-3 row-span-2 max-sm:h-[350px] max-sm:w-full border border-[#3d3d3d] bg-[#1b1b1b] rounded-lg">
            <div className='h-[70%] w-full flex justify-center items-cnter'>
              <Globe 
                height={150}
                width={150}
                backgroundColor='rgba(0, 0, 0, 0)'
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl='//unpkg.com/three-globe/example/img/earth-night.jpg'
                bumpImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'
              />
            </div>
            <div className='h-[30%] w-full flex flex-col justify-center items-start'>
              <p className='text-white font-body text-sm max-md:text-[10px] p-3'>
                {lenguage === 'english' ? 'Willing to work remotely from anywhere in the world' : 'Dispuesto a trabajar de forma remota desde cualquier parte del mundo'}
              </p>
            </div>
          </div>

          <div className="col-span-3 row-span-2 max-sm:h-[350px] max-sm:w-full border border-[#3d3d3d] bg-[#1b1b1b] rounded-lg">
            <div className='h-[70%] w-full overflow-hidden'>
              <img 
                src={GridImage3} 
                alt="gridImage"
                className='h-full w-full object-cover' 
              />
            </div>
            <div className='h-[30%] w-full flex flex-col justify-center items-start'>
              <h3 className='text-white text-base max-md:text-[12px] font-heading font-semibold pl-3'>Conact Me</h3>
              <p className='text-white font-body text-sm max-md:text-[10px] p-3'>
                {lenguage === 'english' ? 'Fill the form below to send an email' : 'Completa el formulario a continuación para enviar un correo electrónico'}
              </p>
            </div>
          </div>
      </div>
    </section>
  )
}


export default BentoGrid



/*

<Globe
  height={326}
                  width={326}
                  backgroundColor="rgba(0, 0, 0, 0)"
                  backgroundImageOpacity={0.5}
                  showAtmosphere
                  showGraticules
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                  labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
                />


*/