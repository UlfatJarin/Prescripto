import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from './layers/Button'

const Navbar = () => {


    const navigate = useNavigate()
    const [showMenu ,setShowMenu] = useState(false)
    const[token ,setToken] =useState(true)

  return (
    <div className='py-4 flex items-center justify-between border-b border-[#ADADAD]'>
        <img className='max-w-[217px] cursor-pointer' src={assets.logo} alt="LOgo"/>
        <ul className='hiddeen md:flex items-center gap-5 font-Poppins font-medium '>
            <NavLink to='/'>
                <li className='text-text1 py-1 '> HOME</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to='/doctors'>
                <li className='text-text1 py-1 '>All Doctors </li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to='/about'>
                <li className='text-text1 py-1 '>ABOUT </li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to='/contact'>
                <li className='text-text1 py-1 '>Contact </li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
        </ul>
        <div className=' flex gap-2'>
            {
                token?
                <div className='flex items-center gap-4 cursor-pointer group relative'>
                    <img className='w-12 rounded-full' src={assets.profile_pic} alt="" />
                    <img className='w-3' src={assets.dropdown_icon} alt="" />
                    <div className='absolute right-0 top-0 pt-20   hidden group-hover:block'>
                        <div className='min-w-[218px] bg-[#F8F8F8] p-4 text-text2 text-lg font-Outfit font-medium flex flex-col gap-3 rounded  ' >
                            <p onClick={()=>navigate('my-profile')} className='hover:text-text1 cursor-pointer'>My Profile</p>
                            <p onClick={()=>navigate('my-appointments')} className='hover:text-text1 cursor-pointer'>My Appointments</p>
                            <p  className='hover:text-text1 cursor-pointer'>Logout</p>
                        </div>
                    </div>

                </div>
                : <Button onClick={()=>navigate('/login')} btntext='Create account' classname='hidden md:block' />
            }
        </div>
    </div>
  )
}

export default Navbar