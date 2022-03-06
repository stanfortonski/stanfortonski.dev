import React from 'react'
import PropTypes from "prop-types"
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const Modal = ({ className, children, id }) => {
  return (
    <div className={`modal ${className}`} id={id}>
      {children}
    </div>
  )
}

Modal.defaultProps = {
  className: ''
}

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal