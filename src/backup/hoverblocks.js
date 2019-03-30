/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import SEO from "../components/seo"

function HHH() {
    return (
        <div css={styles.innerContainer}>
            <div css={styles.floatBlock}></div>
        </div>
    )
}

class BLOCK extends React.Component {
    render () {
        return (
            <div css={styles.container}>
                <HHH /><HHH /><HHH /><HHH /><HHH /><HHH />
            </div>
        )
    }
}

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <SEO title="demo" />
                <BLOCK/>
            </div>
        );
    }
}

export default About;


const styles = {
    "container": {
        display:   `flex`,
        minHeight: `100vh`,
        alignItems: `center`,
        justifyContent: `center`,
        backgroundColor: `#f8f8f8`,
        flexWrap: `wrap`
    },
    "innerContainer": {
        height: `200%`,
        width: `25%`,
        border: `0.5px solid #cccccc`
    },
    "floatBlock": {
        position: `relative`,
        cursor: `pointer`,
        height: `240px`,
        backgroundColor: `#fff`,
        width: `90%`,
        transition: `all .2s ease-out`,
        boxShadow: `0 2px 2px 0 rgba(0,0,0,.05)`,
        borderRadius: `4px`,
        ":hover": {
            transform: `translateY(-5px)`,
            boxShadow: `0 8px 8px 0 rgba(0,0,0,.1)`
        }
    },
    
}