import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <div className="preloader">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        
        className="preloader-inner"
      >
        Loading...
      </motion.div>
    </div>
  );
};

export default Preloader;
