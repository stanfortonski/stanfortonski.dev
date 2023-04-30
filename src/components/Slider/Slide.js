import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({ children }) => {
    return <>{children}</>;
};

Slide.propTypes = {
    children: PropTypes.node,
};

export default Slide;
