1. Why do we need to `import React from "react"` in our files?
JSX syntax is defined in React.

2. If I were to console.log(page) in index.js, what would show up?
A JavaScript object. React elements that describe what React should eventually add to the real DOM for us.
3. What's wrong with this code:
```
const page = (
    <>
    <h1>Hello</h1>
    <p>This is my website!</p>
</>
)
```
we need our JSX to be nested under a single parent element like <div> or fragment <>


4. What does it mean for something to be "declarative" instead of "imperative"?

declarative means what to do.
imperative means what to do and how to do.
5. What does it mean for something to be "composable"?
we have small piesce that we can put together to make something larger/greater than the individual pieces.
6.1. What is a React component?
A function that returns React elements. (UI)
