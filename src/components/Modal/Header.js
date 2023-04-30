import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ children, className }) => {
    return <div className={`modal-header ${className}`}>{children}</div>;
};

Header.defaultProps = {
    className: '',
};

Header.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

export default Header;
