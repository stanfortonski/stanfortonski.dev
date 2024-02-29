import { graphql, useStaticQuery } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import { Section } from '../Section';

export const AboutSection = () => {
    const data = useStaticQuery(graphql`
        query {
            allGithubData {
                edges {
                    node {
                        data {
                            viewer {
                                avatarUrl
                            }
                        }
                    }
                }
            }
        }
    `);

    const avatarUrl = data.allGithubData.edges[0].node.data.viewer.avatarUrl;

    return (
        <Section>
            <span className="sr-only">
                <FormattedMessage id="index.about.title" />
            </span>
            <div className="flex flex-col md:flex-row gap-10 items-center">
                <img
                    src={avatarUrl}
                    alt="Stanisław Fortoński"
                    className="box-shadow"
                    width={250}
                    height={250}
                />

                <div className="text-white text-left text-shadow">
                    <FormattedMessage id="index.about.content" />
                </div>
            </div>
        </Section>
    );
};
