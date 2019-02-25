import React from 'react'
import LinksPage  from "./links"
import LoadingPage from "../components/loadingpage"

class App extends React.Component {
    render() { 
        return (
            <LoadingPage>
                <LinksPage/>
            </LoadingPage>
        );
    }
}
 
export default App;