import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
  
    const login = () => {
        navigate("/dashboard");
    }
    return (
        <div className="main-container">
            <div className="logo-container">
            </div>
            <div className="login-container">
                <div className="login-label">LOGIN</div>
                <div>
                    <div>Email:</div>
                    <input placeholder="Sample@gmail.com" type="text" className="login-input"></input>
                </div>
                <div className="margin-top">
                    <div>Password:</div>
                    <input type="password" className="login-input"></input>
                </div>
                <button className="login-btn" onClick={() => login()}>Login</button>   
            </div>
        </div>
    )

}
export default Login;   
