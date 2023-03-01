import { Routes, Route } from "react-router-dom";
import Dashboard from "./views/dashboard/Dashboard";
import EnrollAStudent from "./views/enrollStudent/EnrollAStudent";
import Login from "./views/login/Login";
import Courses from "./views/courses/Courses";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/enroll-student" element={<EnrollAStudent />} />
      <Route path="/courses" element={<Courses/>} />
    </Routes>
  );
}

export default App;
