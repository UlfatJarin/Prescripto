import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../contexts/AppContext'
import { doctors } from '../assets/assets'

const Doctors = () => {

  const {speciality} =useParams()
  const [filterDoc,setFilterDoc] = useState([])
  const navigate = useNavigate()

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
      <p className='font-Outfit text-xl text-text2 leading-7 mt-14 mb-9'>Browse through the doctors specialist.</p>
      <div className='grid md:grid-cols-4 lg:grid-cols-5 gap-6'>
          <ul className='font-Outfit text-text2 flex flex-col gap-3.5'>
            <li className='py-3.5 px-5 border border-[#BDBDBD] rounded-lg'>General physician</li>
            <li className='py-3.5 px-5 border border-[#BDBDBD] rounded-lg'>Gynecologist</li>
            <li className='py-3.5 px-5 border border-[#BDBDBD] rounded-lg'>Dermatologist</li>
            <li className='py-3.5 px-5 border border-[#BDBDBD] rounded-lg'>Pediatricians</li>
            <li className='py-3.5 px-5 border border-[#BDBDBD] rounded-lg'>Neurologist</li>
            <li className='py-3.5 px-5 border border-[#BDBDBD] rounded-lg'>Gastroenterologist</li>
          </ul>
        <div className='md:col-span-3   lg:col-span-4 grid  md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto'>
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