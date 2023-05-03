import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import './styles.css';

const progressBarVariants = (initialProcent, procent, duration, delay) => ({
    initial: { width: `${initialProcent}%` },
    animate: {
        width: `${procent}%`,
        transition: { duration, delay },
    },
});

export const ProgressBar = ({ label, initialProcent, procent, duration, delay, className }) => {
    return (
        <div className={`progress-bar ${className}`}>
            {label && <div className="progress-bar__text">{label}</div>}
            <motion.div
                className="progress-bar__progress"
                variants={progressBarVariants(initialProcent, procent, duration, delay)}
                initial="initial"
                animate="animate"
            />
        </div>
    );
};

ProgressBar.propTypes = {
    label: PropTypes.any,
    initialProcent: PropTypes.number.isRequired,
    procent: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
    delay: PropTypes.number,
    className: PropTypes.string,
};

ProgressBar.defaultProps = {
    initialProcent: 0,
    procent: 100,
    duration: 1,
    delay: 0,
    className: '',
};