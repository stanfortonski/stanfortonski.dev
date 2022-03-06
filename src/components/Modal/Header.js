import React from 'react'
import PropTypes from "prop-types"

const Header = ({ 
    btnExpand, 
    btnMinimize,  
    btnClose,
    onExpand, 
    onClose, 
    onMinimize,
    children,
    className
}) => {
   
    return (
        <div className={`modal-header ${className}`}>
            <span className="modal-title">{children}</span>
            {btnExpand ? <button className="modal-btn modal-expand" onClick={onExpand}>[<span className='space'> </span>]</button> : ''}
            {btnMinimize ? <button className="modal-btn modal-minimize" onClick={onMinimize}>_</button> : ''}
            {btnClose ? <button className="modal-btn modal-close" onClick={onClose}><span>x</span></button> : ''}
        </div>
    )
}

Header.defaultProps = {
    btnExpand: false,
    btnMinimize: false,
    btnClose: false,
    className: ''
}
  
Header.propTypes = {
    btnExpand: PropTypes.bool,
    btnMinimize: PropTypes.bool, 
    btnClose: PropTypes.bool,
    onClose: PropTypes.func, 
    onExpand: PropTypes.func,
    onMinimize: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node
}

export default Header