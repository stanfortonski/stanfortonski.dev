import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const Modal = ({ className, children }) => {
    return <div className={`modal ${className}`}>{children}</div>;
};

Modal.defaultProps = {
    className: '',
};

Modal.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};
