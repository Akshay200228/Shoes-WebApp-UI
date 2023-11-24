import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import { motion } from 'framer-motion';

const ServiceCard = ({ imgURL, label, subtext }) => {
  const { darkMode } = useDarkMode();

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.02,
    },
  };

  return (
    <motion.div
      className={`flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] ${darkMode ? 'bg-slate-800 shadow-none' : 'bg-white shadow-3xl'} px-10 py-16`}
      variants={cardVariants}
      initial='hidden'
      whileHover='hover' // Apply hover animation on hover
      animate='visible'
    >
      <div className='flex items-center justify-center rounded-full w-11 h-11 bg-coral-red'>
        <img
          src={imgURL}
          alt={label}
          width={24}
          height={24}
        />
      </div>

      <h3 className={`mt-5 text-3xl font-bold leading-normal font-palanquin ${darkMode ? 'text-[#cccccc]' : ''}`}>
        {label}
      </h3>

      <p className={`mt-3 text-lg leading-normal break-words font-montserrat ${darkMode ? 'text-white-400' : 'text-slate-gray'}`}>
        {subtext}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
