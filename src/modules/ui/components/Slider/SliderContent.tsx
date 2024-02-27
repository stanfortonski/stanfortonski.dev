import React, { type ReactNode, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import { SliderContext } from './Slider';

const defaultVariants = (current: number) => {
    return {
        initial: { left: `-${current * 100}%` },
        animate: {
            left: `-${current * 100}%`,
            transition: {
                stiffness: 20,
            },
        },
    };
};

export type SliderContentProps = {
    className?: string;
    children: ReactNode;
    variants?: CallableFunction;
};

export const SliderContent = ({ className, children, variants }: SliderContentProps) => {
    const { current, setCurrent, slides, setSlides } = useContext(SliderContext);

    useEffect(() => {
        setSlides(React.Children.toArray(children));

        slides.forEach((slide, index) => {
            if (slide.props.current) setCurrent(index);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [children, setCurrent, setSlides]);

    return (
        <motion.div
            className={classNames('slider-content', className)}
            variants={variants ? variants(current) : defaultVariants(current)}
            initial="initial"
            animate="animate"
        >
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide ${current === index ? 'current' : ''}`}
                    onClick={() => setCurrent(index)}
                >
                    {slide}
                </div>
            ))}
        </motion.div>
    );
};
