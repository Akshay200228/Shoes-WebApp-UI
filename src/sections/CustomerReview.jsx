import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { reviews } from '../constants';
import ReviewCard from '../components/ReviewCard';
import { useDarkMode } from '../context/DarkModeContext';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CustomerReview = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { darkMode } = useDarkMode(); // Access dark mode state
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const handleSlideChange = () => {
    if (swiper) {
      setActiveIndex(swiper.realIndex);
    }
  };

  const handleRadioClick = (index) => {
    if (swiper) {
      swiper.slideTo(index); // Slide to the selected index
      setActiveIndex(index); // Update the activeIndex
    }
  };

  return (
    <motion.section
      className='max-container'
      ref={sectionRef} // Attach the ref to the section element
      initial={{ opacity: 0 }}
      animate={{ opacity: sectionInView ? 1 : 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.h3
        className={`text-4xl font-bold text-center font-palanquin ${darkMode ? 'text-white-400' : 'text-black'}`}
      >
        What Our <span className='text-coral-red'>Customer</span> Say?
      </motion.h3>

      <motion.p
        className={`max-w-lg m-auto mt-4 text-center info-text ${darkMode ? 'text-white-400' : 'text-slate-gray'}`}
      >
        Hear genuine stories from our satisfied customers about their exceptional experiences with us.
      </motion.p>

      <div className='mt-24'>
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          spaceBetween={30}
          loop={true}
          effect='coverflow'
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          onSwiper={(swiper) => setSwiper(swiper)}
          onSlideChange={handleSlideChange}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard
                imgURL={review.imgURL}
                customerName={review.customerName}
                rating={review.rating}
                feedback={review.feedback}
                index={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <motion.div
        className='flex justify-center mt-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: sectionInView ? 1 : 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
      >
        {reviews.map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${activeIndex === index ? 'bg-coral-red' : 'bg-gray-300'
              }`}
            onClick={() => handleRadioClick(index)}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default CustomerReview;
