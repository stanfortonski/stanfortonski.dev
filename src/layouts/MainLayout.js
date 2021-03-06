import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import { useStaticQuery, graphql } from "gatsby"
import { IntlProvider } from 'react-intl'
import messages from '../lang/messages'
import Cookies from "../components/Cookies"
import { isBrowser } from "../helpers"
import "../styles/global.css"
import { ToastContainer } from "react-toastify"

const MainLayout = ({ children, locale, showHeader }) => {
  useEffect(() => {
    return () => {
      document.body.style.overflowY = 'visible';
    }
  }, []);
  
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title      
        }
      }
    }
  `);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {showHeader && <Header siteTitle={data.site.siteMetadata?.title || `Stan Fortoński`} />}
      <Nav />
      <main className="layout-content">
        {children}
      </main>
      <Footer />

      {isBrowser() && <Cookies />}
      <ToastContainer />
    </IntlProvider>
  )
}

MainLayout.defaultProps = {
  showHeader: false,
  locale: 'en',
}

MainLayout.propTypes = {
  showHeader: PropTypes.bool,
  children: PropTypes.node.isRequired,
  locale: PropTypes.string.isRequired
}

export default MainLayout
