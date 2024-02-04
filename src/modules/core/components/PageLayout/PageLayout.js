import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { Nav } from '../Nav';
import { Cookies } from '../Cookies';
import { isBrowser } from '../../utils/helpers';
import { App } from '../App';

export const PageLayout = ({ children, locale, showHeader }) => {
    useEffect(() => {
        return () => {
            document.body.style.overflowY = 'visible';
        };
    }, []);

    const data = useStaticQuery(graphql`
        query LayoutQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <App locale={locale}>
            {showHeader && <Header siteTitle={data.site.siteMetadata?.title || `Stan Fortoński`} />}
            <Nav />
            <main className="layout-content">{children}</main>
            <Footer />

            {isBrowser() && <Cookies />}
        </App>
    );
};

PageLayout.defaultProps = {
    showHeader: false,
    locale: 'en',
};

PageLayout.propTypes = {
    showHeader: PropTypes.bool,
    children: PropTypes.node.isRequired,
    locale: PropTypes.string.isRequired,
};
