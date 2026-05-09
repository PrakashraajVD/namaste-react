/**
 * <div id="parent">
 *      <div id="child1">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *      </div>
 * </div>
 * 
 * 
 * 
 * 
 * 
 * 
 */
import React from "react";
import ReactDOM from "react-dom/client";

const h1 = React.createElement("h1", { id: "heading" }, "Namaste React")

// React Element
const jsxHeading = (
    <h1 id="heading">Namaste React using JSX</h1>)

const elem = <h1>Element</h1>;

// React Functional Component
const Title = () => {
    return (
        <div>
            <h1>Title Component</h1>
            {elem}
        </div>
    )
}

const number = 10000;
// this is similar to the Title
// Component Composition
const HeadingComponent = () => (
    <div>
        <Title></Title> 
        <Title />
        {Title()}
        {/* the above three way of compositing an element works same */}
        <FunctionComponent />
        {jsxHeading}
        <h1>Namaste React Functional Component</h1>
        <h2>{number}</h2>
    </div>
)

const FunctionComponent = function () {
    return (
        <h1>Hello from function</h1>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(h1);
console.log(jsxHeading);

// Rendering an element
root.render(h1);
root.render(jsxHeading);


// Rendering an functional component
root.render(<HeadingComponent />)