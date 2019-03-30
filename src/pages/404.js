import React from 'react'
import SEO from "../components/seo"
import { LayoutB } from "../components/layout"
import Button from "../components/button"

class NotFound extends React.Component {
  render() {
    return (
      <LayoutB>
        <SEO title="404" />
        <h1>404</h1>
        <h4>Page not found.</h4>
        <Button redBtn to="/">Back to home</Button>
      </LayoutB>
    );
  }
}

export default NotFound;