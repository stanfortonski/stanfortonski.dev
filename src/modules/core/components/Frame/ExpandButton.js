import PropTypes from 'prop-types';

export const ExpandButton = ({ onClick }) => (
    <button className="modal-btn btn-expand" onClick={onClick}>
        [<span className="space"> </span>]
    </button>
);

ExpandButton.propTypes = {
    onClick: PropTypes.func,
};
