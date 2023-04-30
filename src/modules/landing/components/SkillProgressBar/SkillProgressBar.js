import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { ProgressBar as BasicProgressBar } from '@/modules/core/components/ProgressBar';

const ProgressBarVariants = {
    visible: { opacity: 1, transition: { duration: 0.25 } },
    hidden: { opacity: 0 },
};

export const SkillProgressBar = ({ procent }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.span ref={ref} animate={controls} initial="hidden" variants={ProgressBarVariants}>
            {inView && <BasicProgressBar procent={procent} />}
        </motion.span>
    );
};
