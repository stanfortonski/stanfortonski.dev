import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

const TypeWriter = ({ text, duration, delay, cursor }) => {
    const [typed, setTyped] = useState('');

    useEffect(() => {
        const doType = () => {
            setTimeout(() => {
                if (typed.length < text.length) {
                    setTyped(text.substring(0, typed.length + 1));
                }
            }, duration);
        };

        if (typed.length === 0) {
            setTimeout(() => {
                doType();
            }, delay);
        } else doType();
    }, [typed, text, duration, delay]);

    return (
        <>
            {typed}
            <span className="blink">{cursor}</span>
        </>
    );
};

TypeWriter.propTypes = {
    text: PropTypes.string.isRequired,
    duration: PropTypes.number,
    delay: PropTypes.number,
    cursor: PropTypes.string,
};

TypeWriter.defaultProps = {
    duration: 200,
    delay: 0,
    cursor: '_',
};

export default TypeWriter;
