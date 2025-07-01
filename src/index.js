import React from "react";
import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import AutProvider from "./Context/ContextAuth";

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
    <AutProvider>



 <BrowserRouter basename="/">
        <App />
    </BrowserRouter>

    </AutProvider>
   
)