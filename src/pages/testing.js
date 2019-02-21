import React from 'react'
import SEO from "../components/seo"
import Layout from "../components/layout"
import Button from "../components/button"

class Testing extends React.Component {
    render() {
        return (
            <Layout>
                <SEO title="Testing" />
                <Button
                    to="/404/"
                    small="true"
                    secondary="true"
                >
                    button
                </Button>
            </Layout>
        );
    }
}

export default Testing;