import React from 'react'
import {assets} from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='flex justify-center mt-16'>
      <h4 className='font-normal text-2xl text-text2 mb-16'>ABOUT <span className='text-text2 font-semibold'> US</span></h4>
      </div>
      <div className='flex gap-16 mb-20'>
        <img className='max-w-[438px] ' src={assets.about_image} alt="" />
        <div className='flex flex-col gap-8 max-w-[894px] font-Outfit '>
          <p className='text-text2 text-lg leading-[180%]'>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p className='text-text2 text-lg leading-[180%]'>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <b className='text-text2 text-lg leading-[180%]'>Our Vision</b>
          <p className='text-text2 text-lg leading-[180%]'>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>
      <div>
        <h4 className='font-normal text-2xl text-text2 mb-7'>WHY <span className='text-text2 font-semibold'>CHOOSE US</span></h4>
      </div>
      <div className=' grid grid-cols-3 text-lg leading-[180%] text-text2'>
        <div className='px-16 pt-16 pb-28 border border-[#ABABAB] cursor-pointer'>
          <p className='text-text1 font-semibold mb-10'>Efficiency:</p>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='px-16 pt-16 pb-28 border border-[#ABABAB] cursor-pointer' >
          <p className='text-text1 font-semibold mb-10'>Convenience:</p>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='px-16 pt-16 pb-28 border border-[#ABABAB] cursor-pointer'>
          <p className='text-text1 font-semibold mb-10'>Personalization:</p>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

    </div>
  )
}

export default About