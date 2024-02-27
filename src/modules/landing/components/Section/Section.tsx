import { type ReactNode, useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

import './styles.css';

export type SectionType = {
    className?: string;
    containerClass?: string;
    children: ReactNode;
};

const SectionVariants = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 },
};

export const Section = ({
    children,
    className,
    containerClass = 'container mx-auto',
}: SectionType) => {
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
            className={classNames('section', className)}
        >
            <div className={containerClass}>{children}</div>
        </motion.section>
    );
};
