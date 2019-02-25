/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from "react"
import { Link } from "gatsby"
import { transitions } from "../utils/styles"
import { colors } from "../utils/presets"
 
// Import Futura PT typeface
import "../fonts/futurapt_book_macroman/stylesheet.css"
import "../fonts/futurapt_bookitalic_macroman/stylesheet.css"
import "../fonts/futurapt_demi_macroman/stylesheet.css"
import "../fonts/futurapt_demiitalic_macroman/stylesheet.css"

// import "./layout.css"

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
  constructor(props){
    super(props);
  }


  render() { 
    return (
      <div css={styles.container}>
        <header css={styles.header}>
          <Link css={this.props.index ? styles.linkActive : styles.linkNormal} to="/"><h1>Links.</h1></Link>
          <Link css={!this.props.index ? styles.linkActive : styles.linkNormal} to="/about"><h1>About.</h1></Link>
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
      <Layout index={this.props.index}>
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
    backgroundColor: colors.keguigong.dark,
  },
  header: {
    "@media screen and (max-width: 575px)": {
      position: `static`,
      width: `100%`,
      display: `flex`,
      flexDirection: `row`,
      justifyContent: `flex-start`,
      backgroundColor: colors.keguigong.dark,
      transition: transitions.default,
      color: colors.keguigong.white,
    },
    "@media screen and (min-width: 576px)": {
      position: `absolute`,
      top: `1rem`,
      left: `1rem`,
      color: colors.keguigong.white,
      zIndex: `1`,
    },
  },
  footer: {
    "&": {
      display: `flex`,
      flexDirection: `row`,
      width: `100%`,
      justifyContent: `flex-end`,
      padding: `1rem 1rem`,
      color: colors.keguigong.lightGray,
    },
    "@media screen and (max-width: 575px)": {
      margin: `0 auto`,
      width: `100%`,
      backgroundColor: colors.keguigong.dark,
    },
    "@media screen and (min-width: 576px)": {
      position: `absolute`,
      bottom: `0rem`,
      right: `0rem`,
      "fullscreenMode": {
        position: `absolute`,
        bottom: `0rem`,
        right: `0rem`,
      }
    },
  },
  link: {
    display: `inline-block`,
    margin: `0`,
    padding: `0`,
    textAlign: `center`,
    "h1": {
      margin: `0`,
      display: `inline-block`,
      padding: `0.85rem 0.85rem`,
      color: colors.keguigong.lightGray,
      transition: transitions.default,
    },
    ":hover, :checked": {
      "h1": {
        color: colors.keguigong.white,
      }
    },
  },
  linkActive: {
    display: `inline-block`,
    margin: `0`,
    padding: `0`,
    textAlign: `center`,
    "h1": {
      margin: `0`,
      display: `inline-block`,
      padding: `0.85rem 0.85rem`,
      color: colors.keguigong.white,
      transition: transitions.default,
    },
  },
  linkNormal: {
    display: `inline-block`,
    margin: `0`,
    padding: `0`,
    textAlign: `center`,
    "h1": {
      margin: `0`,
      display: `inline-block`,
      padding: `0.85rem 0.85rem`,
      color: colors.keguigong.lightGray,
      transition: transitions.default,
    },
    ":hover": {
      "h1": {
        color: colors.keguigong.white,
      }
    },
  },
  aSvgTag: {
    margin: `0`,
    padding: `0`,
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    margin: `0px 2px`,
    transition: transitions.default,
    color: colors.keguigong.lightWhite,
    "svg": {
      fill: colors.keguigong.lightWhite,
      height: `20px`,
      marginBottom: `0px`,
      marginLeft: `3px`,
      marginRight: `3px`,
      transition: transitions.default,
    },
    ":hover": {
      color: colors.keguigong.white,
      "svg": {
        fill: colors.keguigong.white,
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
      color: colors.keguigong.white,
      padding: `0.25rem 1rem`,
      "h1": {
        color: colors.keguigong.white
      },
      "h2": {
        color: colors.keguigong.LessWhite,
        lineHeight: `200%`
      }
    },
    "@media screen and (max-width: 575px)": {
      marginTop: `2rem`,
    },
    "@media screen and (max-width: 1199px) and (min-width: 576px)": {
      padding: `0.25rem 2rem`,
    },
    "@media screen and (min-width: 576px)": {
      marginTop: `6rem`
    },
  }
}
