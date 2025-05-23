import React from 'react'
import Navbar from '../layout/Navbar'
import { Helmet } from 'react-helmet'
import HomeAbout from '../homePage/homeAbout'
import HomeProjects from '../homePage/HomeProjects'
import { motion } from 'motion/react'
import { quotes } from '../../constants/quotes'
import ContactFloat from '../layout/ContactFloat'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Rudra</title>
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

        <motion.div initial={{ y: -300 }} animate={{ y: 0 }} transition={{ delay: .5, type: 'spring', damping: 20, stiffness: 260 }} className='flex items-center justify-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-sec mb-16 sm:mb-24'>
          {quotes[Math.floor(Math.random() * 6)]}
        </motion.div>

        <HomeAbout />

        <motion.svg
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ delay: .4, type: "spring", damping: 18, stiffness: 200 }}
          className="w-full h-32 sm:mt-10"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#A6D1C9"
            fillOpacity="1"
            d="
      M0,220 
      C360,300, 1080,140, 1440,220 
      V320H0Z
    "
          >
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
        M0,220 C360,300,1080,140,1440,220 V320H0Z;
        M0,260 C360,180,1080,300,1440,260 V320H0Z;
        M0,200 C360,240,1080,200,1440,220 V320H0Z;
        M0,220 C360,160,1080,280,1440,200 V320H0Z;
        M0,240 C360,260,1080,160,1440,250 V320H0Z;
        M0,220 C360,300,1080,140,1440,220 V320H0Z
      "
            />
          </path>
        </motion.svg>

        <HomeProjects />

      </div>
    </>
  )
}

export default Home