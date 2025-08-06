import React, { useState } from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import DeveloperModel from './DeveloperModel'
import CustomLoader from './CustomLoader'
import { features } from './constants/constants'

const DeveloperSection = ({ loading, setLoading, lenguage }) => {


  const[animationName,setAnimationName]=useState('idle')

  const adjustScreen = () => {
    let screenScale = null;
    let screenPosition = [0, -20, -26];
    let rotation = [0.2, 0.5, 0];
    
    if(window.innerWidth < 768){
      screenScale = [20, 20, 20]
    }
    else{
      screenScale = [20, 20, 20]
    }

    return [screenScale, screenPosition, rotation]
  }

  const [ModelScale, ModelPosition, Modelrotation] = adjustScreen()

  return (
    <div id='features' className='h-[90vh] w-full bg-[#212121] flex flex-row max-sm:flex-col justify-center items-center'>
      <div className='left-section max-sm:hidden h-full max-sm:h-[50%] w-[50%] max-sm:w-full flex justify-center items-center'>
        <Canvas 
          camera={{ near: 1, far: 500 }}>
          <ambientLight intensity={7} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <Suspense fallback={<CustomLoader />}>
            <DeveloperModel
              loading={loading}
              setLoading={setLoading}
              position={ModelPosition}
              scale={ModelScale}
              rotation={Modelrotation}
              animationName={animationName}
            />
          </Suspense>
        </Canvas>
      </div>

      <div className='right-section h-full max-sm:h-[80%] w-[50%] max-sm:w-full flex flex-col justify-evenly items-center max-sm:justify-around'>
        {
          features.map(({ id, title, text, icon, animation, textSpanish })=>(
            <div 
              key={id} 
              className='bg-[#323232] hover:bg-[#4d4d4d] duration-500 h-[100px] object-contain w-[80%] rounded-[10px] m-5 max-sm:m-[30px] max-sm:mt-[-25px] cursor-pointer z-10 flex flex- justify-start' 
              onClick={()=>setAnimationName(animation.toLowerCase())}
              onPointerOver={()=>setAnimationName(animation.toLowerCase())}
              onPointerOut={()=>setAnimationName('idle')}
            >
              <div className='flex flex-col w-[20%]'>
                <img src={icon} alt="tech icon" className='h-10 w-10 mt-[5px] ml-[10px]' />
                <h3 className='text-white mt-[5px] ml-[10px] font-heading font-semibold max-md:text-[12px]'>
                  {title}
                </h3>
              </div>
              <div className='w-[80%] object-contain'>
                <p className='text-[#a5a5a5] text-[15px] max-sm:text-[12px] max-md:text-[12px] font-body object-contain font-semibold p-2 max-sm:p-1'>
                  {lenguage === 'english' ? text : textSpanish}
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}



export default DeveloperSection

