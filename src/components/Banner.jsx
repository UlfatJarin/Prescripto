import React from 'react'
import Button from './layers/Button'
import { assets } from '../assets/assets'
import Container from './layers/Container'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
          <div className='bg-primary rounded-xl mt-4 md:mt-6 flex justify-between flex-col md:flex-row px-6 md:px-10 lg:px-[93px] '>
            <div className='lg:w-1/2 mt-24 md:mt-28 md:mt-40 lg:mt-[190px] pb-12 md:pb-20 lg:pb-[158px] '>
                <h1 className='font-Outfit font-semibold text-4xl md:text-5xl lg:text-[63px] leading-tight md:leading-[80px] text-whitec max-w-[616px] '>Book Appointment With Trusted Doctors</h1>
                <div className='flex flex-col lg:flex-row gap-3.5 my-10'>
                    <img className='max-w-[130px] object-contain' src={assets.group_profiles} alt="" />
                    <p className='font-Outfit font-normal text-lg leading-7 text-whitec max-w-[476px]'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
                </div>
                   <Link className=''  to='#speciality'>
                <Button classname='bg-whitec !text-text1 ' btntext='Book appointment' >
                    <img className='' src={assets.arrow_icon} alt="" />
                </Button>
                   </Link>

            </div>
            <div className='md:w-1/2 relative'>
                <img className='w-[60%] md:w-full mx-auto md:absolute h-auto bottom-0 right-0 ' src={assets.header_img} alt="" />
            </div>
        </div>


    )
}

export default Banner