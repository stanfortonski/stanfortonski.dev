import React from 'react'
import Seo from "../components/Seo"
import Layout from "../layouts/MainLayout"

const AboutPage = ({ locale }) => {
  return (
    <Layout locale={locale}>
        <Seo title="about.title" />
        <h1>About</h1>
    </Layout>
  )
}

export default AboutPage