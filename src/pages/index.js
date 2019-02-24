import React from 'react'
import SEO from "../components/seo"
import Blocks  from "../pages/blocks"
import LoadingPage from "../components/loadingpage"

class App extends React.Component {
    render() { 
        return (
            <LoadingPage>
                <SEO/>
                <Blocks/>
            </LoadingPage>
        );
    }
}
 
export default App;