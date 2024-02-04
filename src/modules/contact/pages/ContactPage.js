import { FormattedMessage } from 'react-intl';

import { PageLayout } from '@/modules/core/components/PageLayout';
import { Seo } from '@/modules/core/components/Seo/Seo';
import { Frame } from '@/modules/ui/components/Frame';

import { ContactForm } from '../components/ContactForm';

export const ContactPage = ({ locale }) => {
    return (
        <PageLayout locale={locale}>
            <Seo locale={locale} title="contact.title" description="contact.description" />

            <div className="container mx-auto">
                <div className="section">
                    <h1 className="text-h1 text-center mb-12">
                        <FormattedMessage id="contact.title" />
                    </h1>

                    <div className="grid gap-8 grid-cols-1">
                        <Frame title={<FormattedMessage id="contact.form" />}>
                            <div className="md:px-24 md:py-10">
                                <ContactForm />
                            </div>
                        </Frame>

                        <Frame title={<FormattedMessage id="contact.email" />}>
                            <div className="text-center">
                                <FormattedMessage id="contact.email" />:
                                <a href="mailto:contact@stanfortonski.dev" className="anr">
                                    contact@stanfortonski.dev
                                </a>
                            </div>
                        </Frame>

                        <Frame title={<FormattedMessage id="contact.media" />}>
                            <ul className="text-center">
                                <li className="pb-2 text-h6">
                                    <FormattedMessage id="contact.visit" />
                                </li>
                                <li>
                                    <a
                                        href="https://youtube.com/c/StanFortonskiDeveloper"
                                        className="anr"
                                    >
                                        Youtube
                                    </a>
                                    <a
                                        href="https://facebook.com/Stan-Fortoński-Developer-112846750060899"
                                        className="anr"
                                    >
                                        Facebook
                                    </a>
                                    <a href="https://twitter.com/fortonski" className="anr">
                                        Twitter
                                    </a>
                                    <a href="https://instagram.com/stan.fortonski" className="anr">
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/stan-fortonski"
                                        className="anr"
                                    >
                                        LinkedIn
                                    </a>
                                    <a href="https://github.com/stanfortonski" className="anr">
                                        GitHub
                                    </a>
                                    <a
                                        href="https://stackoverflow.com/story/stan.fortonski"
                                        className="anr"
                                    >
                                        Stack Overflow
                                    </a>
                                </li>
                            </ul>
                        </Frame>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};
