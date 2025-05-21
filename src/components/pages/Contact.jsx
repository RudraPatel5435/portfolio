import { motion } from "motion/react";
import Navbar from "../layout/Navbar";

function Contact() {
  return (
    <div>
      <Navbar/>

<div className="ml-40">

</div>
      <div className="w-full h-screen flex items-center justify-center">
        <svg
          viewBox="0 0 1000 1000"
          className="w-full h-auto max-w-[1000px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="circlePath"
              d="
                M 500,500
                m -400,0
                a 400,400 0 1,0 800,0
                a 400,400 0 1,0 -800,0
              "
            />
          </defs>

          <circle cx="500" cy="500" r="400" stroke="white" strokeOpacity={1} fill="none" />

          <motion.g
            animate={{ rotate: 360 }}
            transform="rotate(0 500 500)"
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
          >
            <text
              fill="white"
              fontSize="32"
              letterSpacing="5"
              style={{ textTransform: "uppercase" }}
            >
              <textPath xlinkHref="#circlePath" startOffset="0%">
                THINKER • THINKER • THINKER • THINKER • THINKER • THINKER •
              </textPath>
            </text>
          </motion.g>
        </svg>
      </div>
    </div>
  );
}

export default Contact;