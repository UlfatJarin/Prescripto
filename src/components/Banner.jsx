import React from 'react'
import Button from './layers/Button'
import { assets } from '../assets/assets'
import Container from './layers/Container'

const Banner = () => {
    return (
      <Container>
          <div className='bg-primary rounded-xl mt-6 flex justify-between relative'>
            <div className='mt-[190px] ml-[93px] pb-[158px] '>
                <h1 className='font-Outfit font-semibold text-[63px] leading-[80px] text-whitec '>Book Appointment <br />With Trusted Doctors</h1>
                <div className='flex gap-3.5 my-10'>
                    <img src={assets.group_profiles} alt="" />
                    <p className='font-Outfit font-normal text-lg leading-7 text-whitec'>Simply browse through our extensive list of trusted doctors, <br />schedule your appointment hassle-free.</p>
                </div>
                <Button classname='bg-whitec !text-text1' btntext='Book appointment' >
                    <img src={assets.arrow_icon} alt="" />
                </Button>

            </div>
            <div >
                <img className='absolute bottom-0 right-5' src={assets.header_img} alt="" />
            </div>
        </div>
      </Container>

    )
}

export default Banner