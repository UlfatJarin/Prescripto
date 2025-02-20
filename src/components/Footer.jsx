import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate()

    return (
        <div className='mt-16'>
            <div className='grid md:grid-cols-4 py-16 gap-6 grid-cols-2'>
                <div className='col-span-2 mb-3 md:mb-0'>
                    <img onClick={()=>navigate('/')} className='max-w-[217px]' src={assets.logo} alt="" />
                    <p className='max-w-[646px] font-Outfit text-lg leading-7 text-text2 mt-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                </div>
                <div>
                    <h5 className='font-Outfit font-semibold text-[22px] leading-7 text-text2 mb-4  md:mb-10' >COMPANY</h5>
                    <ul className='font-Outfit text-lg leading-7 text-text2 flex flex-col gap-2'>
                        <li>Home </li>
                        <li>About us </li>
                        <li>Contact us </li>
                        <li>Privacy policy </li>
                    </ul>
                </div>
                <div>
                    <h5 className='font-Outfit font-semibold text-[22px] leading-7 text-text2 mb-4 md:mb-10'>GET IN TOUCH</h5>
                    <ul className='font-Outfit text-lg leading-7 text-text2 flex flex-col gap-2'>
                        <li>+1-212-456-7890</li>
                        <li>greatstackdev@gmail.com</li>
                    </ul>

                </div>

            </div>
            <div className='py-7 border-t border-[#BDBDBD]'>
                <p className='font-Outfit text-lg leading-7 text-text2 text-center '>Copyright © 2024 GreatStack - All Right Reserved.</p>
            </div>
        </div>

    )
}

export default Footer