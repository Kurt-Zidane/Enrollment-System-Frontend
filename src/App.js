import { Routes, Route } from "react-router-dom";
import Dashboard from "./views/dashboard/Dashboard";
import EnrollAStudent from "./views/enrollStudent/EnrollAStudent";
import Login from "./views/login/Login";
import Courses from "./views/courses/Courses";
import EnrolledStudents from "./views/enrolledStudents/EnrolledStudents";
import Faculty from "./views/faculty/Faculty";

import { Provider } from "react-redux";
import Store from "./Features/Redux/Store/Store";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()
function App() {
  return (
    <Provider store={Store}>
      <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/enrollstudent" element={<EnrollAStudent />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/enrolledStudents" element={<EnrolledStudents />} />
      <Route path="/faculty" element={<Faculty/>} />
      </Routes>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;