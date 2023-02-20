import React, {useEffect, useState} from "react";
import {createRoot} from "react-dom/client";
import Register from "./component/register.js";
import {HashRouter, Routes, Route} from 'react-router-dom';
import AllPosts from "./component/AllPosts.js";
import Header from "./component/Header.js";
import Login from "./component/Login.js";
import Profile from "./component/Profile.js";
import NewPost from "./component/NewPost.js"
import "./styles/main.css"



const token = localStorage.getItem("loginToken")

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [token, setToken] = useState(localStorage.getItem("loginToken"))

    useEffect(()=>{
         if(token){
             setIsLoggedIn(true)
         }if(!token){
             setIsLoggedIn(false)
         }
         //can only see logout button if you refresh the page
     }, [isLoggedIn])

     const logout = () =>{
         localStorage.removeItem("loginToken")
         setIsLoggedIn(false)
    }


    return (
        <div className="container">
        <Header isLoggedIn = {isLoggedIn} logout = {logout}/>
            <Routes>
            <Route path="/#" element={<App/>}></Route>
                <Route path="/" element={<AllPosts />}></Route> 
                <Route path="posts" element={<AllPosts />} ></Route>
                <Route path="login" element={<Login />} ></Route>
                <Route path="profile" element={<Profile />}></Route>
                <Route path="register" element={<Register />}></Route>
                <Route path="newpost" element={<Register/>}></Route>
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
