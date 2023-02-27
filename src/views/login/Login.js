import "./Login.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import images from './images/logo192.png';


const Login = () => {
    const navigate = useNavigate();

    const login = () => {
        navigate("/dashboard");
    }
    return (
        <div className="main-container">
            <div className="logo-container">
                <div>
                    <div className="logo-tech"><img src={images} /></div>
                    <div className="logo-label-container">TECHNO</div>
                    <div className="ver2-logo-label-container">UNIVERSITY</div>
                </div>
            </div>
            <div className="login-container">
                <div className="login-label">LOG IN</div>
                <div className="email-field-container">
                    <div>Email: <FontAwesomeIcon icon={faEnvelope} className="email-icon" /></div>
                    <input placeholder="Sample@gmail.com" type="text" className="login-input"></input>
                </div>
                <div className="margin-top">
                    <div className="password-field-container">
                        <div>Password:<FontAwesomeIcon icon={faLock} className="password-icon" /></div>
                        <input placeholder="Password" type="password" className="login-input"></input>
                    </div>
                    <div className="remember-me">
                        <input type= "checkbox" />Remember Me </div>
                    <button className="login-btn" onClick={() => login()}>Log In</button>
                </div>
            </div>
        </div>
    )
}
export default Login;   
