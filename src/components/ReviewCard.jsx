import React from 'react';
import { star } from '../assets/icons';
import { useDarkMode } from '../context/DarkModeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
    const { darkMode } = useDarkMode();
    const [cardRef, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    const imgVariants = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <motion.div
            className='flex flex-col items-center justify-center'
            ref={cardRef}
            variants={cardVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
        >
            <AnimatePresence>
                <motion.img
                    src={imgURL}
                    alt="customer"
                    className='rounded-full object-cover w-[120px] h-[120px]'
                    variants={imgVariants}
                    initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                    exit='hidden'
                />
            </AnimatePresence>

            <motion.p
                className={`max-w-sm mt-6 text-center info-text ${darkMode ? 'text-white-400' : 'text-slate-gray'
                    }`}
                variants={textVariants}
                initial='hidden'
                animate={inView ? 'visible' : 'hidden'}
            >
                {feedback}
            </motion.p>

            <div className='mt-3 flex justify-center items-center gap-2.5'>
                <img
                    src={star}
                    alt="star"
                    width={24}
                    height={24}
                    className='object-contain m-0'
                />
                <motion.p
                    className={`text-xl font-montserrat ${darkMode ? 'text-white-400' : 'text-slate-gray'
                        }`}
                    variants={textVariants}
                    initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                >
                    ({rating})
                </motion.p>
            </div>

            <motion.h3
                className={`mt-1 text-3xl font-bold text-center font-palanquin ${darkMode ? 'text-white-400' : 'text-slate-gray'
                    }`}
                variants={textVariants}
                initial='hidden'
                animate={inView ? 'visible' : 'hidden'}
            >
                {customerName}
            </motion.h3>
        </motion.div>
    );
};


export default ReviewCard;
