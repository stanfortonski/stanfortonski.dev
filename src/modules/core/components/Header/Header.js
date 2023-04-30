import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { TypeWriter } from '../TypeWriter';

export const Header = ({ siteTitle, animate }) => (
    <header className="header">
        <h1>
            <Link to="/">
                {animate ? <TypeWriter text={siteTitle} duration={120} delay={1100} /> : siteTitle}
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
