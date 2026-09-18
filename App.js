
// const heading = document.createElement("h1");
// heading.innerText = "Hello world from Javascript";

// const root = document.getElementById("root");

// root.appendChild(heading);


// const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World from React");
// console.log(heading);  //object
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am an h1 Tag</h1>
 *      </div>
 * </div>
 * 
 * ReactElement (Object) => HTML (Browser Understands)
 * 
 */

// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("div",{id:"child"},
//         React.createElement("h1", {}, "I am an h1 Tag")
//     )
// );

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am an h1 Tag</h1>
 *          <h2>I am an h2 Tag</h2>
 *      </div>
 * </div>
 * 
 */

// const parent = React.createElement("div", {id: "parent"},
//     React.createElement("div", {id: "child"}, [
//         React.createElement("h1", {}, "I am an h1 Tag"),
//         React.createElement("h2", {}, "I am an h2 Tag")
//     ])
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

/**
 * <div id="parent">
 *      <div id="child1">
 *          <h1>I am an h1 Tag</h1>
 *          <h2>I am an h2 Tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I am an h1 Tag</h1>
 *          <h2>I am an h2 Tag</h2>
 *      </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "I am an h1 Tag"),
        React.createElement("h2", {}, "I am an h2 Tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I am an h1 Tag"),
        React.createElement("h2", {}, "I am an h2 Tag"),
    ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// const root = ReactDOM.createRoot(document.getElementsByTagName("body")[0]);

root.render(parent);


// JSX