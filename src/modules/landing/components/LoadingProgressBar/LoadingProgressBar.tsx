import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FormattedMessage } from 'react-intl';

import { ProgressBar as BasicProgressBar } from '@/modules/ui/components/ProgressBar';

import './styles.css';

const ProgressBarVariants = {
    visible: { opacity: 1, transition: { duration: 0.25 } },
    hidden: { opacity: 0 },
};

export type LoadingProgressBarProps = {
    procent?: number;
};

export const LoadingProgressBar = ({ procent }: LoadingProgressBarProps) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.span ref={ref} animate={controls} initial="hidden" variants={ProgressBarVariants}>
            {inView && (
                <BasicProgressBar
                    label={<FormattedMessage id="global.loading" />}
                    className="progress-bar--landing"
                    procent={procent}
                    duration={0.75}
                    delay={0.25}
                />
            )}
        </motion.span>
    );
};
