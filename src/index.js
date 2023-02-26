import React, {useState} from "react";
import {createRoot} from "react-dom/client";
import Register from "./component/register.js";
import {HashRouter, Routes, Route} from 'react-router-dom';
import AllPosts from "./component/AllPosts.js";
import Header from "./component/Header.js";
import Login from "./component/Login.js";
import Profile from "./component/Profile.js";
import "./styles/main.css"
import SinglePost from "./component/SinglePost.js";



const token = window.localStorage.getItem("loginToken")

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(window.localStorage.getItem("loginToken"))
    const [token, setToken] = useState(window.localStorage.getItem("loginToken"))

    //can only see logout button after refreshing
  


    return (
        <div className="container">
        <Header isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/>
            <Routes>
            <Route path="/#" element={<App/>}></Route>
                <Route path="/" element={<AllPosts />}></Route> 
                <Route path="posts" element={<AllPosts />} ></Route>
                <Route path="login" element={<Login />} ></Route>
                <Route path="profile" element={<Profile />}></Route>
                <Route path="register" element={<Register />}></Route>
                <Route path="newpost" element={<Register/>}></Route>
                <Route path="posts/:id" element={<SinglePost />}></Route>
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
