import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../contexts/AppContext'
import { doctors } from '../assets/assets'

const Doctors = () => {

  const {speciality} =useParams()
  const [filterDoc,setFilterDoc] = useState([])

  const {doctors} =useContext(AppContext)  


  const applyFilter= ()=>{
    if(speciality){
      setFilterDoc(doctors.filter(doc=> doc.speciality ===speciality))
    }else{
      setFilterDoc(doctors)
    }
  }
useEffect(()=>{
  applyFilter()
},[doctors,speciality])


  return (
    <div>
      <p>Browse through the doctors specialist.</p>
      <div>
        <div>
          <ul>
            <li>General physician</li>
            <li>Gynecologist</li>
            <li>Dermatologist</li>
            <li>Pediatricians</li>
            <li>Neurologist</li>
            <li>Gastroenterologist</li>
          </ul>
        </div>
        <div className='grid grid-cols-4'>
          {
            filterDoc.map((item,index)=>(
              <div onClick={()=>navigate('/appointment/${item._id')} className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2.5 transition-all duration-500'>
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

      </div>

    </div>
  )
}

export default Doctors