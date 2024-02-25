import { FormattedMessage } from 'react-intl';

import { useAppContext } from '@/modules/core/contexts/AppContext';
import { ButtonGatsbyLink } from '@/modules/ui/components/Button';

import { Section } from '../Section';

export const StartSection = () => {
    const { locale } = useAppContext();

    return (
        <Section>
            <h2 className="text-h1">Full Stack Developer</h2>
            <h3 className="text-h2">
                Frontend Web Developer |{' '}
                <span className="text-h4 md:text-h3">React Vue Laravel</span>
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
