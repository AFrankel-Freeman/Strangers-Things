import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const Header = () => {
    const [header, setHeader] = useState ("")

    return(
        <div>
            <header>
                <span>Strangers Things</span>
                <Link to="/posts">Home</Link>
                <Link to="/login">Login/Register</Link>
                <Link to="/profile">Profile</Link>
            </header>
        </div>
    )

}

export default Header;