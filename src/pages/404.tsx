import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { isBrowser } from '@/modules/core/utils/helpers';
import { PageLayout } from '@/modules/core/components/PageLayout';
import { Seo } from '@/modules/core/components/Seo/Seo';
import { type AppContextType } from '@/modules/core/contexts/AppContext';
import { ButtonGatsbyLink } from '@/modules/ui/components/Button';

const NotFoundPage = () => {
    const [locale] = useState<AppContextType['locale']>(() =>
        isBrowser() ? (window.localStorage.getItem('locale') as any) ?? 'en' : 'en',
    );

    return (
        <PageLayout locale={locale}>
            <Seo locale={locale} title="404.title" description="404.description" />
            <div className="container mx-auto">
                <div className="section text-center">
                    <h1 className="heading-1 mb-12">
                        <FormattedMessage id="global.404.title" />
                    </h1>
                    <p className="text-white mb-8 text-3xl">
                        <FormattedMessage id="global.404.description" />
                    </p>
                    <ButtonGatsbyLink to={`/${locale}`} variant="shadows" color="secondary">
                        <FormattedMessage id="global.404.button" />
                    </ButtonGatsbyLink>
                </div>
            </div>
        </PageLayout>
    );
};

export default NotFoundPage;
