import React from 'react'
import CyberLogo from './Assets/Cyber.J-Logo.png'
import { Link as LinkScroll } from 'react-scroll'
import { useState, useEffect } from 'react'
import clsx from 'clsx'


const Header = () => {

  const[hasScroll,setHasScroll]=useState(false)
  const[isOpen,setIsOpen]=useState(false)


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
    </header>
    </>
  )
}

export default Header
