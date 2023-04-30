import { Link } from 'gatsby';
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-aside footer-left">
                <div className="before"></div>
                <div className="py-2 text-4xl" style={{ visibility: 'hidden' }}>
                    <span className="mx-2">EN</span>
                    <span className="mx-2">PL</span>
                </div>
                <div className="after"></div>
            </div>

            <div className="footer-middle">
                SF Stanisław Fortoński &copy; 2019 - {new Date().getFullYear()}
            </div>

            <div className="footer-aside footer-right">
                <div className="before"></div>
                <div className="py-2 text-4xl">
                    <Link to="/" className="hover:text-primary-proper mx-2">
                        EN
                    </Link>
                    <Link to="/pl" className="hover:text-primary-proper mx-2">
                        PL
                    </Link>
                </div>
                <div className="after"></div>
            </div>
        </footer>
    );
};

export default Footer;
