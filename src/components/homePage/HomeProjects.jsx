import { Circle } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'
import { projects } from '../../constants/projects'
import { Link } from 'react-router-dom'

const HomeProjects = () => {
    return (
        <div className='mt-14 sm:mt-30 pb-25 sm:pb-10'>
            <motion.div initial={{ x: -200, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: .5 }} viewport={{ once: true }} className='flex items-center gap-3 text-3xl sm:text-4xl'>
                <Circle className='text-prim' />
                Projects
            </motion.div>
            <div className='flex flex-col mt-12'>
                {
                    projects.slice(0, 4).map((proj, idx) => (
                        <Link key={idx} to={`/project/${proj.url}`}>
                            <motion.div
                                className={`group relative py-5 flex gap-3 overflow-hidden`}
                            >
                                <motion.div
                                    className="absolute top-0 left-0 h-[3px] bg-prim z-10"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    transition={{ duration: 0.8, ease: 'easeOut' }}
                                    viewport={{ once: true }}
                                />

                                {idx === 3 && (
                                    <motion.div
                                        className="absolute bottom-0 left-0 h-[3px] bg-prim z-10"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '100%' }}
                                        transition={{ duration: 0.8, ease: 'easeOut' }}
                                        viewport={{ once: true }}
                                    />
                                )}

                                <div className="absolute bottom-0 left-0 w-full h-0 bg-sec transition-all duration-800 group-hover:h-full z-0" />

                                <motion.div
                                    className="relative z-10 h-[2.5rem] sm:h-[3rem] w-full overflow-hidden group"
                                    initial={{ x: -500, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ type: 'spring', damping: 15 }}
                                >

                                    <div className="flex items-center gap-3">
                                        <div className="text-3xl sm:text-5xl text-white group-hover:opacity-0 transition-opacity duration-300">
                                            {proj.name}
                                        </div>
                                        <div className="text-white text-sm sm:text-base group-hover:opacity-0 transition-opacity duration-300">
                                            {`[0${idx + 1}]`}
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex">
                                        <motion.div
                                            className="flex w-max animate-marquee"
                                            animate={{ x: ['0%', '-50%'] }}
                                            transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
                                        >
                                            {Array(2).fill(0).map((_, i) => (
                                                <div className="flex whitespace-nowrap" key={i}>
                                                    {Array(8).fill(0).map((_, j) => (
                                                        <div className="text-prim mix-blend-difference mx-4 flex items-center text-lg sm:text-2xl" key={j}>
                                                            {proj.name}&nbsp;&nbsp;&nbsp;&nbsp;
                                                            <div className="text-white mix-blend-difference text-sm sm:text-base">
                                                                {`[0${idx + 1}]`}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </Link>
                    ))
                }
                <motion.div 
                    className='mt-8 text-lg text-sec hover:text-prim'
                    initial={{x: -200, opacity: 0}} 
                    whileInView={{x: 0, opacity: 1}}
                    transition={{type: 'spring', damping: 10}}
                >
                    <Link to='projects' >
                        {`View All -->`}
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}

export default HomeProjects