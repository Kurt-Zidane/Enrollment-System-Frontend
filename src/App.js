import { Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import EnrollAStudent from "./views/enrollStudent/EnrollAStudent";
import Login from "./views/login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/enroll-student" element={<EnrollAStudent />} />
    </Routes>
  );
}

export default App;
