import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { SliderContext } from './Slider';

export const SliderNavigation = ({ className }) => {
    const { slides, setCurrent, current } = useContext(SliderContext);

    const setPrev = () => {
        setCurrent((prevState) => {
            if (prevState === 0) return prevState;
            return prevState - 1;
        });
    };

    const setNext = () => {
        setCurrent((prevState) => {
            if (prevState === slides.length - 1) return prevState;
            return prevState + 1;
        });
    };

    return (
        <div className={`slider-navigation ${className}`}>
            <button className={`prev ${current === 0 ? 'disabled' : ''}`} onClick={setPrev}>
                &lt;
            </button>
            <button
                className={`next ${current === slides.length - 1 ? 'disabled' : ''}`}
                onClick={setNext}
            >
                &gt;
            </button>
        </div>
    );
};

SliderNavigation.defaultProps = {
    className: '',
};

SliderNavigation.propTypes = {
    className: PropTypes.string,
};
