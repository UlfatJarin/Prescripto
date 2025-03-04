import React from 'react'
import { assets } from '../assets/assets'
import Button from '../components/layers/Button'

const Contact = () => {
  return (
    <div>
      <div className='flex justify-center mt-12 md:mt-16 mb-12 md:mb-20'><h4 className='font-normal text-2xl text-text2 mb-7 '>CONTACT <span className='text-text1 font-semibold'>US</span></h4></div>
      <div className='grid md:grid-cols-2  gap-12'>
        <div className='flex md:justify-end'>
          <img className='max-w-[360px] md:max-w-[560px]' src={assets.contact_image} alt="" />
        </div>

        <div className='flex flex-col gap-5 text-lg text-text2 mt-8 md:mt-12'>
          <p className='font-semibold text-2xl'>OUR OFFICE</p>
          <p>54709 Willms Station <br />
            Suite 350, Washington, USA</p>
          <div>
            <p>Tel: (415) 555‑0132</p>
            <p>Email: greatstackdev@gmail.com</p>
          </div>
          <div>
          <p className='font-semibold text-2xl mt-7' >CAREERS AT PRESCRIPTO</p>
          <p className='mt-5 mb-7'>Learn more about our teams and job openings.</p>
          <Button classname='rounded-none ' btntext='Explore Jobs' />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Contact