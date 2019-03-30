/** @jsx jsx */
import { jsx } from '@emotion/core'

import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { LayoutB } from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <LayoutB>
      <SEO title="files" />
      <h1>My Site's Files</h1>
      <div css={styles.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th>relativePath</th>
              <th>extension</th>
              <th>prettySize</th>
              <th>birthTime </th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.extension}</td>
                <td>{node.prettySize}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </LayoutB>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          name
          extension
          prettySize
          relativePath
          birthTime(fromNow: true)
        }
      }
    }
  }
`

const styles = {
  tableWrapper: {
    overflowX: `auto`
  },
  table: {
    td: {
      whiteSpace: `nowrap`,
      wordBreak: `keep-all`
    }
  }
}