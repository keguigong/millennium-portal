import React from 'react'
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout";

export const linkStyles = {
    display: `block`,
    marginTop: `1rem`
}

class App extends React.Component{
    render(){
        return(
            <Layout>
                <SEO title="hello"/>
                <h1>Page is under construction.</h1>
                <span>Preview the pages:</span>
                <Link style={linkStyles} to="files">files</Link>
                <Link style={linkStyles} to="blog">blogs</Link>
            </Layout>
        );
    }
}

export default App;