import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import { Seo } from '@/modules/core/components/Seo';
import { Frame } from '@/modules/ui/components/Frame';
import { ContactForm } from '@/modules/contact/components/ContactForm';

import { LandingLayout } from '../../components/LandingLayout';
import { Section } from '../../components/Section';
import { ProjectsSection } from '../../components/ProjectsSection';
import { SkillsSection } from '../../components/SkillsSection';
import { AboutSection } from '../../components/AboutSection';

export const LandingPage = ({ locale }) => {
    return (
        <LandingLayout locale={locale}>
            <Seo locale={locale} title="index.title" />

            <div className="container-fluid text-center">
                <Section>
                    <h2 className="text-h1">Full Stack Developer</h2>
                    <h3 className="text-h2">
                        Frontend Web Developer |{' '}
                        <span className="text-h4 md:text-h3">React Vue Laravel</span>
                    </h3>

                    <Link
                        className="btn btn-chars btn-shadows btn-primary mt-12"
                        to={`/${locale}/contact`}
                    >
                        <FormattedMessage id="index.button-establish" />
                    </Link>
                </Section>

                <Section className="px-0">
                    <ProjectsSection />
                </Section>

                <Section>
                    <SkillsSection />
                </Section>

                <Section>
                    <h2 className="text-h1">
                        <FormattedMessage id="contact.me" />
                    </h2>

                    <div className="px-5 mt-14">
                        <Frame title={<FormattedMessage id="contact.form" />}>
                            <div className="md:px-24 md:py-10">
                                <ContactForm />
                            </div>
                        </Frame>
                    </div>
                </Section>

                <Section>
                    <AboutSection />
                </Section>
            </div>
        </LandingLayout>
    );
};
