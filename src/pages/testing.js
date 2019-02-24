import React from 'react'
// import { Link } from "gatsby"
import SEO from "../components/seo"
import { LayoutNormal } from "../components/layout";
import Button from "../components/button"

export const linkStyles = {
    display: `block`,
    marginTop: `1rem`,
    width: `min-content`
}

class App extends React.Component {
    render() {
        return (
            <LayoutNormal>
                <SEO title="hello" />
                <h1>Page is under construction.</h1>
                <span>Preview the pages:</span><br /><br />
                <Button secondary to="/files">files</Button><br /><br />
                <Button secondary to="/blocks">blocks</Button><br /><br />
                <Button secondary to="/testing">testing</Button><br /><br />
                <Button secondary to="/404">404</Button><br /><br />
            </LayoutNormal>
        );
    }
}

export default App;