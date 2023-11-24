import React from 'react';
import Button from '../components/Button';
import { shoe8 } from '../assets/images';
import { useDarkMode } from '../context/DarkModeContext';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SuperQuality = () => {
  const { darkMode } = useDarkMode();

  // useInView hook for the section
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.6 } },
  };

  return (
    <motion.section
      id='about-us'
      className='flex items-center justify-between w-full gap-10 max-lg:flex-col max-container'
      ref={sectionRef}
      variants={sectionVariants}
      initial='hidden'
      animate={sectionInView ? 'visible' : 'hidden'}
    >
      <motion.div className='flex flex-col flex-1' variants={contentVariants}>
        <motion.h2
          className={`text-4xl font-bold capitalize font-palanquin lg:max-w-lg ${darkMode ? 'text-[#cccccc]' : ''}`}
          variants={textVariants}
        >
          We Provide You <span className='text-coral-red'>Super </span>
          <span className='text-coral-red'>Quality</span> Shoes
        </motion.h2>

        <motion.p
          className={`mt-4 lg:max-w-lg info-text ${darkMode ? 'text-white-400' : 'text-slate-gray'}`}
          variants={textVariants}
        >
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        </motion.p>

        <motion.p
          className={`mt-6 lg:max-w-lg info-text ${darkMode ? 'text-white-400' : 'text-slate-gray'}`}
          variants={textVariants}
        >
          Our dedication to detail and excellence ensures your satisfaction
        </motion.p>

        <motion.div className='mt-11' variants={buttonVariants}>
          <Button label="View details" />
        </motion.div>
      </motion.div>

      <motion.div
        className='flex items-center justify-center flex-1'
        initial={{ opacity: 0, x: -20, z: -1000, rotateY: 60 }}
        animate={{ opacity: sectionInView ? 1 : 0, x: sectionInView ? 0 : -20, z: sectionInView ? 0 : -1000, rotateY: sectionInView ? 0 : 60 }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
        whileHover={{ rotateY: 30 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className='object-contain'
        />
      </motion.div>
    </motion.section>
  );
};

export default SuperQuality;
