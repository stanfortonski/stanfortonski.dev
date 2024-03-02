import { FormattedMessage } from 'react-intl';

import { Frame } from '@/modules/ui/components/Frame';
import { ContactForm } from '@/modules/contact/components/ContactForm';

import { Section } from '../Section';

export const ContactSection = () => {
    return (
        <Section>
            <h2 className="heading-1">
                <FormattedMessage id="contact.heading" />
            </h2>

            <h3 className="heading-4">
                <FormattedMessage id="contact.quick-subtitle" />
            </h3>

            <div className="px-5 mt-14">
                <Frame title={<FormattedMessage id="contact.form" />}>
                    <div className="md:px-24 md:py-10">
                        <ContactForm />
                    </div>
                </Frame>
            </div>
        </Section>
    );
};
