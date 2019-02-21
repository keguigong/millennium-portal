import React from 'react'
import SEO from "../components/seo"
import Layout from "../components/layout"

class NotFound extends React.Component{
  render(){
    return(
      <Layout>
        <SEO title="404"/>
        <h1>Page not found.</h1>
      </Layout>
    );
  }
}

export default NotFound;