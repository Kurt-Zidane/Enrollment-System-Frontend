import * as React from 'react';
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import images from './images/logo192.png';
import { useState } from "react";
import { UserInfo, UserLogin } from "../../components/Api/Api";
import { useDispatch } from "react-redux";
import { SetUser } from "../../components/Redux/Slices/User";
import { SetLoggedIn } from "../../components/Redux/Slices/LoginState";


const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        username: "",
        password: "",
    });
    const [error, setError] = useState("");

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
                        onChange={e => {
                            setUser({ ...user, username: e.target.value });
                        }}>
                    </input>
                </div>
                <div className="margin-top">
                    <div className="password-field-container">
                        <div>Password:<FontAwesomeIcon icon={faLock} className="password-icon" /></div>
                        <input placeholder="Password" type="password" className="login-input"
                            onChange={e => {
                                setUser({ ...user, password: e.target.value });
                            }}>
                        </input>
                    </div>
                    <div className="remember-me">
                        <input type="checkbox" />Remember Me </div>
                    <button className="login-btn" onClick={async () => {
                        setUser({
                            username: "",
                            password: "",
                        });
                        if (await UserLogin(user)) {
                            await dispatch(SetLoggedIn());
                            await dispatch(SetUser(await UserInfo()));
                            navigate("/dashboard");
                        } else {
                            setError("Invalid Login");
                        }
                    }}>Log In</button>
                    <p>{error}</p>
                </div>
            </div>
        </div>
    )
}
export default Login;  