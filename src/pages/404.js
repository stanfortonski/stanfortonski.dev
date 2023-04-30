import { Link } from 'gatsby';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Seo from '../components/Seo';
import { isBrowser } from '../helpers';
import Layout from '../layouts/MainLayout';

const NotFoundPage = () => {
    const [locale] = useState(isBrowser() ? window.localStorage.getItem('lang') ?? 'en' : false);

    return (
        <Layout locale={locale}>
            <Seo lang={locale} title="404.title" description="404.description" />
            <div className="container mx-auto">
                <div className="section text-center">
                    <h1 className="text-h1 mb-12">
                        <FormattedMessage id="404.title" />
                    </h1>
                    <p className="text-white mb-8">
                        <FormattedMessage id="404.description" />
                    </p>
                    <Link to={`/${locale}`} className="btn btn-shadows btn-primary">
                        <FormattedMessage id="404.button" />
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default NotFoundPage;
