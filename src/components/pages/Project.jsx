import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../../constants/projects'
import { Helmet } from 'react-helmet'
import Navbar from '../layout/Navbar'
import { motion } from 'framer-motion'
import ContactFloat from '../layout/ContactFloat'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import Tilt from 'react-parallax-tilt';

const Project = () => {
    const { projUrl } = useParams()
    const [project, setProject] = useState({})

    useEffect(() => {
        const matchedProject = projects.find((proj) => proj.url === projUrl);
        if (matchedProject) {
            setProject(matchedProject);
        }
    }, [projUrl]);

    return (
        <>
            <Helmet>
                <title>{project.name}</title>
            </Helmet>

            <Navbar />

            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, type: 'spring', damping: 10, stiffness: 130 }}
                className="fixed z-100 bottom-5 left-1/2 -translate-x-1/2 lg:translate-y-1/2 lg:left-5 lg:translate-x-0 lg:bottom-1/2"
            >
                <ContactFloat />
            </motion.div>

            <div className='px-3 sm:px-6 md:px-12 lg:max-w-[70%] lg:mx-auto'>
                <Link to='/projects'>
                    <motion.div className='group flex items-center gap-2 text-lg hover:text-prim'>
                        <ArrowLeft className='group-hover:-translate-x-2 transition-translate duration-300' />
                        <div>All Projects</div>
                    </motion.div>
                </Link>

                <motion.div
                    className='flex flex-col gap-5 mt-10'
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.15 } }
                    }}
                >
                    <motion.div
                        className='text-5xl text-prim relative'
                        variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-blue-500 opacity-30 blur-xl animate-pulse z-[-1] rounded-lg" />
                        <motion.div className="text-5xl text-prim">{project.name}</motion.div>
                </motion.div>

                <motion.div
                    className='text-lg italic mt-3'
                    variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.6 }}
                >
                    {project.one}
                </motion.div>

                <motion.div
                    variants={{ hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1 } }}
                    transition={{ duration: 0.6 }}
                >
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={false}>
                        <img src={project.img} alt={project.name} className='w-full max-w-2xl rounded-lg mx-auto my-5' />
                    </Tilt>
                </motion.div>

                <div className='flex md:flex-row flex-col gap-10 pb-30'>
                    <motion.div
                        className='flex flex-col gap-10'
                        variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.6 }}
                    >
                        <div>
                            <div className='text-3xl text-prim mb-2'>Project Overview</div>
                            <div className='text-lg text-white'>{project.desc}</div>
                        </div>

                        <div className='flex gap-7 md:mx-0 mx-auto'>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                href={project.git}
                                target='_blank'
                                className='flex items-center gap-2 border-2 border-sec hover:border-prim hover:text-prim p-3 text-xl sm:text-3xl rounded-md'
                            >
                                <Github />
                                <div className='whitespace-nowrap'>View Code</div>
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                href={project.link}
                                target='_blank'
                                className={`${project?.link?.length === 0 && 'hidden'} flex items-center gap-2 border-2 border-sec hover:border-prim hover:text-prim p-3 text-xl sm:text-3xl rounded-md`}
                            >
                                <ExternalLink />
                                <div className='whitespace-nowrap'>Live Site</div>
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        className='flex flex-col gap-3 p-4 border-2 rounded-lg md:w-200 lg:w-200'
                        variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className='text-2xl text-prim whitespace-nowrap'>Project Details</div>
                        <div className='text-xl'>
                            <div className=''>Year</div>
                            <div className='text-white'>{project.year}</div>
                        </div>
                        <div className='flex flex-col gap-3 text-xl'>
                            <div>Technologies</div>
                            <div className='flex items-center gap-3 flex-wrap'>
                                {
                                    project.tech && project.tech.map((elem, idx) => (
                                        <motion.div
                                            key={idx} className='p-2 border-1 border-white rounded-md text-white whitespace-nowrap'
                                        >
                                            {elem}
                                        </motion.div>
                                    ))
                                }
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div >
        </>
    )
}

export default Project;