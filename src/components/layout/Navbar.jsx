import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.png';

const RingLink = ({ to, label }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    const [isHovered, setIsHovered] = useState(false);
    const circumference = Math.PI * 2 * 48;

    return (
        <div
            className="flex flex-col items-center cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link to={to} className="text-lg">{label}</Link>
            <div className="w-5 h-5 rounded-full flex items-center justify-center">
                <svg viewBox="-23 -23 150 150" className="w-full h-full">
                    <motion.circle
                        cx="50"
                        cy="50"
                        r="48"
                        fill="none"
                        stroke="#FD7944"
                        strokeWidth="10"
                        strokeDasharray={circumference}
                        strokeDashoffset={isActive || isHovered ? 0 : circumference}
                        initial={false}
                        animate={{
                            strokeDashoffset: isActive || isHovered ? 0 : circumference,
                        }}
                        transition={{ duration: 0.3, ease: 'linear' }}
                    />
                </svg>
            </div>
        </div>
    );
};

const Navbar = () => {
    const navVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const linkVariants = {
        hidden: { opacity: 0, y: -5 },
        show: { opacity: 1, y: 0 },
    };
    return (
        <motion.div
            className="flex items-center justify-between md:py-6 md:px-82 md:mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <Link to='/' className="flex items-center justify-center gap-3">
                <motion.img
                    src={logo}
                    alt="logo"
                    className='h-8'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                />
                <motion.div
                    className='text-3xl font-mono'
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    lilachawk
                </motion.div>
            </Link>

            <motion.div
                className="flex items-center justify-between gap-6"
                variants={navVariants}
                initial="hidden"
                animate="show"
            >
                <motion.div variants={linkVariants}>
                    <RingLink to="/" label="Home" />
                </motion.div>
                <motion.div variants={linkVariants}>
                    <RingLink to="/about" label="About" />
                </motion.div>
                <motion.div variants={linkVariants}>
                    <RingLink to="/projects" label="Projects" />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Navbar;