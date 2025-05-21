import React, { useState } from 'react'
import { motion } from "framer-motion";
import Navbar from '../layout/Navbar'

const Projects = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div>
            <Navbar />
        </div>
    )
}

export default Projects