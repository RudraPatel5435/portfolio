import React from 'react'
import Navbar from '../layout/Navbar'
import { Helmet } from 'react-helmet'
import {motion} from 'motion/react'
import ContactFloat from '../layout/ContactFloat'

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
        className="fixed z-100 
                    bottom-5 left-1/2 -translate-x-1/2 
                    lg:translate-y-1/2 lg:left-5 lg:translate-x-0 lg:bottom-1/2"
      >
        <ContactFloat />
      </motion.div>

      <div className='px-3 sm:px-6 md:px-12 lg:max-w-[70%] lg:mx-auto sm:pt-10'>

      </div>
    </>
  )
}

export default About