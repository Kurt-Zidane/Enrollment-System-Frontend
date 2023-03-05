import "./dashboard.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faBook, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/header/Header";

const Dashboard = () => {
    const navigate = useNavigate();

    const courses = () => {
        navigate("/courses");
    }
    const enrolledStudents = () => {
        navigate("/enrolledStudents");
    }
    return (
        <div className="main-dash-container">
            <Header></Header>
            <div>
                <div className="dash-label">Dashboard</div>
                <div className="horizontal_line"></div>
            </div>
            <div>
                <div>
                    <button className="courses-btn" onClick={() => courses()}>
                        <div><FontAwesomeIcon icon={faBook} className="course-icon" /></div>
                        COURSES<div class="horizontal-line"></div>
                        <div><FontAwesomeIcon icon={faAnglesRight} className="proceed-icon" /></div>
                    </button>
                    <button className="enrolled-students-btn" onClick={() => enrolledStudents()}>
                        <div><FontAwesomeIcon icon={faGraduationCap} className="enrolled-stud-icon" /></div>
                        ENROLLED STUDENTS<div class="horizontal-line-en"></div>
                        <div className="number-of-students">100</div>
                    </button>
                </div>
            </div>
        </div>
    )

};
export default Dashboard;