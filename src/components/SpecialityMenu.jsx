import React from 'react'
import Title from './layers/Title'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'


const SpecialityMenu = () => {
  return (
    <div id='speciality' className='my-28'>
        <Title className='' title='Find by Speciality ' text='Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.'/>
        <div className='flex gap-6 md:gap-9 justify-center text-center pt-16 overflow-scroll w-full'>
            {specialityData.map((item,index)=>(
                <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 ' key={index} to={`/doctors/${item.speciality}`}>
                    <img className='w-16 md:w-20 lg:w-28 ' src={item.image} alt="" />
                    <p className='font-Outfit text-lg text-text2 mt-2 lg:mt-6 '>{item.speciality}</p>
                </Link>
            ))

            }
        </div>

    </div>
  )
}

export default SpecialityMenu