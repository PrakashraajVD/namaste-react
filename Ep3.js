import React from "react";
import ReactDOM from "react-dom/client";

// // coding assignment-1
// const titleElement=React.createElement("div",{className:"title"},[React.createElement("h1",{},"Hello from h1"),
//     React.createElement("h2",{},"Hello from h2"),
//     React.createElement("h3",{},"Hello from h3")
// ]);

// const titleElement1=(
//     <div className="title">
//         <h1>Hello from h1</h1>
//         <h2>Hello from h2</h2>
//         <h3>Hello from h3</h3>
//     </div>
// )

// const TitleComponent=()=>{
//     return(
//         <div className="title">
//             {titleElement}
//             {titleElement1}
//             <h1>Hello from h1</h1>
//             <h2>Hello from h2</h2>
//             <h3>Hello from h3</h3>
//         </div>
//     )
// }

// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(<TitleComponent/>);

// coding assignment-2
const Header=()=>{
    return(
        <div id="header">
            <img id="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRinBTbiQS-UAIb_vQyDMHb3dG_fiZCUwkbTg&s"></img>
            <input type="search"></input>
            <img id="img2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJPZ42stB83IQnlqVDgCChDZ3ZNO58hYESw&s"></img>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>)