import { Routes, Route } from "react-router-dom";
import Dashboard from "./views/dashboard/Dashboard";
import EnrollAStudent from "./views/enrollStudent/EnrollAStudent";
import Login from "./views/login/Login";
import Courses from "./views/courses/Courses";
import EnrolledStudents from "./views/enrolledStudents/EnrolledStudents";

import { Provider } from "react-redux";
import Store from "./Features/Redux/Store/Store";

function App() {
  return (
    <Provider store={Store}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/enrollstudent" element={<EnrollAStudent />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/enrolledStudents" element={<EnrolledStudents />} />
      </Routes>
    </Provider>
  );
}

export default App;
