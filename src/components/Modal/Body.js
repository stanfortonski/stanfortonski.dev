import React from 'react'
import PropTypes from "prop-types"

const Body = ({ children, className }) => (
    <div className={`modal-body ${className}`}> 
        {children}
    </div>
)

Body.defaultProps = {
    className: ''
}
  
Body.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}

export default Body