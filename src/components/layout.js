import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

// Import Futura PT typeface
import "../fonts/futurapt_book_macroman/stylesheet.css"
import "../fonts/futurapt_bookitalic_macroman/stylesheet.css"
import "../fonts/futurapt_demi_macroman/stylesheet.css"
import "../fonts/futurapt_demiitalic_macroman/stylesheet.css"

import Header from "./header"
// import "./layout.css"
import gatsbyLogo from "../images/gatsby.svg"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div style={{
        minHeight: `100vh`,
        display: `flex`,
        flexDirection: `column`,
        // alignItems: `stretch`
      }}>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <Header siteTitle="::before"/>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            width: `100%`,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            flexGrow: `1`,
          }}
        >
          <main style={{
            marginLeft: `0`
          }}>{children}</main>
        </div>
        <footer style={{
          margin: `0 auto`,
          maxWidth: 960,
          width: `100%`,
          padding: `1.0875rem 1.45rem`,
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `flex-start`
        }}>
          <span>© {new Date().getFullYear()}. Built with {` `}</span>
          <img style={{ margin: `0 4px`}} src={gatsbyLogo} height="24" alt="react"/>
          <a href="https://gatsbyjs.org">Gatsby.js.</a>
        </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
