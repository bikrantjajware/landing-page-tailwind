import React from 'react'

const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {

  return (
    <button className={`flex items-center justify-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
                      ${ backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 
                       'bg-coral-red border-coral-red text-white'  }  ${fullWidth && 'w-full'}`} >
      {label}
      {iconURL && <img className='ml-2 rounded-full w-5 h-5' src={iconURL} alt="arrow-right" />}
    </button >
  )
}

export default Button