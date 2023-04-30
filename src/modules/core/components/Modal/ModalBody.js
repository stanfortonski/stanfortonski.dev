import React from 'react';
import PropTypes from 'prop-types';

export const ModalBody = ({ children, className }) => (
    <div className={`modal-body ${className}`}>{children}</div>
);

ModalBody.defaultProps = {
    className: '',
};

ModalBody.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};
