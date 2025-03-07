import React from 'react'
import Button from './layers/Button'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner2 = () => {

    const navigate =useNavigate()
    return (
        <div className='pt-12 md:pt-16 lg:py-24 px-10 md:px-12 lg:px-28 flex flex-col lg:flex-row justify-between bg-primary rounded-xl relative mt-20 md:mt-40 mb-20'>
            <div className='w-full lg:w-1/2 '>
                <h2 className='max-w-[640px] text-whitec text-2xl md:text-5xl text-[52px] font-Outfit font-bold leading-[60px] lg:leading-[90px] mb-9'>Book Appointment<br/> With 100+ Trusted Doctors</h2>
                <Button onClick={()=>{navigate('/login');scrollTo(0,0)} }classname='!bg-whitec !text-text1' btntext='Create account' />
            </div>
            <div className=' lg:absolute lg:right-28 lg:bottom-0 mx-auto '>
                <img className='max-w-[260px] md:max-w-[360px] lg:max-w-[460px]  ' src={assets.appointment_img} alt="" />
            </div>
        </div>
    )
}

export default Banner2