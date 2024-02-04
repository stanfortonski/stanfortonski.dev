import { type ReactNode, useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import './styles.css';

export type SectionType = {
    className?: string;
    children: ReactNode;
};

const SectionVariants = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 },
};

export const Section = ({ children, className }: SectionType) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.section
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={SectionVariants}
            className={`section ${className ?? ''}`}
        >
            {children}
        </motion.section>
    );
};
