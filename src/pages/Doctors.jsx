import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../contexts/AppContext'
import { doctors } from '../assets/assets'
import Button from '../components/layers/Button'

const Doctors = () => {

  const {speciality} =useParams()
  const [filterDoc,setFilterDoc] = useState([])
  const [showFilter,setShowFilter] = useState(false)
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
      <p className='font-Outfit text-xl text-text2 leading-7 mt-6 md:mt-14 mb-5 md:mb-9'>Browse through the doctors specialist.</p>
      <div className='grid md:grid-cols-4 lg:grid-cols-5 gap-6'>
        <Button classname='md:hidden !rounded-md' onClick={()=>setShowFilter(prev =>!prev)}  btntext='Filters'/>
          <ul className={`font-Outfit text-text2 flex flex-col gap-3.5 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
            <li onClick={()=>speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`py-3.5 px-5 border border-[#BDBDBD] rounded-lg transition-all cursor-pointer ${speciality === "General physician" ? "bg-[#E2E5FF] text-text1" : "" }`}>General physician</li>
            <li onClick={()=>speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`py-3.5 px-5 border border-[#BDBDBD] rounded-lg transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-[#E2E5FF] text-text1" : "" }`}>Gynecologist</li>
            <li onClick={()=>speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`py-3.5 px-5 border border-[#BDBDBD] rounded-lg transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-[#E2E5FF] text-text1" : "" }`}>Dermatologist</li>
            <li onClick={()=>speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`py-3.5 px-5 border border-[#BDBDBD] rounded-lg transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-[#E2E5FF] text-text1" : "" }`}>Pediatricians</li>
            <li onClick={()=>speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`py-3.5 px-5 border border-[#BDBDBD] rounded-lg transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-[#E2E5FF] text-text1" : "" }`}>Neurologist</li>
            <li onClick={()=>speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`py-3.5 px-5 border border-[#BDBDBD] rounded-lg transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-[#E2E5FF] text-text1" : "" }`}>Gastroenterologist</li>
          </ul>
        <div className='md:col-span-3   lg:col-span-4 grid  md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto'>
          {
            filterDoc.map((item,index)=>(
              <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2.5 transition-all duration-500  '>
                <img className=' bg-[#EAEFFF] ' src={item.image} alt="" />
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