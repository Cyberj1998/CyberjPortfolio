import React from 'react'
import CyberLogo from './Assets/Cyber.J-Logo.png'
import { Link as LinkScroll } from 'react-scroll'
import { useState, useEffect } from 'react'
import clsx from 'clsx'


const Header = ({setLenguage, lenguage}) => {

  const[hasScroll,setHasScroll]=useState(false)
  const[isOpen,setIsOpen]=useState(false)
  const[spanish,setSpanish]=useState(false)

  const handleLenguage = () => {
    setSpanish(prev => !prev)
    if(lenguage === 'english'){
      setLenguage('spanish')
    } else{
      setLenguage('english')
    }
  }


  const NavLink = ({ title }) => (
    <LinkScroll
      to={title}
      onClick={()=>setIsOpen(false)}
      smooth
      spy
      className={clsx('base-bold text-[#969696] uppercase max-sm:hidden transition-colors duration-500 cursor-pointer hover:text-[#787878] max-lg:my-4 max-lg:h-5', hasScroll || isOpen ? 'base-bold text-white uppercase transition-colors duration-500 cursor-pointer hover:text-c4 max-lg:my-4 max-lg:h-5' : '' )}
    >
      {title}
    </LinkScroll>
  )

  useEffect(()=>{
    const handleScroll = () => {
      setHasScroll(window.scrollY > 32 )
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  return (
    <>
    <header className={clsx('w-full h-[55px] bg-transparent fixed z-[500] flex items-center justify-evenly backdrop-blur-[2px] transition-all duration-500', hasScroll && 'bg-[#1e1e1e] h-[28px]')}>
      <div className='w-[35%] flex flex-row justify-evenly items-center'>
        <NavLink title='projects' />
        <div className='h-2 w-2 bg-[#969696] rounded-full max-sm:hidden' />
        <NavLink title='features' />
      </div>
      
      <LinkScroll
        to='hero_section'
        offset={-100}
        spy
        smooth
        className={clsx('absolute transition-transform duration-500 cursor-pointer opacity-0', hasScroll && 'opacity-100') }
      >
        <img src={CyberLogo} alt="logo" className='h-[50px] w-[75px] mt-2' />
      </LinkScroll>

      <div className='w-[35%] flex flex-row justify-evenly items-center'>
        <NavLink title='email' />
        <div className='h-2 w-2 bg-[#969696] rounded-full max-sm:hidden' />
        <NavLink title='about' />
      </div>

      <div className={`absolute top-0 right-0 flex flex-row items-center ${hasScroll ? 'mt-[5px]' : 'mt-[20px] '}`}>
        <p className='base-bold text-[#969696] uppercase mr-[5px]'>
          {
            spanish ? 'ES'
            : 'EN'
          }
        </p>
        <div 
          onClick={()=>handleLenguage()}
          className={`bg-[#515151] h-[20px] w-[50px] rounded-[10px] cursor-pointer`}
        >
          <div className={`h-[19px] w-[19px] bg-[#969696] rounded-full relative transition-all duration-500 ${spanish ? 'ml-[30px]' : ''} `}>

          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header
