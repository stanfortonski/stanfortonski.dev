import React from 'react'
import Seo from "../components/Seo"
import Layout from "../layouts/MainLayout"

const ProjectsPage = ({ locale }) => {
  return (
    <Layout locale={locale}>
        <Seo title="projects.title" />
        <h1>Projects</h1>
    </Layout>
  )
}

export default ProjectsPage