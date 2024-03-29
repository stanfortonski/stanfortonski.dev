import { FormattedMessage } from 'react-intl';

import { useAppContext } from '@/modules/core/contexts/AppContext';
import { ButtonGatsbyLink } from '@/modules/ui/components/Button';

import { Section } from '../Section';

export const StartSection = () => {
    const { locale } = useAppContext();

    return (
        <Section>
            <h2 className="heading-1">Senior Frontend Developer</h2>
            <h3 className="heading-3">
                Fullstack Web Developer
                <span className="md:inline hidden"> | </span>
                <div className="md:hidden block"></div>
                <span className="heading-4">React Vue Laravel</span>
            </h3>

            <ButtonGatsbyLink
                to={`/${locale}/contact`}
                variant="chars-and-shadows"
                color="secondary"
                className="mt-12"
            >
                <FormattedMessage id="index.button-establish" />
            </ButtonGatsbyLink>
        </Section>
    );
};
