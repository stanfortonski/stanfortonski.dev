import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import messages from '../../../../lang/messages';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Nav } from '../Nav';
import { useStaticQuery, graphql } from 'gatsby';
import { IntlProvider } from 'react-intl';
import { Cookies } from '../Cookies';
import { isBrowser } from '../../utils/helpers';
import { ToastContainer } from 'react-toastify';
import '../../../../styles/global.css';

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
        <IntlProvider locale={locale} messages={messages[locale]}>
            {showHeader && <Header siteTitle={data.site.siteMetadata?.title || `Stan Fortoński`} />}
            <Nav />
            <main className="layout-content">{children}</main>
            <Footer />

            {isBrowser() && <Cookies />}
            <ToastContainer />
        </IntlProvider>
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
