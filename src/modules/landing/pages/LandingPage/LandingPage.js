import { Link } from 'gatsby';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { LandingLayout } from '../../components/LandingLayout';
import { Section } from '../../components/Section';
import { Seo } from '../../../core/components/Seo/Seo';
import { Projects } from '../../components/Projects';
import { Skills } from '../../components/Skills';
import { Frame } from '../../../core/components/Frame/Frame';
import { ContactForm } from '../../../core/components/ContactForm/ContactForm';
import { About } from '../../components/About';

export const LandingPage = ({ locale }) => {
    return (
        <LandingLayout locale={locale}>
            <Seo lang={locale} title="index.title" />

            <div className="container-fluid text-center">
                <Section>
                    <h2 className="text-h1">Full Stack Developer</h2>
                    <h3 className="text-h2">Web developer | Game developer</h3>

                    <Link
                        className="btn btn-chars btn-shadows btn-primary mt-12"
                        to={`/${locale}/contact`}
                    >
                        <FormattedMessage id="index.button-establish" />
                    </Link>
                </Section>

                <Section>
                    <Projects locale={locale} />
                </Section>

                <Section>
                    <Skills locale={locale} />
                </Section>

                <Section>
                    <h2 className="text-h1">
                        <FormattedMessage id="contact.me" />
                    </h2>

                    <div className="px-5 mt-14">
                        <Frame title={<FormattedMessage id="contact.form" />}>
                            <div className="px-24 py-10">
                                <ContactForm />
                            </div>
                        </Frame>
                    </div>
                </Section>

                <Section>
                    <About locale={locale} />
                </Section>
            </div>
        </LandingLayout>
    );
};
