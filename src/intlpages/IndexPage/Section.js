import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SectionVariants = {
  visible: { opacity: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, },
};

const Section = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={SectionVariants}
        className="section"
    >
        {children}
    </motion.section>
  )
}

export default Section