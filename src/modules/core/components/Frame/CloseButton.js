import PropTypes from 'prop-types';

export const CloseButton = ({ onClick }) => (
    <button className="modal-btn btn-close" onClick={onClick}>
        <span>x</span>
    </button>
);

CloseButton.propTypes = {
    onClick: PropTypes.func,
};
