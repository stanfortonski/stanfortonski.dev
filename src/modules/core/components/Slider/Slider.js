import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export const SliderContext = createContext();

export const Slider = ({ className, children }) => {
    const [slides, setSlides] = useState([]);
    const [current, setCurrent] = useState(1);

    return (
        <SliderContext.Provider value={{ current, setCurrent, slides, setSlides }}>
            <div className={`slider ${className}`}>{children}</div>
        </SliderContext.Provider>
    );
};

Slider.defaultProps = {
    className: '',
};

Slider.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};
