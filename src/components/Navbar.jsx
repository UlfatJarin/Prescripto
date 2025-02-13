import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='py-4 flex items-center justify-between border-b border-[#ADADAD]'>
        <img src={assets.logo} alt=""/>
        <ul className='flex items-center gap-5  '>
            <NavLink>
                <li className='text-text1 p-1 '> HOME</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink>
                <li className='text-text1 p-1 '>All Doctors </li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink>
                <li className='text-text1 p-1 '>ABOUT </li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink>
                <li className='text-text1 p-1 '>Contact </li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
        </ul>
    </div>
  )
}

export default Navbar