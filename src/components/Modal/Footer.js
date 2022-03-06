import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ children, className }) => (
    <div className={`modal-footer ${className}`}> 
        {children}
    </div>
)

Footer.defaultProps = {
    className: ''
}
  
Footer.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}

export default Footer