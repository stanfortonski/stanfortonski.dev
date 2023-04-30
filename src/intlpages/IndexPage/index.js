import { Link } from 'gatsby';
import React from 'react';
import Seo from '../../components/Seo';
import Layout from '../../layouts/LandingLayout';
import ContactForm from '../../components/ContactForm';
import Frame from '../../components/Frame';
import { FormattedMessage } from 'react-intl';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import Section from './Section';

const IndexPage = ({ locale }) => {
    return (
        <Layout locale={locale}>
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
        </Layout>
    );
};

export default IndexPage;
