import { Link } from 'gatsby';

import { useLocation } from '@/modules/core/useLocation';

import './styles.css';

export const Footer = () => {
    const { pathname } = useLocation();

    return (
        <footer className="footer">
            <div className="footer__side footer__side--left">
                <div className="footer__side-before"></div>
                <div className="py-2 text-4xl" style={{ visibility: 'hidden' }}>
                    <span className="mx-2">EN</span>
                    <span className="mx-2">PL</span>
                </div>
                <div className="footer__side-after"></div>
            </div>

            <div className="footer__center">
                SF Stanisław Fortoński &copy; 2019 - {new Date().getFullYear()}
            </div>

            <div className="footer__side footer__side--right">
                <div className="footer__side-before"></div>
                <div className="py-2 text-4xl text-right">
                    <Link to={`/en/${pathname}`} className="hover:text-primary-proper mx-2">
                        EN
                    </Link>
                    <Link to={`/pl/${pathname}`} className="hover:text-primary-proper mx-2">
                        PL
                    </Link>
                </div>
                <div className="footer__side-after"></div>
            </div>
        </footer>
    );
};
