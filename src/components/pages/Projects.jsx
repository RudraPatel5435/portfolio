import React, { useState } from 'react'
import { motion } from "framer-motion";
import Sidebar from '../layout/Sidebar'

const Projects = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div>
            <Sidebar />
        </div>
    )
}

export default Projects