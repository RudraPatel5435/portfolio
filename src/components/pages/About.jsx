import React from 'react'
import Navbar from '../layout/Navbar'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import ContactFloat from '../layout/ContactFloat'
import { BookOpen, Circle, Keyboard } from 'lucide-react'
import me from '../../assets/me.jpeg'
import { skills } from '../../constants/skills'

const About = () => {
    return (
        <>
            <Helmet>
                <title>About | Rudra</title>
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
                viewport={{ once: true }}
                className="fixed z-100 
                    bottom-5 left-1/2 -translate-x-1/2 
                    lg:translate-y-1/2 lg:left-5 lg:translate-x-0 lg:bottom-1/2"
            >
                <ContactFloat />
            </motion.div>

            <motion.div
                className='px-3 sm:px-6 md:px-12 lg:max-w-[70%] lg:mx-auto sm:pt-10'
            >
                <motion.div
                    className='flex flex-col justify-center gap-3 text-5xl'
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', damping: 10 }}
                    viewport={{ once: true }}
                >
                    <div className='flex items-center gap-3'>
                        <Circle className='text-prim' />
                        <div>About Me</div>
                    </div>
                    <div className='text-lg pl-10 text-neutral-400 italic'>
                        If you think you are unlucky, test my luck.
                    </div>
                </motion.div>

                <motion.div className='mt-15 flex sm:flex-row flex-col items-center gap-10' >
                    <motion.div
                        className='flex flex-col gap-4 bg-neutral-900/20 border-3 border-neutral-900 p-5 rounded-xl shadow-lg'
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: 'spring', damping: 15, stiffness: 100 }}
                        viewport={{ once: true }}
                    >
                        <div className='text-2xl text-prim font-semibold'>Let me tell you about myself</div>
                        <div className='text-neutral-200 leading-relaxed'>
                            Hey there! I'm Rudra, a computer science student passionate about building interactive web apps. I focus on front-end development with React and Tailwind, and also work with the MERN stack for full-stack projects. From chat apps to games and quiz builders, I love bringing ideas to life.
                            <br /><br />
                            Outside coding, I share my knowledge on YouTube and enjoy exploring new tools and tech. I'm always learning, building, and collaborating to grow as a developer.
                        </div>
                    </motion.div>
                    <motion.img
                        className='h-80 sm:h-100 rounded-xl border-2 border-neutral-700 shadow-md'
                        src={me}
                        alt="Rudra"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .5, delay: 0.1 }}
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        viewport={{ once: true }}
                    />
                </motion.div>

                <motion.div
                    className='flex items-center gap-3 text-5xl text-prim mt-20'
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring', damping: 10 }}
                    viewport={{ once: true }}
                >
                    <Keyboard size={40} className='text-sec' />
                    <div>Skills</div>
                </motion.div>

                <motion.div className='flex flex-col gap-6 mt-8'>
                    {Object.entries(skills).map(([category, items]) => (
                        <motion.div
                            key={category}
                            className='flex flex-col gap-3 border-2 border-prim p-4 bg-neutral-900/50 rounded-lg shadow-md'
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: 'spring', damping: 10 }}
                            viewport={{ once: true }}
                        >
                            <div className='text-3xl capitalize'>{category}</div>
                            <div className='flex gap-4 flex-wrap'>
                                {items.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        className='text-xl border-2 p-2  text-white rounded-md border-neutral-700'
                                    >
                                        {item}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring', damping: 10 }}
                    viewport={{ once: true }}
                    className='mt-20 pb-26'
                >
                    <div className='flex gap-3 items-center'>
                        <BookOpen size={40} className='text-sec' />
                        <div className='text-5xl text-prim'>Education</div>
                    </div>
                    <div className='mt-8 flex flex-col gap-2 text-xl pl-12 text-neutral-300'>
                        <div>Computer Science and Engineering (AI & ML)</div>
                        <div className='text-white font-semibold'>Adani University | 2024 - 2028</div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    )
}

export default About