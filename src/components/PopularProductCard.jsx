import React from 'react'
import { star } from '../assets/icons'
import { useDarkMode } from '../context/DarkModeContext';

const PopularProductCard = ({ imgURL, name, price }) => {
    const { darkMode } = useDarkMode(); // Access dark mode state

    return (
        <div className='flex flex-col flex-1 w-full max-sm:w-full'>
            <img
                src={imgURL}
                alt={name}
                className='w-[280px] h-[280px]'
            />

            <div className='mt-8 flex justify-start gap-2.5'>
                <img
                    src={star} alt="rating"
                    width={24}
                    height={24}
                />
                <p className={`text-xl leading-normal font-montserrat ${darkMode ? 'text-white-400' : 'text-slate-gray'}`}>(4.5)</p>
            </div>
            <h3 className={`mt-2 text-2xl font-semibold leading-normal font-palanquin ${darkMode ? 'text-[#cccccc]' : ''}`}>{name}</h3>
            <p className='mt-2 text-2xl font-semibold leading-normal font-montserrat text-coral-red'>{price}</p>
        </div>
    )
}

export default PopularProductCard
