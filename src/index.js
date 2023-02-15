import React, {useEffect, useState} from "react";
import {createRoot} from "react-dom/client";
import Register from "./component/register.js";
import {HashRouter, Routes, Route} from 'react-router-dom';
import AllPosts from "./component/AllPosts.js";




const App = () => {
    
    return (
        <div>
            <h1>Strangers Things</h1>
            <AllPosts />
        </div>
       
    )
        
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <HashRouter>
    <App/>
    </HashRouter>
);
