import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { TypeWriter } from '../../../core/components/TypeWriter';
import './styles.css';

export const Header = ({ siteTitle, animate }) => (
    <header className="header">
        <h1>
            <Link to="/">
                {animate ? (
                    <TypeWriter text={siteTitle} duration={120} delay={1100} cursor="_" />
                ) : (
                    siteTitle
                )}
            </Link>
        </h1>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
    animate: PropTypes.bool,
};

Header.defaultProps = {
    siteTitle: '',
    animate: true,
};