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
                <table style={{maxWidth: "100%"}}>
                    <thead>
                        <tr>
                            <th>relativePath</th>
                            <th>extension</th>
                            <th>prettySize</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.allFile.edges.map(({ node }, index) => (
                            <tr key={index}>
                                <td>{node.name}</td>
                                <td>{node.extension}</td>
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