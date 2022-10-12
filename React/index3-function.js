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
import React from "react"
import ReactDOM from "reactdom"

function Customfunction(){
    return (
       <div>
        <header>
        <nav>
            <img src="./react-logo.png" width="50px" />
           
            </nav>
        </header> 
        <h1>Reasons I'm excited to learn React</h1>
        <ul>
            <li>cool language</li>
            <li>composable</li>
            <li>Easy to learn</li>
        </ul>
        <footer>
            <small>© 2022 MenakaHari development. All rights reserved.</small>
        </footer>
       </div>
    )
}
ReactDOM.render(<Customfunction />, document.getElementById("root"))