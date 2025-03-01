import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../contexts/AppContext'
import { useNavigate } from 'react-router-dom'
import Title from './layers/Title'
import Button from './layers/Button'

const RelatedDoctors = ({docId ,speciality}) => {

    const {doctors} =useContext(AppContext)
    const navigate = useNavigate()

    const [relDoc ,setRelDocs] =useState([])

    useEffect(()=>{
        if (doctors.length > 0 && speciality){
            const doctorsData = doctors.filter(doc=>doc.speciality === speciality && doc._id !== docId);
            setRelDocs(doctorsData);
        }

    },[doctors,speciality,docId])

  return (
    <div>
        <Title title='Related Doctors' text='Simply browse through our extensive list of trusted doctors.'/>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 gap-4 pt-10 mb-10'>
          {relDoc.slice(0,5).map((item,index)=>(
            <div onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2.5 transition-all duration-500'>
              <img className='bg-[#EAEFFF] ' src={item.image} alt="" />
            <div  className='p-3.5 pb-5 '>
              <div className='flex items-center gap-1.5'>
                <p className='w-2 h-2 bg-[#0FBF00] rounded-full'></p>
                <p className='font-Outfit text-base text-[#0FBF00]'>Available</p>
              </div>
              <p className='font-Outfit font-medium text-2xl text-text1 mt-1.5 mb-2'>{item.name}</p>
              <p className='font-Outfit text-text2'>{item.speciality}</p>
            </div>
            </div>
          ))}
        </div>
          <Button onClick={()=>{navigate('/doctors');scrollTo(0,0)}} classname=' !bg-[#EAEFFF] !text-blackc mt-16 !px-20 mx-auto text-center' btntext='more'/>
          
    </div>
  )
}

export default RelatedDoctors