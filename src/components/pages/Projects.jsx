import React, { useState } from 'react'
import { motion } from "framer-motion";
import Navbar from '../layout/Navbar'
import { Helmet } from 'react-helmet';

const Projects = () => {
    return (
        <div>
            <Helmet>
                <title>Projects | by Rudra</title>
            </Helmet>
            <Navbar />
        </div>
    )
}

export default Projects