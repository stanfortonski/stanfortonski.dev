import React from 'react'
import Seo from "../components/Seo"
import Layout from "../layouts/MainLayout"

const ContactPage = ({ locale }) => {
  return (
    <Layout locale={locale}>
        <Seo title="contact.title" />
        <h1>Contact</h1>
    </Layout>
  )
}

export default ContactPage