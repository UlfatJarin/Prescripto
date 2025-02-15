import React from 'react'

const Button = ({btntext,classname ,onClick ,children}) => {
  return (    
        <button onClick={onClick}  className={`bg-primary py-3 px-9 font-Outfit font-normal text-lg text-whitec rounded-full flex items-center gap-3 hover:scale-105 transition-all duration-300  ${classname}`}>
            {btntext}
            {children}

        </button>
  )
}

export default Button