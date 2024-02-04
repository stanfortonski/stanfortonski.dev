import PropTypes from 'prop-types';

export const ModalHeader = ({ children, className }) => {
    return <div className={`modal-header ${className}`}>{children}</div>;
};

ModalHeader.defaultProps = {
    className: '',
};

ModalHeader.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};
