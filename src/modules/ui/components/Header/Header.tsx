import { Link } from 'gatsby';

import { TypeWriter } from '@/modules/core/components/TypeWriter';

import './styles.css';

export type HeaderType = { siteTitle: string; isAnimate: boolean };

export const Header = ({ siteTitle, isAnimate }: HeaderType) => (
    <header className="header">
        <h1>
            <Link to="/">
                {isAnimate ? (
                    <TypeWriter text={siteTitle} duration={120} delay={1100} cursor="_" />
                ) : (
                    siteTitle
                )}
            </Link>
        </h1>
    </header>
);
