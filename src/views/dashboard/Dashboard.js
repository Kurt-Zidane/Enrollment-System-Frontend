import "./dashboard.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import images from './images/logo192.png';
import React, { useState } from "react";

const Dashboard = () => {
    const navigate = useNavigate();

    const courses = () => {
        navigate("/courses");
    }
    return (
        <div className="main-dash-container">
            <div class="dash-header">
                <img src={images} alt="logo" width={50} height={55} />
                <span>TECHNO UNIVERSITY</span>
                <div className="label-dash">DASHBOARD</div>
                <div className="label-enrollastudent">ENROLL A STUDENT</div>
            </div>
            <div className="dash-label">Dashboard</div>
            <div className="horizontal_line"></div>
            <div>
                <button className="courses-btn" onClick={() => courses()}>
                    <div><FontAwesomeIcon icon={faBook} className="course-icon" /></div>
                    COURSES<div class="horizontal-line"></div>
                    <div><FontAwesomeIcon icon={faGreaterThan} className="proceed-icon" /></div>

                </button>
            </div>
        </div>
    )

};
export default Dashboard;