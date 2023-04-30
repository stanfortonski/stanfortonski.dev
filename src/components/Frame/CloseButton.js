import React from 'react';
import PropTypes from 'prop-types';

const CloseButton = ({ onClick }) => (
    <button className="modal-btn btn-close" onClick={onClick}>
        <span>x</span>
    </button>
);

CloseButton.propTypes = {
    onClick: PropTypes.func,
};

export default CloseButton;
