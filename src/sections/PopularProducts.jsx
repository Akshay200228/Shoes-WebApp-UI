import React from 'react';
import { products } from '../constants';
import PopularProductCard from '../components/PopularProductCard';
import { useDarkMode } from '../context/DarkModeContext';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PopularProducts = () => {
  const { darkMode } = useDarkMode(); // Access dark mode state

  // useInView hook for the section
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section
      id='products'
      className='max-container max-sm:mt-12'
      ref={sectionRef} // Attach the ref to the section element
    >
      <div className={`flex flex-col justify-start gap-5 ${sectionInView ? 'animate-fadeIn' : ''}`}>
        <motion.h2
          className={`text-4xl font-bold font-palanquin ${darkMode ? 'text-[#cccccc]' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Our <span className='text-coral-red'>Popular</span> Products
        </motion.h2>
        <motion.p
          className={`mt-2 lg:max-w-lg font-montserrat ${darkMode ? 'text-white-400' : 'text-slate-gray'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value.
        </motion.p>
      </div>

      <motion.div
        className={`grid grid-cols-1 mt-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 gap-14 ${sectionInView ? 'animate-fadeInUp' : ''}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        style={{ display: sectionInView ? 'grid' : 'none' }} // Add this line to control display
      >
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </motion.div>
    </section>
  );
};

export default PopularProducts;
