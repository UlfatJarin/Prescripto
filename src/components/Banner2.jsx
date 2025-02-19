import React from 'react'
import Button from './layers/Button'
import { assets } from '../assets/assets'

const Banner2 = () => {
    return (
        <div className='flex justify-between bg-primary rounded-xl relative'>
            <div className='py-24 px-28'>
                <p className='max-w-[640px] text-whitec text-[52px] font-Outfit font-bold leading-[90px]'>Book Appointment<br/> With 100+ Trusted Doctors</p>
                <Button classname='!bg-whitec !text-text1' btntext='Create account' />
            </div>
            <div className='absolute right-0 bottom-0 '>
                <img className='w-[437px]  ' src={assets.appointment_img} alt="" />
            </div>
        </div>
    )
}

export default Banner2