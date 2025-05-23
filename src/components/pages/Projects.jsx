import React, { useState } from 'react'
import { motion } from "framer-motion";
import Navbar from '../layout/Navbar'
import { Helmet } from 'react-helmet';
import ContactFloat from '../layout/ContactFloat';
import { Circle } from 'lucide-react';
import { projects } from '../../constants/projects';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';

const Projects = () => {
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const child = {
        hidden: { opacity: 0, y: 200 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };
    return (
        <>
            <Helmet>
                <title>Projects | by Rudra</title>
            </Helmet>
            <Navbar />

            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                    delay: 0.6,
                    type: 'spring',
                    damping: 10,
                    stiffness: 130,
                }}
                className="fixed z-100 
                    bottom-5 left-1/2 -translate-x-1/2 
                    lg:translate-y-1/2 lg:left-5 lg:translate-x-0 lg:bottom-1/2"
            >
                <ContactFloat />
            </motion.div>

            <div className='px-3 sm:px-6 md:px-12 lg:max-w-[70%] lg:mx-auto sm:pt-10 pb-26 lg:pb-12'>

                <motion.div
                    className='flex flex-col justify-center gap-3 text-5xl'
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', damping: 10 }}
                >
                    <div className='flex items-center gap-3'>
                        <Circle className='text-prim' />
                        <div>Projects</div>
                    </div>
                    <div className='text-lg pl-10 text-neutral-300'>
                        Me trying WebDev. Building some clones and some original projects.
                    </div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-15 gap-x-5 gap-y-10"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {projects.map((proj, idx) => (
                        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={false}
                            key={idx}
                            className="group flex flex-col gap-3 hover:border-2 hover:border-prim rounded-lg p-4"
                            // className="group flex flex-col gap-3 hover:bg-neutral-700 rounded-lg p-4"
                        >
                            <motion.div
                                variants={child}
                            >
                                <Link
                                    to={`/project/${proj.url}`}
                                >
                                    <img src={proj.img} alt={proj.name} className="rounded-md w-90 mx-auto" />

                                    <div className="relative h-[2.5rem] overflow-hidden">
                                        {/* Static name */}
                                        <div className="absolute inset-0 text-2xl text-sec transition-opacity duration-300 group-hover:opacity-0 flex items-center">
                                            {proj.name}
                                        </div>

                                        {/* Marquee */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center">
                                            <motion.div
                                                className="flex w-max"
                                                animate={{ x: ['0%', '-50%'] }}
                                                transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
                                            >
                                                {Array(2).fill(0).map((_, i) => (
                                                    <div className="flex whitespace-nowrap" key={i}>
                                                        {Array(4).fill(0).map((_, j) => (
                                                            <div className="text-2xl text-prim mx-4" key={j}>
                                                                {proj.name}
                                                            </div>
                                                        ))}
                                                    </div>
                                                ))}
                                            </motion.div>
                                        </div>
                                    </div>

                                    <div className="text-white">{proj.one}</div>
                                </Link>
                            </motion.div>
                        </Tilt>
                    ))}
                </motion.div>


            </div>
        </>
    )
}

export default Projects