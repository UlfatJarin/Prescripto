import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';
import { assets } from '../assets/assets';


const Appointment = () => {

  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId]);

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