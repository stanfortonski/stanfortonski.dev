import React from 'react'
import PropTypes from "prop-types"

const Title = ({ 
    children,
    className
}) => {
   
    return (
        <span className={`modal-title ${className}`}>{children}</span>
    )
}

Title.defaultProps = {
    className: ''
}
  
Title.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}

export default Title