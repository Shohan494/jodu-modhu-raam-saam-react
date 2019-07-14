import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//import Example from './Test';
import { BrowserRouter } from 'react-router-dom';

const container = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

ReactDOM.render(container, document.getElementById("root"));