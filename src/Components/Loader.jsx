import React from 'react'
import CyberjLogo from './Assets/Cyber.J-Logo.png'

const Loader = () => {
  return (
    <div className='bg-gradient-to-b from-[#212121] to-[#323232] h-[100vh] w-full flex flex-col justify-center items-center'>
      <img src={CyberjLogo} alt="Logo" className='h-[150px]' />
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-blue-400 animate-bounce [animation-delay:.7s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-400 animate-bounce [animation-delay:.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-400 animate-bounce [animation-delay:.7s]"></div>
      </div>
    </div>
  )
}

export default Loader
