import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useIntl } from 'react-intl';
import { isBrowser } from '../../utils/helpers';

export function Seo({ description, lang, meta, title, keywords }) {
    const intl = useIntl();

    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `,
    );

    useEffect(() => {
        if (isBrowser()) window.localStorage.setItem('lang', lang);
    }, [lang]);

    const metaDescription = intl.formatMessage({
        id: description || site.siteMetadata.description,
    });
    const defaultTitle = site.siteMetadata?.title;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={intl.formatMessage({ id: title })}
            titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata?.author || ``,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    name: 'keywords',
                    content: keywords,
                },
            ].concat(meta)}
        ></Helmet>
    );
}

Seo.defaultProps = {
    lang: 'en',
    meta: [],
    description: '',
    keywords:
        'Programowanie, oprogramowanie, webmaster, web desing, projektowanie stron www, usługi programistyczne, informatyka, strony WWW, strony internetowe, aplikacje desktopowe, aplikacje mobilne, Windows, Android, iOS, Linux, PHP, JS, Javascript, MySQL, MariaDB, SQL, SQL lite, C++, Cpp, Canvas, directX, OpenGL, Vulcan, aplikacje okienkowe, pasja, websocket, wxWidgets, Java, Java Swing, Programming, software, webmaster, web desing, projecting webpage, IT, websites, desktop apps, mobile apps, Linux, passion, websocket, wxWidgets, android, android studio, android sdk',
};

Seo.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
    keywords: PropTypes.string,
};
