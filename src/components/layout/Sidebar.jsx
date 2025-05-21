import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.png'

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
                        stroke="#A6D1C9"
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
const Sidebar = () => {
    return (
        <div className="flex items-center justify-between md:py-6 md:px-82 md:mb-16">
            <Link to='/' className="flex items-center justify-center gap-3">
                <img src={logo} alt="logo" className='h-8' />
                <div className='text-3xl font-mono'>lilachawk</div>
            </Link>

            <div className="flex items-center justify-between gap-6">
                <RingLink to="/" label="Home" />
                <RingLink to='/about' label="About" />
                <RingLink to="/projects" label="Projects" />
            </div>

        </div>
    );
};

export default Sidebar;