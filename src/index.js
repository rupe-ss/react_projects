import React from 'react';
import ReactDOM from 'react-dom/client';

const element = <h1>Learning React !!!</h1>
console.log(element)

//Thought experiment: use .append() instead of ReactDOM
document.getElementById("root").append(JSON.stringify(element))

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
