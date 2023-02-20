import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";

const APIURL='https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/users/login'

const Login = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    let token = null


    const handleSubmit = async (event) => {
        // event.preventDefault()

    const response = await fetch (APIURL, {
        method: "POST",
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: 'username',
                password: 'password',
            },
        }),
    })
        .then(response => response.json())
        .then(result => {
            token = result.data.token
            localStorage.setItem("loginToken",token)
            localStorage.setItem("username",username)
            console.log("local storage", localStorage)
            navigate("/")
        })
        .catch(console.error);

    setUsername("")
    setPassword("")
    }   
    // "63e821ff21c94600159108c9"
    
    if(!token){

    return(
        <div>
            <h1>Current User:</h1>
            <form className="boxed-form-login" onSubmit={handleSubmit}>
                <input 
                    className="new-post-form"
                    type="text" 
                    value={username} 
                    placeholder="Username"
                    onChange= {(event) => setUsername(event.target.value)}>
                </input>
                <input 
                    className="new-post-form"
                    type="text" 
                    value={password} 
                    placeholder="Password"
                    onChange= {(event) => setPassword(event.target.value)}>
                </input>
                <div className="login-register">
                    <button> Login</button>
                    <Link to="/register">Click Here to Register!</Link>
                </div>
            </form>
        </div>
    )}
}

export default Login;