import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../layout/Navbar'
import me from '../../assets/me.jpeg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='px-82'>
        <Link to='/about'>
          <motion.div whileHover={{scale: 1.03}} whileTap={{scale: 0.97}} className='relative group text-4xl text-white leading-14 flex items-center justify-between cursor-pointer hover:border-2 border-prim p-5 rounded-2xl'>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <div className='mb-6'>
                I am <span className='text-prim text-5xl'>Rudra Patel</span><br />
                A <span className='text-prim text-5xl'>Full Stack</span><br />
                developer and<br />
                <span className='text-prim text-5xl'>Computer Science</span><br />
                Sophomore
              </div>
            </motion.div>

            <motion.img
              className='h-100 rounded-xl'
              src={me}
              alt="Rudra"
              initial={{ opacity: 0, x: 50, rotateY: 90 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
              style={{ transformOrigin: '0% 50%' }} 
            />

            <div className="absolute -bottom-14 left-0 w-full overflow-hidden bg-transparent h-10 group-hover:block hidden">
              <motion.div
                className="flex whitespace-nowrap text-prim text-xl"
                animate={{ x: ['0%', '-100%'] }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 10,
                  ease: 'linear',
                }}
              >
                <div className="flex">
                  {Array(8).fill().map((_, i) => (
                    <span className="mx-4" key={i}>About me &nbsp;&nbsp; • </span>
                  ))}
                </div>
                <div className="flex">
                  {Array(8).fill().map((_, i) => (
                    <span className="mx-4" key={`dup-${i}`}>About me &nbsp;&nbsp; •</span>
                  ))}
                </div>
              </motion.div>
            </div>

          </motion.div>
        </Link>
      </div>
    </>
  )
}

export default Home