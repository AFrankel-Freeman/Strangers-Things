import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "../styles/main.css"

const Header = ({isLoggedIn, logout}) => {
    const [header, setHeader] = useState ("")
 
    const token = localStorage.getItem("loginToken")

    const logOut = ()=>{
       logout()
       window.location.reload()
    }   

    return(
        <div>
            <header>
                <span className ="logo">Strangers Things</span>
                <div className="headerlinks">
                    <Link className="headerlink" to="/posts">Home</Link>
                    { !isLoggedIn && <Link className="headerLink" to="/login">Login/Register</Link>}
                    {isLoggedIn && <Link className="headerlink" to="/" onClick= {logOut}>Logout</Link>}
                    <Link className="headerlink" to="/profile">Profile</Link>
                </div>
            </header>
        </div>
    )

}

export default Header;