import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="before"></div>
        <div className="after"></div>
      </div>

      <div className="footer-middle">
        SF Stanisław Fortoński &copy; 2019 - {new Date().getFullYear()}
      </div>

      <div className="footer-right">
        <div className="before"></div>
        <div className="after"></div>
      </div>
    </footer>
  )
}

export default Footer