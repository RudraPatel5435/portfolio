import { motion, useAnimation } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useEffect, useRef } from "react";

const ContactFloat = () => {
  const controls = useAnimation();
  const lastScrollY = useRef(window.scrollY);
  const scrollTimeout = useRef(null);

  useEffect(() => {
  const handleScroll = () => {
    const currentY = window.scrollY;

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    // Move up or down
    if (currentY > lastScrollY.current) {
      controls.start({ y: 40, transition: { duration: 0.3, ease: "linear" } });
    } else {
      controls.start({ y: -40, transition: { duration: 0.3, ease: "linear" } });
    }

    // Reset back
    scrollTimeout.current = setTimeout(() => {
      controls.start({ y: 0, transition: { duration: 0.5, ease: "easeOut" } });
    }, 200);

    lastScrollY.current = currentY;
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
  };
}, [controls]);

  return (
    <motion.div
      animate={controls}
      transition={controls}
      className="bg-neutral-600 rounded-full px-3 py-4 sm:scale-100 scale-90"
    >
        <div className="flex sm:flex-row lg:flex-col justify-center items-center gap-5">
            <a href="https://www.linkedin.com/in/rudra-patel-87a941323/" target="_blank"><Linkedin size={34} className="hover:text-prim cursor-pointer" /></a>
            <a href="https://github.com/RudraPatel5435" target="_blank"><Github size={34} className="hover:text-prim cursor-pointer"/></a>
            <a href="https://x.com/RudraPatel5435" target="_blank"><Twitter size={34} className="hover:text-prim cursor-pointer" /></a>
            <a href="mailto:rudranpatel0980@gmail.com"><Mail size={34} className="hover:text-prim cursor-pointer" /></a>
        </div>
    </motion.div>
  );
};

export default ContactFloat;