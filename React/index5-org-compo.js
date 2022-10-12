
import React from "react"
import ReactDOM from "reactdom"
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"


function App(){
    return (
       <>
        <Header />        
        <MainContent />
        <Footer />
       </>
    )
}
ReactDOM.render(<App />, document.getElementById("root"))