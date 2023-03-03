import "./dashboard.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faGraduationCap, faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import images from './images/logo192.png';


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
            <div class="dash-header">
                <img src={images} alt="logo" width={50} height={55} />
                <span>TECHNO UNIVERSITY</span>
                <div className="label-dash">DASHBOARD</div>
                <div className="label-enrollastudent">ENROLL A STUDENT</div>
            </div>
            <div>
                <div className="dash-label">Dashboard</div>
                <div className="horizontal_line"></div>
            </div>
            <div>
                <div>
                    <button className="courses-btn" onClick={() => courses()}>
                        <div><FontAwesomeIcon icon={faBook} className="course-icon" /></div>
                        COURSES<div class="horizontal-line"></div>
                        <div><FontAwesomeIcon icon={faGreaterThan} className="proceed-icon" /></div>
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