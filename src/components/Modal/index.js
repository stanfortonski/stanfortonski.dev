import React from 'react'
import PropTypes from "prop-types"
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Title from './Title';

const Modal = ({ className, children }) => {
  return (
    <div className={`modal ${className}`}>
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
Modal.Title = Title;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal