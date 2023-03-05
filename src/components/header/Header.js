import "./Header.css";
import images from '../../images/logo192.png';
import { faAngleDown, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentRoute, setCurrentRoute] = useState("dashboard");
    const enrollStudent = () => {
        navigate("/enrollStudent");
    }
    const dashboard = () => {
        navigate("/dashboard");
    }
    useEffect(() => {
        const route = location.pathname.split("/")[1];
        setCurrentRoute(route);
    }, [location])
    return (
        <div class="dash-header">
            <img src={images} alt="logo" width={50} height={55} />
            <span>TECHNO UNIVERSITY</span>
            <div className="label-dash" onClick={() => dashboard()}>
                <div style={{
                    marginTop: currentRoute === "dashboard" ? 15 : ""
                }}>DASHBOARD</div>
                {
                    currentRoute === "dashboard"
                        ? <div className="hr-line"></div>
                        : null
                }
            </div>
            <div className="label-enrollastudent" onClick={() => enrollStudent()}>
                <div style={{
                    marginTop: currentRoute === "enrollStudent" ? 15 : ""
                }}>
                    ENROLL A STUDENT
                </div>
                {
                    currentRoute === "enrollStudent"
                        ? <div className="hr-line"></div>
                        : null
                }
            </div>
            <div><FontAwesomeIcon icon={faCircleUser} className="user-icon" /></div>
            <span>JUAN D.</span>
            <div><FontAwesomeIcon icon={faAngleDown} className="user-more-icon" /></div>
        </div>
    )
}
export default Header;