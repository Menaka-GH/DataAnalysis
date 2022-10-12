/*Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */
/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
*/
/* Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
  - Change the image styling to happen in CSS instead of in-line
  For practice, add a new class to the image in order to style it
*/
import React from "react"
import ReactDOM from "reactdom"
function Header(){
    return (
  
        <header>
        <nav className="nav">
            <img src="./react-logo.png" className="nav-logo"  />
           <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
           </ul>
            </nav>
        </header> 
        
    )
}
function Footer(){
    return (
        
        <footer>
        <small>Copyright 2022 MenakaHari development. All rights reserved.</small>    
        </footer> 
        
        
    )
}
function MainContent(){
    return(
        <div>
    <h1>Reasons I'm excited to learn React</h1>
        <ul>
            <li>cool language</li>
            <li>composable</li>
            <li>Easy to learn</li>
        </ul></div>
    )   
}
function Webpage(){
    return (
       <>
        <Header />        
        <MainContent />
        <Footer />
       </>
    )
}
ReactDOM.render(<Webpage />, document.getElementById("root"))