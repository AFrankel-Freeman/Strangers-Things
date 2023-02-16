import React, {useEffect, useState} from "react";
import {createRoot} from "react-dom/client";
import Register from "./component/Register.js";
import {HashRouter, Routes, Route} from 'react-router-dom';
import AllPosts from "./component/AllPosts.js";
import Header from "./component/Header.js";
import Login from "./component/Login.js";
import Profile from "./component/Profile.js";




const App = () => {
    
    return (
        <div>
            <Header />
            <Routes>
            <Route path="/#" element={<App />}></Route>
                <Route path="posts" element={<AllPosts />} ></Route>
                <Route path="login" element={<Login />} ></Route>
                <Route path="profile" element={<Profile />}></Route>
                <Route path="register" element={<Register />}></Route>
                
            </Routes>        
        </div>  
    )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <HashRouter>
        <App />
    </HashRouter>
);
