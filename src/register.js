import React,{useRef, useState, useEffect} from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const USER_REGEX = /^[a-zA-Z][a-ZA-Z0-9-_]{3,23}$/;
const PWD_REGEX= /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = ()=> {
    const userRef = useRef();
    const errRef = useRef();


    const [user, setUser]= useState("");
    const [validName, setValidName]= useState(false);
    const [userFocus, setUserFocus]= useState(false);

    const [pwd, setPwd]= useState("");
    const [validPwd, setValidPwd]= useState(false);
    const [pwdFocus, setPwdFocus]= useState(false);

    const [matchPwd, setmatchPwd]= useState("");
    const [validMatch, setValidMatch]= useState(false);
    const [matchFocus, setMatchFocus]= useState(false);
    
    const [errMsg, setErrMsg]= useState("");
    const [success, setSuccess]= useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() =>{
        const result= USER_REGEX.test(user)
        setValidName(result);
    },[user])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
    },[pwd,matchPwd])

    useEffect(() => {
        setErrMsg("");
    }, [user, pwd, matchPwd])


    return(
        <section>
            <p ref={errRef} className= {errMsg ? "errMsg" : "offScreen"}> {errMsg} </p>
            <h1>Register</h1>
            <form>
                <label htmlFor ="username">
                    Username:
                </label>
                <input 
                    type="text"
                    id="username"
                    ref={userRef}
                    onChange= {(event) => setUser(event.target.value)}
                    required   
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}  
                />           
            </form>
        </section>
    )
}

export default Register