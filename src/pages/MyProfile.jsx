import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: 'richardjameswap@gmail.com',
    phone: '+1  123 456 7890',
    address: {
      line1: "57th Cross, Richmond ",
      line2: "Circle, Church Road, London",
    },
    gender: 'Male',
    dob: '2000-06-20',
  });

  const [isEdit, setIsEdit] = useState(true)

  return (
    <div className='mt-14 max-w-[645px]'>
      <img className='max-w-[160px] rounded-lg' src={userData.image} alt="" />
      {
        isEdit ?
          <input className='font-medium !text-[32px] text-text1 mt-8 mb-2' type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
          : <p className='font-medium !text-[32px] text-text1 mt-8 mb-2'>{userData.name}</p>
      }
      <hr className='w-full bg-[#ADADAD]' />
      <div>
        <h5 className='text-[#797979] underline capitalize my-6'>CONTACT INFORMATION</h5>
        <div className='grid grid-cols-[1fr_3fr] gap-y-4'>
          <p className='text-lg text-text2'>Email id:</p>
          <p  className='text-[#3C96FF] text-lg'>{userData.email}</p>
          <p className='text-lg text-text2'>Phone:</p>
          {
            isEdit
              ? <input type="" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
              : <p className='text-[#3C96FF] text-lg'>{userData.phone}</p>
          }
          <p className='text-lg text-text2'>Address:</p>
          {
            isEdit
              ? 
              <>
                <input type="text" value={userData.address.line1} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} />
                <br />
                <input type="text" value={userData.address.line2} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} />
                </>
              : <p className='text-text3 text-lg'>
                {userData.address.line1}
                <br />
                {userData.address.line2}
                </p>
           }
              </div>
         </div>

        <div>
          <h5 className='text-[#797979] underline capitalize my-6'>BASIC INFORMATION</h5>
          <div className='grid grid-cols-[1fr_3fr] gap-y-4'>
            <p className='text-lg text-text2'>Gender:</p>
            {
              isEdit
                ? <select name="" id="" value={userData.gender} onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                : <p className='text-text3 text-lg'>{userData.gender}</p>
            }
            <p className='text-lg text-text2'>Birthday:</p>
            {
              isEdit
                ? <input type='date' value={userData.dob} onChange={(e)=>setUserData(prev=>({...prev ,dob:e.target.value}))} />
                : <p className='text-text3 text-lg'>{userData.dob}</p>
            }

          </div>
        </div>
        <div className='mt-14'>
          {
            isEdit
            ? <button className='px-12 py-2 rounded-full border border-primary hover:bg-primary text-text2 hover:text-whitec transition-all' onClick={()=>setIsEdit(false)}>Save information</button>
            : <button className='px-12 py-2 rounded-full border border-primary hover:bg-primary text-text2 hover:text-whitec transition-all' onClick={()=>setIsEdit(true)}>Edit</button>
          }
        </div>
      </div>

        );
};

      export default MyProfile;