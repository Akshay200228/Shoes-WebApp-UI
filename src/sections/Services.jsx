import React from 'react';
import { services } from '../constants';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { useInView } from 'react-intersection-observer'; // Import the useInView hook

const Services = () => {
  return (
    <section className='flex flex-wrap justify-center max-container gap-9'>
      {services.map((service) => (
        <ServiceCardWithAnimation key={service.label} {...service} />
      ))}
    </section>
  );
};

// Create a new component that wraps ServiceCard with animations and useInView
const ServiceCardWithAnimation = ({ imgURL, label, subtext }) => {
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={cardRef} // Attach the ref to the div element
      variants={cardVariants}
      initial='hidden'
      animate={cardInView ? 'visible' : 'hidden'}
    >
      <ServiceCard {...{ imgURL, label, subtext }} />
    </motion.div>
  );
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default Services;
