import React from 'react'

const Title = ({title,text,className }) => {
  return (
    <div className={`text-center max-w-[573px] mx-auto ${className}`}>
        <h2 className='font-Outfit font-medium text-[40px] text-text1 mb-3'>{title}</h2>
        <p className='font-Outfit font-normal text-lg text-text2 leading-7'>{text}</p>
    </div>
  )
}

export default Title