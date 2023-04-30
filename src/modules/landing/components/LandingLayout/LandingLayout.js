import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { graphql, useStaticQuery } from 'gatsby';
import messages from '../../../../lang/messages';
import { Footer } from '../../../core/components/Footer';
import { Nav } from '../../../core/components/Nav';
import { Header } from '../../../core/components/Header';
import { Cookies } from '../../../core/components/Cookies';
import { ProgressBar } from '../ProgressBar';
import { isBrowser } from '../../../core/utils/helpers';
import '../../../../styles/global.css';

const monitorBlurVariants = {
    initial: { filter: 'blur(0px)' },
    animate: {
        filter: 'blur(1px)',
        transition: { delay: 2 },
    },
};

const hideProgressVariants = {
    initial: { opacity: 1 },
    animate: {
        opacity: 0,
        transition: { duration: 0.25, delay: 1 },
    },
};

const showPageVariants = {
    initial: {
        opacity: 0,
        filter: 'blur(3px)',
    },
    animate: {
        opacity: 1,
        filter: 'none',
        transition: { duration: 0.45, delay: 0.9 },
    },
};

export const LandingLayout = ({ children, locale }) => {
    const [loaded, setLoaded] = useState(false);
    const [showLoadingScreen, setShowLoadingScreen] = useState(true);
    const data = useStaticQuery(graphql`
        query LandingLayoutQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    useEffect(() => {
        let delay = 2000;
        if (window.innerWidth < 750) delay = 0;

        setTimeout(() => {
            setLoaded(true);
            document.body.style.overflowY = 'hidden';

            setTimeout(() => {
                setShowLoadingScreen(false);
                document.body.style.overflowY = 'visible';
            }, 1000);
        }, delay);
    }, []);

    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <AnimatePresence>
                {showLoadingScreen && (
                    <div className="loading-screen">
                        <motion.div
                            className={`monitor ${loaded ? 'scale' : ''}`}
                            variants={monitorBlurVariants}
                            initial="initial"
                            animate="animate"
                        >
                            <div className="monitor-screen">
                                <motion.div
                                    className="progress-place"
                                    variants={hideProgressVariants}
                                >
                                    <ProgressBar label={<FormattedMessage id="layout.loading" />} />
                                </motion.div>

                                <div className="website">
                                    <Header
                                        siteTitle={
                                            data.site.siteMetadata?.title || `Stan Fortoński`
                                        }
                                        animate={false}
                                    />
                                    <Nav />
                                    <main className="layout-content">{children}</main>
                                    <Footer />
                                </div>
                            </div>
                            <div className="monitor-footer"></div>
                            <div className="monitor-holder"></div>
                            <div className="monitor-btn"></div>
                        </motion.div>
                        <div className="desk"></div>
                    </div>
                )}
            </AnimatePresence>

            {loaded && (
                <>
                    <motion.div
                        variants={showPageVariants}
                        initial="initial"
                        animate="animate"
                        className="body-sizing"
                    >
                        <Header
                            siteTitle={data.site.siteMetadata?.title || `Stan Fortoński`}
                            animate={true}
                        />
                        <Nav />
                        <main className="layout-content">{children}</main>
                        <Footer />

                        {isBrowser() && <Cookies />}
                    </motion.div>
                </>
            )}
        </IntlProvider>
    );
};

LandingLayout.defaultProps = {
    showHeader: false,
    locale: 'en',
};

LandingLayout.propTypes = {
    showHeader: PropTypes.bool,
    children: PropTypes.node.isRequired,
    locale: PropTypes.string.isRequired,
};
