import React from 'react';
import PropTypes from 'prop-types';

export const ModalFooter = ({ children, className }) => (
    <div className={`modal-footer ${className}`}>{children}</div>
);

ModalFooter.defaultProps = {
    className: '',
};

ModalFooter.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};
