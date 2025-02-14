import React from 'react'

const Button = ({btntext,classname ,onClick}) => {
  return (    
        <button onClick={onClick}  className={`bg-primary py-3 px-9 font-Outfit font-normal text-lg text-whitec rounded-full  ${classname}`}>
            {btntext}

        </button>
  )
}

export default Button