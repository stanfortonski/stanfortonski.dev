import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FormattedMessage } from 'react-intl';

const About = () => {
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
        <div className="grid xl:px-48 lg:px-24 px-12">
            <div className="text-white text-left text-shadow">
                <img
                    src={avatarUrl}
                    alt="Stanisław Fortoński"
                    className="box-shadow float-left mx-8"
                    width={250}
                    height={250}
                />
                <p>
                    <FormattedMessage id="index.about.content" />
                </p>
                <div className="clear-both"></div>
            </div>
        </div>
    );
};

export default About;
