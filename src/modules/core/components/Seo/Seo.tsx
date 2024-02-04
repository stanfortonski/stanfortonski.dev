import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useIntl } from 'react-intl';

import { isBrowser } from '../../utils/helpers';
import { AppContextType } from '../../contexts/AppContext';

export type SEOProps = {
    title: string;
    locale: AppContextType['locale'];
    description?: string;
    meta?: any[];
    keywords?: string;
};

export function Seo({ description, locale, meta, title, keywords }: SEOProps) {
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
        if (isBrowser()) window.localStorage.setItem('locale', locale);
    }, [locale]);

    const metaDescription = intl.formatMessage({
        id: description ?? site.siteMetadata.description,
    });
    const defaultTitle: unknown = site.siteMetadata?.title;

    return (
        <Helmet
            htmlAttributes={{
                locale,
            }}
            title={intl.formatMessage({ id: title })}
            titleTemplate={typeof defaultTitle === 'string' ? `%s | ${defaultTitle}` : '%s'}
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
                    content:
                        keywords ??
                        'Programowanie, oprogramowanie, webmaster, web desing, projektowanie stron www, usługi programistyczne, informatyka, strony WWW, strony internetowe, aplikacje desktopowe, aplikacje mobilne, Windows, Android, iOS, Linux, PHP, JS, Javascript, MySQL, MariaDB, SQL, SQL lite, C++, Cpp, Canvas, directX, OpenGL, Vulcan, aplikacje okienkowe, pasja, websocket, wxWidgets, Java, Java Swing, Programming, software, webmaster, web desing, projecting webpage, IT, websites, desktop apps, mobile apps, Linux, passion, websocket, wxWidgets, android, android studio, android sdk',
                },
            ].concat(meta ?? [])}
        ></Helmet>
    );
}
