import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';
import { assets } from '../assets/assets';


const Appointment = () => {

  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots,setDocSlots] =useState([]);
  const [slotIndex,setSlotIndex] =useState(0);
  const[slotTime,setSlotTime] = useState('');


  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
  }

  const getAvailableSlot = async ()=>{
    setDocSlots([])

    //getting current dates
    let today = new Date()

    for(let i=0;i<7;i++){
      //getting date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate()+i)

      //setting end time of the date with index
      let endTime =new Date()
      endTime.setDate(today.getDate()+1)
      endTime.setHours(21,0,0,0)

      //setting Hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10 )
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0) 
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots =[]

      while(currentDate < endTime){
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit' , minute: '2-digit' });

        
        //add slot to array
        timeSlots.push({
          datetime:new Date(currentDate),
          time:formattedTime
        })

        //Increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes()+30)
      }
      setDocSlots(prev => ([...prev ,timeSlots]))
    }
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId]);

  // useEffect(()=>{
  //   getAvailableSlot()
  // },[docInfo])

  useEffect(() => {
    if (docInfo) {
      getAvailableSlot();
    }
  }, [docInfo]);

  
  useEffect(()=>{
    console.log(docSlots)

  },[docSlots])

  return docInfo && (
    <div className='mt-9'>

      <div className='flex justify-between gap-6'>

        {/* ------------------- doc details -------------- */}
        <div className='bg-primary rounded-xl '>
          <img src={docInfo.image} alt="" />
        </div>
        {/* ------------------- doc name degree experiance -------------- */}
        <div className='flex-1 items-center gap p-11 rounded-xl border border-text2 ' >

          <h3 className='flex items-center gap-2 font-Outfit font-medium text-4xl text-text1'>
            {docInfo.name}
            <img className='w-6' src={assets.verified_icon} alt="" />
          </h3>

          <div className='flex items-center gap-2 font-Outfit text-xl text-text2 mt-3'>
            <p>{docInfo.degree}-{docInfo.speciality}</p>
            <button className='text-base py-2 px-4 rounded-full border border-text2'>{docInfo.experience}</button>
          </div>
          {/* ------------------- doc about -------------- */}
          <div className='mt-7  '>
            <p className='flex items-center gap-2 font-Outfit font-medium text-lg text-text1'>About
              <img src={assets.info_icon} alt="" />
            </p>
            <p className='max-w-[909px] font-Outfit !text-lg leading-6 text-text2'>{docInfo.about}</p>
          </div>
          <p className='text-[22px] text-text2 mt-4 mb-7'>Appointment fee:<span className='font-medium text-text1'>{currencySymbol}{docInfo.fees}</span></p>
        </div>

      </div>

    </div>
  )
}

export default Appointment