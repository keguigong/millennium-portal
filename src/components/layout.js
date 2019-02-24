/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from "react"
import { Link } from "gatsby"
import { Col } from "antd"

// Import Futura PT typeface
import "../fonts/futurapt_book_macroman/stylesheet.css"
import "../fonts/futurapt_bookitalic_macroman/stylesheet.css"
import "../fonts/futurapt_demi_macroman/stylesheet.css"
import "../fonts/futurapt_demiitalic_macroman/stylesheet.css"

import "./layout.css"

export class FuturaWrapper extends React.Component{
  render(){
    return(
      <div style={this.props.style}>
        {this.props.children}
      </div>
    )
  }
}

class Layout extends React.Component {
  render() { 
    return (
      <div css={styles.container}>
        <header css={styles.header}>
          <Link css={styles.aTag} to="/"><h1>Links.</h1></Link>
          <Link css={styles.aTag} to="/about"><h1>About.</h1></Link>
        </header>
        <div css={styles.layoutContent}>
          {this.props.children}
        </div>
        <footer css={styles.footer}>
          <span>© {new Date().getFullYear()}. Built by</span>
          <a css={styles.aSvgTag}>@keguigong</a>
          <span>with</span>
          <a css={styles.aSvgTag} href="http://gatsbyjs.org">
            <svg viewBox="0 0 1200 1200">
              <path d="M600 0C268.6 0 0 268.6 0 600s268.6 600 600 600 600-268.6 600-600S931.4 0 600 0zM266.6 933.3C176.1 842.8 131 724.6 129.6 606L594 1070.4c-118.6-1.4-236.8-46.5-327.4-137.1zm437.7 126.1L140.6 495.7c47.5-210.1 235-367.1 459.4-367.1 156.9 0 295.5 77 381.2 194.9L915.6 379C845.8 279.5 730.5 214.3 600 214.3c-167.7 0-310.3 107.7-363.3 257.5l491.6 491.6c123.4-43.7 218-148.2 247.6-277.6H771.4V600h300c0 224.5-157 411.9-367.1 459.4z" />
            </svg>
            <span>Gatsby.js</span>
          </a>
          <span>.</span>
        </footer>
      </div>
    );
  }
}

export class LayoutNormal extends React.Component {
  render() { 
    return ( 
      <Layout>
        <div css={styles.LayoutNormalContent}>
          {this.props.children}
        </div>
      </Layout>
    );
  }
}
 
export default Layout;
// module.exports = {LayoutNormal};

export const styles = {
  container: {
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    width: `100vw`,
    minHeight: `100vh`,
    backgroundColor: `#2b2b2b`,
  },
  header: {
    "@media screen and (max-width: 575px)": {
      position: `static`,
      width: `100%`,
      display: `flex`,
      flexDirection: `row`,
      justifyContent: `flex-start`,
      backgroundColor: `#2b2b2b`,
      transition: `all ease-in-out .4s`,
      color: `#f8f8f8`,
    },
    "@media screen and (min-width: 576px)": {
      position: `absolute`,
      top: `1rem`,
      left: `1rem`,
      color: `#f8f8f8`,
      zIndex: `99`,
    },
    "h1": {
      margin: `0`,
      display: `inline-block`,
      padding: `0.85rem 0.85rem`,
      color: `#f8f8f8`,
      ":hover": {
        color: `#7f7f7f`,
      },
    }
  },
  footer: {
    "&": {
      display: `flex`,
      flexDirection: `row`,
      justifyContent: `flex-end`,
      color: `#5f5f5f`,
    },
    "@media screen and (max-width: 575px)": {
      margin: `0 auto`,
      width: `100%`,
      padding: `1.0875rem 1.45rem`,
      backgroundColor: `#2b2b2b`,
    },
    "@media screen and (min-width: 576px)": {
      position: `absolute`,
      bottom: `20px`,
      right: `30px`,
    },
  },
  aTag: {
    margin: `0`,
    padding: `0`,
    textAlign: `center`,
  },
  aSvgTag: {
    margin: `0`,
    padding: `0`,
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    margin: `0px 2px`,
    color: `#5f5f5f`,
    transition: `all ease-in-out .4s`,
    color: `#a1a1a1`,
    "svg": {
      fill: `#5f5f5f`,
      height: `20px`,
      marginBottom: `0px`,
      marginLeft: `3px`,
      marginRight: `3px`,
      transition: `all ease-in-out .4s`,
    },
    ":hover": {
      color: `#f8f8f8`,
      "svg": {
        fill: `#f8f8f8`,
      },
    },
  },
  layoutContent: {
    width: `100%`,
    flexGrow: `1`,
  },
  LayoutNormalContent: {
    "&": {
      maxWidth: `960px`,
      margin: `0 auto`,
      color: `#f8f8f8`,
      padding: `0.25rem 1rem`,
      "h1": {
        color: `#f8f8f8`
      }
    },
    "@media screen and (max-width: 575px)": {
      marginTop: `2rem`,
    },
    "@media screen and (min-width: 576px)": {
      marginTop: `6rem`
    },
  }
}
