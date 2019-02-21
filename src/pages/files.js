import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

export default ({ data }) => {
    console.log(data)
    return (
        <Layout>
          <SEO title="files"/>
            <div>
                <h1>My Site's Files</h1>
                <table>
                    <thead>
                        <tr>
                            <th>relativePath</th>
                            <th>prettySize</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.allFile.edges.map(({ node }, index) => (
                            <tr key={index}>
                                <td>{node.relativePath}</td>
                                <td>{node.prettySize}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          extension
          prettySize
          relativePath
          birthTime(fromNow: true)
        }
      }
    }
  }
`