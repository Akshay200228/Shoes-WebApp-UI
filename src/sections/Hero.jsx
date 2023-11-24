import React, { useState } from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import CountUp from "react-countup"
import { bigShoe1 } from '../assets/images'
import Shoecard from '../components/Shoecard'
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useDarkMode } from '../context/DarkModeContext'

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  const { darkMode } = useDarkMode(); // Access dark mode state

  // useInView hook for the image
  const [imageRef, imageInView] = useInView({
    triggerOnce: true, // Only trigger animation once when it comes into view
    threshold: 0.5,    // Percentage of the element that needs to be in view
  });


  return (
    <section
      id='home'
      className="flex flex-col justify-center w-full min-h-screen gap-10 xl:flex-row max-container" // Set background color based on dark mode state
    >
      <div className="relative flex flex-col items-start justify-center w-full xl:w-2/5 max-xl:padding-x pt-28">
        <p className='text-xl font-montserrat text-coral-red'>
          Our Summer Collections
        </p>

        <h1 className={`mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold ${darkMode ? 'text-darkText' : ''}`}>
          <span
            className={`relative z-10 pr-10 max-lg:z-0 xl:whitespace-nowrap ${darkMode ? 'xl:bg-darkBg' : 'xl:bg-white'}`}
          >
            The New Arrival
          </span>
          <br />
          <span className='inline-block mt-3 text-coral-red'>Nike</span> Shoes
        </h1>

        <p className={`mt-6 text-lg leading-8 font-montserrat mb-14 sm:max-w-sm ${darkMode ? 'text-white-400' : 'text-slate-gray'}`}>
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>

        <Button
          label="Shop Now"
          iconURL={arrowRight}
        />

        <div className='flex flex-wrap items-start justify-start w-full gap-16 mt-20'>
          {statistics.map(({ label, value }) => (
            <motion.div
              key={label}
            >
              {/* Value */}
              <CountUp
                start={0} end={value} duration={4}
                className={`text-4xl font-bold font-palanquin ${darkMode ? 'text-[#cccccc]' : ''}`}
              /> <span className='text-[38px] font-semibold font-palanquin text-coral-red'>k+</span>
              {/* Label */}
              <p className={`leading-7 font-montserrat ${darkMode ? 'text-white-400' : 'text-slate-gray'}`}>{label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className={`relative flex items-center justify-center flex-1 xl:min-h-screen max-xl:py-40 ${darkMode ? 'bg-darkHero' : 'bg-hero'}`}>
        <AnimatePresence>
          <motion.img
            key={bigShoeImg}
            ref={imageRef} // Attach the ref to the image element
            src={bigShoeImg}
            alt="Shoe collection"
            width={610}
            height={500}
            className='relative z-10 object-contain'
            initial={{ opacity: 0, rotate: 0 }}
            animate={{
              opacity: imageInView ? [0, 1] : 0,
              rotate: imageInView ? [0, 360] : 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 50,
              damping: 10,
              delay: 0.5,
              repeatType: 'mirror',
            }}
          />
        </AnimatePresence>

        <div className='absolute flex gap-4 sm:gap-6 -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {
            shoes.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: imageInView ? 1 : 0, y: imageInView ? 0 : 20 }}
                transition={{ delay: index * 0.1, duration: 1 }}
              >
                <Shoecard
                  imgURL={image}
                  changeBigShoeImage={
                    (shoe) => setBigShoeImg(shoe)
                  }
                  bigShoeImg={bigShoeImg}
                />
              </motion.div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Hero
