import * as React from "react"
import Seo from "../components/Seo"
import Layout from "../layouts/MainLayout"

const NotFoundPage = () => (
  <Layout locale="en">
    <Seo title="Not found" />
    <h1>404: Not Found</h1>
  </Layout>
)

export default NotFoundPage
