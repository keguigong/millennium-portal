import React from 'react'
import SEO from "../components/seo"
import { LayoutNormal } from "../components/layout"
import LoadingPage from "../components/loadingpage"

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <LoadingPage>
                <SEO title="about"/>
                <LayoutNormal>
                    <h1>Hello,</h1>
                    <h2>I'm keguigong, "可圭共" in Chinese, </h2>
                    <h2>do some UI/UE works in my spare time, and U can check some of them from the links listed in the links page.</h2>
                    <h1>Also,</h1>
                    <h2>beginner of React, on the way learning it.</h2>
                </LayoutNormal>
            </LoadingPage>
         );
    }
}
 
export default About;