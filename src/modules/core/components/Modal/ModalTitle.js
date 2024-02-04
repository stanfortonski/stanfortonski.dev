import PropTypes from 'prop-types';

export const ModalTitle = ({ children, className }) => {
    return <span className={`modal-title ${className}`}>{children}</span>;
};

ModalTitle.defaultProps = {
    className: '',
};

ModalTitle.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};
