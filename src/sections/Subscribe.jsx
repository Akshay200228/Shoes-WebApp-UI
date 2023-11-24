import React from 'react'
import Button from '../components/Button'
import { useDarkMode } from '../context/DarkModeContext';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Subscribe = () => {
  const { darkMode } = useDarkMode();
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut', delay: 0.4 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut', delay: 0.6 },
    },
  };

  return (
    <motion.section
      className='flex items-center justify-between gap-10 max-container max-lg:flex-col'
      id='contact-us'
      ref={sectionRef}
      variants={sectionVariants}
      initial='hidden'
      animate={sectionInView ? 'visible' : 'hidden'}
    >
      <motion.h3
        className={`text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold ${darkMode ? 'text-[#cccccc]' : ''}`}
        variants={formVariants}
      >
        Sign Up Form <span className='text-coral-red'>Updates</span> & Newsletter
      </motion.h3>

      <motion.div
        className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'
        variants={formVariants}
      >
        <input
          type="text"
          placeholder='subscribe@nike.com'
          className={`input ${darkMode ? 'bg-transparent' : ''}`}
        />

        <motion.div
          className='flex items-center max-sm:justify-end max-sm:w-full'
          variants={buttonVariants}
        >
          <Button label="signUp" fullWidth />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Subscribe;
