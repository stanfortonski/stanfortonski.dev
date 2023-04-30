import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

import './styles.css';

const SectionVariants = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 },
};

export const Section = ({ children, className }) => {
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
            className={`section ${className}`}
        >
            {children}
        </motion.section>
    );
};

Section.defaultProps = {
    className: '',
};

Section.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};
