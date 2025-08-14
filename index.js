import React from "react";
import ReactDOM from "react-dom/client"; 

const element = React.createElement(
    "h1", { style: { color: "black" } }, "Welcome Defender087"
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);