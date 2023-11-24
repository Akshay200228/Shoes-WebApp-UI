import React from 'react';
import { offer } from '../assets/images';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { useDarkMode } from '../context/DarkModeContext';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SpeacialOffer = () => {
  const { darkMode } = useDarkMode(); // Access dark mode state

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

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.6 },
    },
  };

  return (
    <motion.section
      className='flex items-center justify-between gap-10 max-xl:flex-col-reverse max-container'
      ref={sectionRef} // Attach the ref to the section element
      variants={sectionVariants}
      initial='hidden'
      animate={sectionInView ? 'visible' : 'hidden'}
    >
      <div className='flex-1'>
        <motion.img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className='object-contain w-full'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: sectionInView ? 1 : 0, x: sectionInView ? 0 : -20 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
        />
      </div>

      <motion.div
        className="flex flex-col flex-1"
        variants={contentVariants}
      >
        <motion.h2
          className={`text-4xl font-bold capitalize font-palanquin lg:max-w-lg ${darkMode ? 'text-[#cccccc]' : ''}`}
          variants={contentVariants}
        >
          <span className='text-coral-red'>Special </span> Offer
        </motion.h2>

        <motion.p
          className={`mt-4 lg:max-w-lg info-text ${darkMode ? 'text-white-400' : 'text-slate-gray'}`}
          variants={contentVariants}
        >
          Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </motion.p>

        <motion.p
          className={`mt-6 lg:max-w-lg info-text ${darkMode ? 'text-white-400' : 'text-slate-gray'}`}
          variants={contentVariants}
        >
          Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </motion.p>

        <motion.div className='flex flex-wrap gap-4 mt-11' variants={buttonVariants}>
          {/* Btn 1 */}
          <Button
            iconURL={arrowRight}
            label="Shop Now"
          />

          {/* Btn 2 */}
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default SpeacialOffer;
