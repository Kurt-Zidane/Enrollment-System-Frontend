import "./Login.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import images from './images/logo192.png';
import React, { useState } from "react";


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        console.log("email: ", email);
        console.log("password: ", password);
        navigate("/dashboard");
        // TODO implement api call for login
    }
    return (
        <div className="main-container">
            <div className="logo-container">
                <div>
                    <div className="logo-tech"><img src={images} alt="Logo" /></div>
                    <div className="logo-label-container">TECHNO</div>
                    <div className="ver2-logo-label-container">UNIVERSITY</div>
                </div>
            </div>
            <div className="login-container">
                <div className="login-label">LOG IN</div>
                <div className="email-field-container">
                    <div>Email: <FontAwesomeIcon icon={faEnvelope} className="email-icon" /></div>
                    <input placeholder="Sample@gmail.com" type="text" className="login-input" 
                    onChange={(event) => setEmail(event.target.value)}>
                    </input>
                </div>
                <div className="margin-top">
                    <div className="password-field-container">
                        <div>Password:<FontAwesomeIcon icon={faLock} className="password-icon" /></div>
                        <input placeholder="Password" type="password" className="login-input" 
                        onChange={(event) => setPassword(event.target.value)}></input>
                    </div>
                    <div className="remember-me">
                        <input type="checkbox" />Remember Me </div>
                    <button className="login-btn" onClick={() => handleSubmit()}>Log In</button>
                </div>
            </div>
        </div>
    )
}
export default Login;   
