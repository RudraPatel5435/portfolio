import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { projects } from '../../constants/projects'
import { Helmet } from 'react-helmet'
import Navbar from '../layout/Navbar'

const Project = () => {


    const { projUrl } = useParams()
    const [project, setProject] = useState({})
    useEffect(() => {
        const matchedProject = projects.find((proj) => proj.url === projUrl);
        if (matchedProject) {
            setProject(matchedProject);
        }
    }, [projUrl]);
    console.log(project)
    return (
        <>
            <Helmet>
                <title>{project.name}</title>
            </Helmet>

            <Navbar />
        </>
    )
}

export default Project