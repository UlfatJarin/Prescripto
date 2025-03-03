import React from 'react'

const Input = ({id , type , label ,placeholder ,children ,onChange,valuei }) => {
  return (
    <div className='max-w-[385px] flex flex-col gap-2'>
        <label className='text-text2' htmlFor={id}>{label}</label>
        <input className='py-1 px-2 rounded-[4px] border border-[#DADADA]' onChange={onChange} value={valuei} id={id}  type={type} placeholder={placeholder} />
        {children}
    </div>
  )
}

export default Input