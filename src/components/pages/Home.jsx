import React from 'react'
import { motion } from 'framer-motion'
import Sidebar from '../layout/Sidebar'
import me from '../../assets/me.jpeg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Sidebar />
      <div className='px-82 font-[Trebuchet_MS]'>
        <Link to='/about'>
          <div className='relative group text-4xl text-white leading-14 flex items-center justify-between cursor-pointer'>

            {/* Animated Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <div className='mb-6'>
                I am <span className='text-[#A6D1C9] text-5xl'>Rudra Patel</span><br />
                A <span className='text-[#A6D1C9] text-5xl'>Full Stack</span><br />
                developer and<br />
                <span className='text-[#A6D1C9] text-5xl'>Computer Science</span><br />
                Sophomore
              </div>
            </motion.div>

            {/* Animated Image */}
            <motion.img
              className='h-100 rounded-xl'
              src={me}
              alt="Rudra"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            />

            {/* Scrolling About Me Text */}
            <div className="absolute -bottom-14 left-0 w-full overflow-hidden bg-transparent h-10 group-hover:block hidden">
              <motion.div
                className="flex whitespace-nowrap text-[#A6D1C9] text-xl"
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
                    <span className="mx-4" key={i}>About me •</span>
                  ))}
                </div>
                <div className="flex">
                  {Array(8).fill().map((_, i) => (
                    <span className="mx-4" key={`dup-${i}`}>About me •</span>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </Link>
      </div>
    </>
  )
}

export default Home