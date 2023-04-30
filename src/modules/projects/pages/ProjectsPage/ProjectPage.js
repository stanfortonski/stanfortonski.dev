import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { PageLayout } from '../../../core/components/PageLayout';
import { ProjectItem } from '../../components/ProjectItem';
import { Seo } from '../../../core/components/Seo/Seo';

export const ProjectsPage = ({ locale }) => {
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
            <Seo lang={locale} title="projects.title" description="projects.description" />

            <div className="container-fluid text-center">
                <div className="section">
                    <h1 className="text-h1 text-center mb-5">Projects</h1>
                    <h2 className="text-h2 text-center mb-8">My GitHub projects</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 section">
                        {projects.map(({ node }) => (
                            <ProjectItem locale={locale} node={node} key={node.id} />
                        ))}
                    </div>
                </div>

                <a
                    className="btn btn-chars btn-shadows btn-primary my-10"
                    href="https://github.com/stanfortonski?tab=repositories"
                >
                    All My GitHub Projects
                </a>
            </div>
        </PageLayout>
    );
};
