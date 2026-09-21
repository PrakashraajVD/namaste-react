import React from "react";
import ReactDOM from "react-dom/client";

// Creating React Element using core react

// React Element => Object => HTMLElement (render)
// const heading = React.createElement("h1", {id: "heading"}, "Namaste React");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);   

// Creating React Element using JSX

// JSX - HTML - like or XML-like Syntax 
// (transpiled before it reaches the JS Engine) - PARCEL - Babel
// JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement (render)   
// const jsxHeading = (
//     <h1 className="heading">
//         Namaste React using JSX
//     </h1>
// );
// console.log(jsxHeading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

// React Components
// Class Based Components - OLD 
// Functional Components - NEW

// React Functional Component

const fn = () => true;

const fn2 = () => {return true;};

// Both the above functions are valid

const element = (
    <span>React Element</span>
);

const Title = () => (
    <h1 className="head">
        {element} Namaste React Using JSX
    </h1>
);

// const data = api.getData();

// Component Composition
const HeadingComponent = () => (
    <div id="container">
        <Title />
        <Title></Title>
        {Title()}
        {/* {data} */}
        <h1 id="heading">Namaste React Functional Component</h1>    
    </div>
);

console.log(HeadingComponent()); //React Element

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />) 
//can also be written as root.render(<HeadingComponent></HeadingComponent>)
