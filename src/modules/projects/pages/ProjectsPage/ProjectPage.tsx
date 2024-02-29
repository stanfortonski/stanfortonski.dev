import { graphql, useStaticQuery } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import { PageLayout } from '@/modules/core/components/PageLayout';
import { Seo } from '@/modules/core/components/Seo/Seo';
import { type AppContextType } from '@/modules/core/contexts/AppContext';

import { ProjectItem, ProjectItemProps } from '../../components/ProjectItem';

export const ProjectsPage = ({ locale }: AppContextType) => {
    const data = useStaticQuery(graphql`
        query {
            allGithubData {
                edges {
                    node {
                        data {
                            viewer {
                                bestRepositories {
                                    edges {
                                        node {
                                            id
                                            name
                                            descriptionHTML
                                            readme {
                                                text
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    let projects = data.allGithubData.edges[0].node.data.viewer.bestRepositories.edges;

    return (
        <PageLayout locale={locale}>
            <Seo locale={locale} title="projects.title" description="projects.description" />

            <div className="container-fluid text-center">
                <div className="section">
                    <h1 className="text-h1 text-center mb-5">
                        <FormattedMessage id="projects.title" />
                    </h1>
                    <h2 className="text-h2 text-center mb-8">
                        <FormattedMessage id="projects.subtitle" />
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 section">
                        {projects.map(({ node }: ProjectItemProps) => (
                            <ProjectItem node={node} key={node.id} />
                        ))}
                    </div>
                </div>
                <a
                    className="button button--chars-and-shadows button--secondary mb-10"
                    href="https://github.com/stanfortonski?tab=repositories"
                >
                    <FormattedMessage id="projects.button-rest-projects" />
                </a>
            </div>
        </PageLayout>
    );
};
