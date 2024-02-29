import { FormattedMessage } from 'react-intl';

import { Frame } from '@/modules/ui/components/Frame';
import { ContactForm } from '@/modules/contact/components/ContactForm';

import { Section } from '../Section';

export const ContactSection = () => {
    return (
        <Section>
            <h2 className="text-h1">
                <FormattedMessage id="contact.me" />
            </h2>

            <div className="px-5 mt-14">
                <Frame title={<FormattedMessage id="contact.form" />} showMinimize={false}>
                    <div className="md:px-24 md:py-10">
                        <ContactForm />
                    </div>
                </Frame>
            </div>
        </Section>
    );
};
