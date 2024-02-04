import { useMemo, type ReactNode } from 'react';
import { motion } from 'framer-motion';

import './styles.css';

export type ProgressBarVariantType = {
    initialProcent: number | string;
    procent: number | string;
    duration: number | string;
    delay: number | string;
};

export type ProgressBarProps = {
    label?: ReactNode | string;
    className?: string;
} & Partial<ProgressBarVariantType>;

const progressBarVariants = (
    initialProcent: ProgressBarVariantType['initialProcent'],
    procent: ProgressBarVariantType['procent'],
    duration: ProgressBarVariantType['duration'],
    delay: ProgressBarVariantType['delay'],
) => ({
    initial: { width: `${initialProcent}%` },
    animate: {
        width: `${procent}%`,
        transition: { duration, delay },
    },
});

export const ProgressBar = ({
    label,
    initialProcent,
    procent,
    duration,
    delay,
    className,
}: ProgressBarProps) => {
    const variants: any = useMemo(
        () => progressBarVariants(initialProcent ?? 0, procent ?? 100, duration ?? 1, delay ?? 0),
        [initialProcent, procent, duration, delay],
    );

    return (
        <div className={`progress-bar ${className ?? ''}`}>
            {label && <div className="progress-bar__text">{label}</div>}
            <motion.div
                className="progress-bar__progress"
                variants={variants}
                initial="initial"
                animate="animate"
            />
        </div>
    );
};
