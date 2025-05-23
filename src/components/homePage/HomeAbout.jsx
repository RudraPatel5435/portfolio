import { motion } from 'framer-motion'
import me from '../../assets/me.jpeg'
import { Link } from 'react-router-dom'

const HomeAbout = () => {
  return (
    <>
        <Link to='/about'>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className='relative group sm:text-xl md:text-3xl lg:text-4xl text-white sm:leading-14 flex items-center justify-between cursor-pointer border-2 border-prim p-5 rounded-2xl'>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <div className='mb-6'>
                I am <span className='text-prim text-xl sm:text-2xl md:text-4xl lg:text-5xl'>Rudra Patel</span><br />
                A <span className='text-prim text-xl sm:text-2xl md:text-4xl lg:text-5xl'>Full Stack</span><br />
                developer and<br />
                <span className='text-prim text-xl sm:text-2xl md:text-4xl lg:text-5xl'>Computer Science</span><br />
                Sophomore
              </div>
            </motion.div>

            <motion.img
              className='h-50 sm:h-100 rounded-xl'
              src={me}
              alt="Rudra"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            />

            <div className="absolute -top-14 left-0 w-full overflow-hidden bg-transparent h-10 group-hover:block hidden">
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
                    <span className="mx-4 text-sec" key={i}>About me &nbsp;&nbsp; <span className='text-prim'>•</span> </span>
                  ))}
                </div>
                <div className="flex">
                  {Array(8).fill().map((_, i) => (
                    <span className="mx-4 text-sec" key={`dup-${i}`}>About me &nbsp;&nbsp; <span className='text-prim'>•</span></span>
                  ))}
                </div>
              </motion.div>
            </div>

          </motion.div>
        </Link>
    </>
  )
}

export default HomeAbout