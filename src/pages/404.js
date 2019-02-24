import React from 'react'
import SEO from "../components/seo"
import { LayoutNormal } from "../components/layout"
import LoadingPage from "../components/loadingpage"

class NotFound extends React.Component {
  render() { 
    return (
      <LoadingPage>
        <LayoutNormal>
          <SEO title="404" />
          <h1>Page not found.</h1>
        </LayoutNormal>
      </LoadingPage>
    );
  }
}
 
export default NotFound;