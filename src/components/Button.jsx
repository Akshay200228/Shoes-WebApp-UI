import React from 'react'

const Button = ({ label, iconURL, backgroundColor, borderColor, textColor, fullWidth }) => {
    return (
        <button
            className={`flex items-center justify-center gap-2 py-4 text-lg leading-none border px-7 font-montserrat
            ${backgroundColor
                    ? `${backgroundColor} ${borderColor} ${textColor}`
                    : "bg-coral-red text-white border-coral-red"
                }
            rounded-full ${fullWidth && 'w-full'}
            `}
        >
            {label}

            {
                iconURL && <img
                    src={iconURL}
                    alt="arrow icon"
                    className='w-5 h-5 ml-2 rounded-full'
                />
            }
        </button>
    )
}

export default Button
