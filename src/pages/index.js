/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import SEO from "../components/seo"
import Blocks  from "../pages/blocks"
import { GooSpinner } from "react-spinners-kit"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        }
    }

    componentDidMount = () => {
        setInterval(() => {
            this.setState({
                isLoaded: true
            })
        }, 20)
    }

    render() { 
        if (this.state.isLoaded) {
            return (
                <div>
                    <SEO title="links" />
                    <Blocks />
                </div>
            );
        }
        else {
            return (
                <div css={styles.loading}>
                    <SEO title="loading" />
                    <GooSpinner
                        size={40}
                        color="#2b2b2b"
                    // loading={true}
                    />
                    <h4>Loading...</h4>
                </div>
            );
        }
    }
}
 
export default App;

const styles = {
    loading: {
        display: `flex`,
        flexDirection: `column`,
        width: `100vw`,
        minHeight: `100vh`,
        alignItems: `center`,
        justifyContent: `center`,
        backgroundColor: `#f8f8f8`
    }
}