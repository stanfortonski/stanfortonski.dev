import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BasicProgressBar from '../../components/ProgressBar'

const ProgressBarVariants = {
  visible: { opacity: 1, transition: { duration: 0.25 } },
  hidden: { opacity: 0 },
};

const ProgressBar = ({ procent }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.span
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={ProgressBarVariants}
    >
      {inView && <BasicProgressBar procent={procent} duration={0.75} delay={0.25} />}
    </motion.span>
  )
}

export default ProgressBar