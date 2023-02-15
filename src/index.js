import React, {useEffect, useState} from "react";
import {createRoot} from "react-dom/client";
// import Register from "./register.js";
import {HashRouter, Routes, Route} from 'react-router-dom';
import axios from "axios";

const URL='https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/posts';


const App = () => {
    const [listOfPosts, setListOfPosts]= React.useState(null);

    React.useEffect(() => {
        axios
            .get(URL)
                .then((response) => {setListOfPosts(response.data);
                    console.log(response)
                });
    }, []
    );
    
    if (!listOfPosts) return null;

    return (
        <div>
            <h1>Posts:{listOfPosts.posts}</h1>
     
       
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
