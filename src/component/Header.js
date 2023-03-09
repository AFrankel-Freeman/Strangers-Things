import React from "react";
import {Link} from "react-router-dom";
import "../styles/main.css"

const Header = ({isLoggedIn, setIsLoggedIn}) => {
 
    const token = window.localStorage.getItem("loginToken")

    const logOut = ()=>{
       window.localStorage.removeItem("loginToken");
       setIsLoggedIn(false);
    }   

    return(
        <div>
            <header>
                <span className ="logo">Strangers Things</span>
                <div className="headerlinks">
                    <Link className="headerlink" to="/posts">Home</Link>
                    { 
                        isLoggedIn ?
                        <Link className="headerlink" to="/" onClick= {logOut}>Logout</Link> :
                        <Link className="headerLink" to="/login">Login/Register</Link> 
                    }
                    <Link className="headerlink" to="/profile">Profile</Link>
                </div>
            </header>
        </div>
    )
}

export default Header;