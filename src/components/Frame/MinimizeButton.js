import React from 'react'
import PropTypes from "prop-types"

const MinimizeButton = ({ onClick }) => (
    <button className="modal-btn btn-minimize" onClick={onClick}>_</button>
)

MinimizeButton.propTypes = {
    onClick: PropTypes.func
}

export default MinimizeButton