import React, { useEffect, useState } from 'react';
import { headerLogo } from '../assets/images'; // Import dark and light mode icons
import { close, hamburger, moon, sun } from '../assets/icons';
import { navLinks } from '../constants';
import { motion } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext'; // Import the useDarkMode hook

const Nav = () => {
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { darkMode, toggleDarkMode } = useDarkMode(); // Access dark mode state and toggle function

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.header
            className={`fixed top-0 z-50 w-full py-8 padding-x ${scrolled ? (darkMode ? 'bg-[#262626]' : 'bg-white') : 'bg-transparent'}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
        >
            <nav className='flex items-center justify-between max-container'>
                <a href="/">
                    <img
                        src={headerLogo}
                        alt="logo"
                        width={130}
                        height={29}
                    />
                </a>

                <ul className='flex items-center justify-center flex-1 gap-16 max-lg:hidden'>
                    {
                        navLinks.map(({ label, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    className={`p-2 text-lg leading-normal transition duration-300 rounded-lg font-montserrat hover:bg-coral-red hover:text-white ${scrolled ? 'hover:text-white' : 'hover:text-slate-gray'} ${darkMode ? 'text-white' : 'text-slate-gray'}`}
                                >
                                    {label}
                                </a>
                            </li>
                        ))
                    }
                </ul>

                {/* Dark/Light Mode Switch */}
                <button
                    className="flex items-center justify-center ml-4 bg-transparent max-lg:hidden"
                    onClick={toggleDarkMode}
                >
                    <span className="sr-only">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                    <img
                        src={darkMode ? sun : moon}
                        alt={darkMode ? "Sun" : "Moon"}
                        width={40}
                        height={40}
                        className="w-6 h-6"
                    />
                </button>


                {/* Mobile Nav */}
                <div className='hidden max-lg:block'>
                    <img
                        src={toggle ? close : hamburger}
                        alt="hamburger"
                        width={25}
                        height={25}
                        onClick={() => {
                            setToggle((prevToggle) => !prevToggle);
                        }}
                        className='cursor-pointer'
                    />
                    {
                        toggle && (
                            <div className='absolute right-0 p-4 mt-4 mr-4 rounded-md shadow-3xl bg-white-gradient top-full'>
                                <ul>
                                    {navLinks.map(({ label, href }) => (
                                        <li key={label} className='mb-2'>
                                            <a
                                                href={href}
                                                className='text-lg font-bold leading-normal transition font-montserrat text-slate-gray hover:text-coral-red'
                                            >
                                                {label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                {/* Dark/Light Mode Switch */}
                                <button
                                    className="flex items-center justify-center ml-4 bg-transparent"
                                    onClick={toggleDarkMode}
                                >
                                    <span className="sr-only">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                                    <img
                                        src={darkMode ? sun : moon}
                                        alt={darkMode ? "Sun" : "Moon"}
                                        width={40}
                                        height={40}
                                        className="w-6 h-6"
                                    />
                                </button>
                            </div>
                        )
                    }
                </div>
            </nav>
        </motion.header>
    )
}

export default Nav;
