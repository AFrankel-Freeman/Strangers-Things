import React,{ useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";


const APIURL='https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/users/register'
const Register = ()=> {
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
    const [apiResponse, setApiResponse]= useState("")
    const navigate = useNavigate();

    const handleSubmit= async (event) => {
        event.preventDefault()

    const response = await fetch (APIURL, {
        method:"POST",
        headers:{
            'Content-Type': "application/json"
        },
        body:JSON.stringify({
            user:{
                username:username,
                password:password,
            },
        }),
    })

    const data = await response.json()
    setApiResponse(data.success)

    navigate("/login");
    
    setUsername("")
    setPassword("")

}
    return(
        <div>
            <h1>Register User:</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                </label>
                <input 
                    type="text"
                    value={username}
                    onChange= {(event) => setUsername(event.target.value)}  
                />   
                <label> Password:</label>   
                <input
                    type="text"
                    value={password}
                    onChange= {(event) => setPassword(event.target.value)}
           />     
                <button type = "submit"> Submit </button>
            </form>
            {apiResponse === false ? (
                <h4> user already exists</h4>
                ): apiResponse === true?(
                    <h4>Registration Successful</h4>
                ): ("")
            }
            <Link to="/login">Already Registered? Click Here!</Link>

            
        </div>
    )
}

export default Register