import React from 'react';
import ReactDOM from 'react-dom/client';

const element = (
    <div>
        <img src = {require("./react-logo.png")} width = "40px" />
        <h1>This is a react practice project</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)
//console.log(element)

//Thought experiment: use .append() instead of ReactDOM
//document.getElementById("root").append(JSON.stringify(element))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
