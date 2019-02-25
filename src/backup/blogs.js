import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { LayoutNormal} from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <LayoutNormal>
      <SEO title="blogs"/>
      <div>
        <h1>Blogs</h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>
              {node.frontmatter.title}{" "}
              <span style={{color: "#cfcfcf"}}>{node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </LayoutNormal>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`