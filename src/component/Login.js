import React, {useState, useEffect} from "react";
import Register from "./Register";
import {Link, Routes, Route} from "react-router-dom";

const Login = () =>{
    const [showLoginButton, setShowLoginButton] = useState(true)

    const showRegisterButton = () => {
        setShowLoginButton(false);
    }

    const backToLoginButton = () => {
        setShowLoginButton(true);
    }

    return(
        <div>
            <form>
                <input type="text" placeholder="Username"></input>
                <input type="text" placeholder="Password"></input>
                {
                    showLoginButton ? 
                    <div>
                        <button> Login</button>
                        <Link to="/register">Click Here to Register!</Link>
                    </div>
                    :
                    <div> 
                        <button>Register</button>
                        <button onClick = {backToLoginButton}>Already Registered? Click Here!</button>
                    </div>
                }
            </form>
        </div>
    )
}

export default Login;