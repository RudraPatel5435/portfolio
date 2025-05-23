import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { projects } from '../../constants/projects'
import { Helmet } from 'react-helmet'
import Navbar from '../layout/Navbar'
import { motion } from 'motion/react'
import ContactFloat from '../layout/ContactFloat'
import { ArrowLeft } from 'lucide-react'
import { div } from 'motion/react-client'

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

            <div className='px-3 sm:px-6 md:px-12 lg:max-w-[70%] lg:mx-auto'>

                <motion.div className='flex items-center gap-3 text-lg'>
                    <ArrowLeft />
                    <div>All Projects</div>
                </motion.div>


                <div className='flex flex-col gap-5'>
                    <motion.div>
                        {project.name}
                    </motion.div>

                    <motion.div>
                        {project.one}
                    </motion.div>

                    <img src={project.img} alt={project.name} className='max-w-140' />

                    <div className='flex md:flex-col flex-row gap-5'>
                        <motion.div>
                            <div>Project Overview</div>
                            <div>{project.desc}</div>
                        </motion.div>
                        <motion.div>
                            <div>
                                Project Details
                            </div>
                            <div>
                                <div>Year</div>
                                <div>{project.year}</div>
                            </div>
                            <div>
                                <div>Technologies</div>
                                <div className='flex items-center gap-3'>
                                    {
                                        project.tech && project.tech.map((elem, idx) => (
                                            <div key={idx}>{elem}</div>
                                        ))
                                    }
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project