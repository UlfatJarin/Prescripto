import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import Button from '../components/layers/Button'

const MyAppointment = () => {

  const { doctors } = useContext(AppContext)

  return (
    <div>
      <h5 className='font-medium text-text2 text-2xl mt-28 py-6 border-b'>My Appointments </h5>
      <div className=''>
        {doctors.slice(0,3).map((item, index) => (
          <div className='md:grid md:grid-cols-[1fr_2fr] flex flex-col gap-4 sm:flex sm:gap-6 py-4 border-b' key={index}>
            <div>           
               <img className='max-w-[160px] rounded-sm bg-[#EAEFFF]' src={item.image} alt="" />
            </div>
            <div className='flex-1'>
              <p className='font-medium text-2xl text-text1'>{item.name}</p>
              <p className=' text-lg text-text2'>{item.speciality} </p>
              <p className='font-medium text-lg text-text2'>Address:</p>
              <p className=' text-text2'>{item.address.line1} </p>
              <p className=' text-text2'>{item.address.line2} </p>
              <p className=' text-text2'><span className='font-medium'>Date & Time:</span>25, July, 2024 |  8:30 PM </p>
            </div>
            <div></div>
            <div className='max-w-[240px] flex flex-col gap-4 justify-end '>
              <Button classname='!bg-whitec !text-text2 !rounded-[4px] border border-[#BABABA] hover:!bg-primary hover:!text-white ' btntext='Pay here'/>
              <Button classname='!bg-whitec !text-text2 !rounded-[4px] border border-[#BABABA] hover:!bg-[#FA2F2F] hover:!text-white ' btntext='Cancel appointment'/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointment